## Che cosa cambia

<!-- Una o due frasi. Un tema per pull request. -->

## Perché

<!-- Il problema che risolve, o la issue che chiude (Chiude #___). -->

## Tipo di modifica

- [ ] Dati (`data.json` e la tabella corrispondente nella ricerca)
- [ ] Ricerca (`efficacia_governi_italiani_1900_2025.md`)
- [ ] Sito (`index.html`, `style.css`, `script.js`)
- [ ] Strumenti o CI (`tools/`, `.github/`)
- [ ] Documentazione

## Se tocca i dati

- [ ] Ho indicato **la fonte primaria** di ogni valore modificato, con URL e con il
      percorso per arrivare al numero (dataset, filtri, tavola).
- [ ] Ho aggiornato la ricerca oltre a `data.json`, e i due sono coerenti.
- [ ] Ho documentato la correzione nel **§10** della ricerca (valore vecchio, valore
      nuovo, fonte che ha risolto la discrepanza).
- [ ] Ho rigenerato `data.js` con `python3 tools/build_data_js.py`.
- [ ] `python3 tools/validate_data.py` passa.

### Fonti

<!--
Una riga per valore modificato:
  Tabella 3, spesa totale 2024: 53,6 → 50,4 — Eurostat gov_10a_main
  (unit=PC_GDP, sector=S13, na_item=TE, geo=IT), consultato il gg/mm/aaaa
-->

## Se tocca il sito

- [ ] Verificato nei temi chiaro **e** scuro.
- [ ] Verificato sotto i 640px di larghezza (la topbar va su due righe).
- [ ] I controlli interattivi restano usabili da tastiera e dichiarano il proprio
      stato (`aria-expanded`, `aria-sort`, `aria-label`).
- [ ] Nessuna dipendenza, nessun passo di build, nessuna chiamata di rete esterna
      introdotta.
