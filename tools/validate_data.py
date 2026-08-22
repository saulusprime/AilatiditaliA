#!/usr/bin/env python3
"""Controlli strutturali su data.json.

Non verifica i valori sulle fonti — quello resta un lavoro umano, descritto in
CONTRIBUTING.md — ma intercetta gli errori che romperebbero la pagina: chiavi
mancanti, tipi sbagliati, griglia quinquennale incompleta, serie fuori ordine,
pesi del giudizio incoerenti.

    python3 tools/validate_data.py
"""

import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
errori: list[str] = []


def err(msg: str) -> None:
    errori.append(msg)


def controlla_t1(t1: list) -> None:
    attesi = list(range(1900, 2030, 5))
    anni = [r.get("a") for r in t1]
    if anni != attesi:
        err(f"T1: la griglia quinquennale è {anni[:3]}…{anni[-1:]}, attesa 1900…2025 a passo 5")
    for r in t1:
        for k in ("a", "g", "c", "pop", "pil", "pc", "v", "d"):
            if k not in r:
                err(f"T1 {r.get('a')}: manca la chiave '{k}'")
        for k in ("pop", "pil", "pc", "v", "d"):
            v = r.get(k)
            if v is not None and not isinstance(v, (int, float)):
                err(f"T1 {r.get('a')}: '{k}' è {type(v).__name__}, atteso numero o null")
        if not isinstance(r.get("g"), str) or not r.get("g"):
            err(f"T1 {r.get('a')}: governo mancante")


def controlla_serie(nome: str, punti: list) -> None:
    """Le serie sono liste [anno, valore]; [null, null] è un'interruzione voluta."""
    ultimo = None
    for p in punti:
        if not isinstance(p, list) or len(p) != 2:
            err(f"{nome}: punto malformato {p!r}, atteso [anno, valore]")
            continue
        anno, val = p
        if anno is None:
            if val is not None:
                err(f"{nome}: interruzione di serie con valore non nullo {p!r}")
            ultimo = None
            continue
        if not isinstance(anno, (int, float)):
            err(f"{nome}: anno non numerico {anno!r}")
            continue
        if not (1900 <= anno <= 2030):
            err(f"{nome}: anno {anno} fuori dall'intervallo 1900–2030")
        if val is not None and not isinstance(val, (int, float)):
            err(f"{nome}: valore non numerico per l'anno {anno}: {val!r}")
        if ultimo is not None and anno <= ultimo:
            err(f"{nome}: anni fuori ordine crescente ({ultimo} → {anno})")
        ultimo = anno


def controlla_aree(aree: list) -> None:
    for a in aree:
        for k in ("n", "breve", "p0", "p1"):
            if k not in a:
                err(f"AREE_GIUDIZIO {a.get('n')}: manca la chiave '{k}'")
        if a.get("p0") is not None and a.get("p1") is not None and a["p0"] > a["p1"]:
            err(f"AREE_GIUDIZIO {a.get('n')}: periodo invertito ({a['p0']}–{a['p1']})")
        for k in ("cres", "deb", "istr", "crim", "asset"):
            v = a.get(k)
            if v is not None and not isinstance(v, (int, float)):
                err(f"AREE_GIUDIZIO {a.get('n')}: '{k}' è {type(v).__name__}, atteso numero o null")
        asset = a.get("asset")
        if asset is not None and not (0 <= asset <= 3):
            err(f"AREE_GIUDIZIO {a.get('n')}: malus asset {asset} fuori dalla scala 0–3")
    nomi = [a.get("n") for a in aree]
    if len(nomi) != len(set(nomi)):
        err("AREE_GIUDIZIO: nomi di area duplicati (sono la chiave del punteggio)")


def controlla_pesi() -> None:
    """I pesi del giudizio vivono in script.js: la somma dichiarata nel README è 100."""
    testo = (ROOT / "script.js").read_text(encoding="utf-8")
    pesi = [int(t.split("w:")[1].split(",")[0]) for t in testo.split("\n") if "w:" in t and "k:\"" in t]
    if not pesi:
        err("script.js: nessun peso trovato in CAT_GIUDIZIO")
    elif sum(pesi) != 100:
        err(f"script.js: i pesi di CAT_GIUDIZIO sommano a {sum(pesi)}, atteso 100")


def main() -> int:
    dati = json.loads((ROOT / "data.json").read_text(encoding="utf-8"))

    for k in ("meta", "T1", "ERE", "ISTR", "CRIM", "SPESA1", "SPESA2", "PRIV", "AREE_GIUDIZIO"):
        if k not in dati:
            err(f"data.json: manca la sezione '{k}'")
    if errori:
        for e in errori:
            print("✗", e, file=sys.stderr)
        return 1

    controlla_t1(dati["T1"])
    controlla_serie("CRIM", dati["CRIM"])
    controlla_serie("PRIV", dati["PRIV"])
    for gruppo in ("ISTR", "SPESA1", "SPESA2"):
        for nome, serie in dati[gruppo].items():
            controlla_serie(f"{gruppo}.{nome}", serie)
    controlla_aree(dati["AREE_GIUDIZIO"])
    controlla_pesi()

    anni_priv = {p[0] for p in dati["PRIV"]}
    mancanti = anni_priv - {int(a) for a in dati["PRIV_GOV"]}
    if mancanti:
        err(f"PRIV_GOV: manca l'etichetta di governo per {sorted(mancanti)}")

    if errori:
        for e in errori:
            print("✗", e, file=sys.stderr)
        print(f"\n{len(errori)} problemi trovati in data.json.", file=sys.stderr)
        return 1

    print(f"data.json valido: {len(dati['T1'])} punti di griglia, "
          f"{len(dati['AREE_GIUDIZIO'])} aree politiche.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
