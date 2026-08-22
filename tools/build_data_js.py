#!/usr/bin/env python3
"""Rigenera data.js a partire da data.json.

data.json e' la fonte unica dei dati del sito. La pagina lo carica via fetch(),
ma i browser bloccano fetch() sulle pagine aperte da file://: data.js serve da
riserva per quel caso e deve restare allineato a data.json.

    python3 tools/build_data_js.py           # riscrive data.js
    python3 tools/build_data_js.py --check   # verifica soltanto (uscita 1 se disallineato)
"""

import json
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "data.json"
DST = ROOT / "data.js"

HEADER = """/* FILE GENERATO AUTOMATICAMENTE da data.json — NON modificare a mano.
   Serve da riserva quando la pagina è aperta da file:// (il browser blocca il fetch).
   Per rigenerarlo dopo una modifica a data.json:
   python3 tools/build_data_js.py
   La CI verifica che i due file restino allineati. */
"""


def render() -> str:
    data = json.loads(SRC.read_text(encoding="utf-8"))
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    return HEADER + "window.__DATA__ = " + payload + ";\n"


def main() -> int:
    atteso = render()
    if "--check" in sys.argv:
        attuale = DST.read_text(encoding="utf-8") if DST.exists() else ""
        if attuale != atteso:
            print("data.js non è allineato a data.json.", file=sys.stderr)
            print("Rigeneralo con: python3 tools/build_data_js.py", file=sys.stderr)
            return 1
        print("data.js è allineato a data.json.")
        return 0
    DST.write_text(atteso, encoding="utf-8")
    print(f"Scritto {DST.relative_to(ROOT)} ({len(atteso):,} byte).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
