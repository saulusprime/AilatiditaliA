#!/usr/bin/env python3
"""Verifica che gli URL citati in un documento siano ancora raggiungibili.

Serve alla manutenzione delle fonti: un link morto nel §12 rende un dato non più
verificabile, ed e' il momento di sostituirlo con una copia stabile.

Non fallisce su ogni errore: molti portali statistici rispondono 403 o 405 a una
richiesta automatica pur essendo perfettamente vivi in un browser. Sono segnalati
come 'da controllare a mano' e non fanno fallire il workflow; solo un 404, un 410 o
un host che non risolve contano come link rotto.

    python3 tools/check_links.py efficacia_governi_italiani_1900_2025.md
"""

import re
import socket
import sys
import urllib.error
import urllib.request

UA = "Mozilla/5.0 (compatible; AilatiditaliA-linkcheck/1.0; +https://github.com/saulusprime/AilatiditaliA)"
TIMEOUT = 25
ROTTI = {404, 410}


def urls(testo: str) -> list[str]:
    grezzi = re.findall(r"https?://[^\s<>()\[\]\"']+", testo)
    puliti = {u.rstrip(".,;:") for u in grezzi}
    return sorted(puliti)


def stato(url: str) -> tuple[str, str]:
    """Ritorna (esito, dettaglio) con esito in {ok, sospetto, rotto}.

    Prima si tenta HEAD, che e' piu' leggero per i server delle fonti. Molti pero'
    lo trattano male: Our World in Data risponde 404 a HEAD e 200 a GET. Qualunque
    esito negativo viene quindi riprovato in GET, ed e' quello a decidere.
    """
    def prova(metodo: str) -> tuple[str, str]:
        req = urllib.request.Request(url, headers={"User-Agent": UA}, method=metodo)
        try:
            with urllib.request.urlopen(req, timeout=TIMEOUT) as r:
                return "ok", str(r.status)
        except urllib.error.HTTPError as e:
            return ("rotto" if e.code in ROTTI else "sospetto"), f"HTTP {e.code}"
        except (urllib.error.URLError, socket.timeout, TimeoutError) as e:
            motivo = getattr(e, "reason", e)
            if isinstance(motivo, socket.gaierror):
                return "rotto", "host non risolto"
            return "sospetto", str(motivo)[:60]
        except Exception as e:
            return "sospetto", type(e).__name__

    esito, dettaglio = prova("HEAD")
    if esito == "ok":
        return esito, dettaglio
    return prova("GET")


def main(argv: list[str]) -> int:
    if len(argv) < 2:
        print(__doc__, file=sys.stderr)
        return 2

    testo = "\n".join(open(p, encoding="utf-8").read() for p in argv[1:])
    lista = urls(testo)
    print(f"Controllo {len(lista)} URL.\n")

    rotti, sospetti = [], []
    for u in lista:
        esito, dettaglio = stato(u)
        simbolo = {"ok": "·", "sospetto": "?", "rotto": "✗"}[esito]
        print(f"{simbolo} {dettaglio:<22} {u}")
        if esito == "rotto":
            rotti.append((u, dettaglio))
        elif esito == "sospetto":
            sospetti.append((u, dettaglio))

    print(f"\n{len(lista) - len(rotti) - len(sospetti)} raggiungibili, "
          f"{len(sospetti)} da controllare a mano, {len(rotti)} rotti.")

    if sospetti:
        print("\nDa controllare a mano (spesso sono portali che rifiutano le richieste automatiche):")
        for u, d in sospetti:
            print(f"  {d} — {u}")

    if rotti:
        print("\nLink rotti: vanno sostituiti con una copia stabile (Wayback Machine).", file=sys.stderr)
        for u, d in rotti:
            print(f"  {d} — {u}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
