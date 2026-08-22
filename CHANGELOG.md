# Diario delle modifiche

Il progetto ha due versioni che scorrono in parallelo e non vanno confuse:

- la **versione dei dati** (`data.json` → `meta.versione`), che cambia solo quando
  cambiano i numeri o il metodo della ricerca — oggi **2.1**;
- lo **stato del sito**, che cambia molto più spesso, per interfaccia e codice.

Le date sono quelle dei commit. Le correzioni di merito ai dati sono documentate per
intero nel [§10 della ricerca](efficacia_governi_italiani_1900_2025.md#10-correzioni-rispetto-alle-versioni-precedenti);
qui se ne dà solo il sommario.

---

## Non rilasciato

### Aggiunto
- Documentazione completa del repository: README, licenze separate per codice
  (MIT) e contenuti (CC BY 4.0), guida al contributo, codice di condotta, politica
  di sicurezza, `CITATION.cff`, modelli per issue e pull request.
- `tools/build_data_js.py` — rigenerazione riproducibile di `data.js` da `data.json`,
  con modalità `--check` per la verifica.
- `tools/validate_data.py` — controlli strutturali su `data.json`: griglia
  quinquennale completa, chiavi obbligatorie, tipi, serie in ordine crescente, malus
  asset nella scala 0–3, somma dei pesi del giudizio pari a 100.
- `tools/check_links.py` e un workflow mensile che verifica la raggiungibilità
  degli URL citati nel §12: un link morto rende un dato non più verificabile.
- Workflow CI che esegue gli strumenti a ogni push e pull request, e controlla che
  il sito non carichi nulla da domini esterni.

### Corretto
- Due fonti del §12 non erano più raggiungibili: il deep link
  `storia.camera.it/governi` (404, il portale non espone più quella pagina) ora punta
  alla home del Portale storico, e `corteconti.it` — host inesistente — è diventato
  `www.corteconti.it`. Nessun dato cambia.

---

## Sito — 22 agosto 2026

### Aggiunto
- **Topbar sticky** con il logo del progetto a sinistra (link all'inizio della
  pagina) e due menù a cascata: **Periodo** (select degli estremi e quattro
  preimpostati: tutto, Regno e fascismo, Prima Repubblica, Seconda Repubblica) e
  **Sezioni** (indice dei capitoli più il pulsante "Apri tutti").
- L'etichetta del bottone Periodo mostra l'intervallo attivo.

### Modificato
- La barra delle sezioni e la barra dell'intervallo, prima due fasce separate a
  tutta larghezza, sono confluite nell'unica topbar: più spazio verticale per i
  contenuti.
- Margine di scorrimento maggiorato sotto i 640px, dove la topbar va su due righe.

### Accessibilità
- I menù dichiarano `aria-expanded`, si chiudono con `Esc` restituendo il fuoco al
  bottone che li ha aperti, e con un clic fuori. I controlli del pannello Periodo
  lasciano il menù aperto, per permettere più regolazioni consecutive.

---

## Sito — 16 agosto 2026

### Aggiunto
- Prima pubblicazione della pagina di consultazione interattiva, con `.nojekyll`
  per servire i file statici su GitHub Pages senza passare da Jekyll.
- Grafici SVG generati a runtime, gauge, tabelle ordinabili, capitoli in accordion,
  temi chiaro/scuro/auto.
- **Sezione Sintesi** con il doppio giudizio per area politica: quello *universale*
  (la migliore in assoluto per ciascuna categoria, senza aggregazione) e quello
  *ponderato* (media pesata dei ranghi su cinque categorie, con i pesi dichiarati in
  `CAT_GIUDIZIO`).
- **Selettore dell'intervallo temporale**: grafici, gauge, classifica e righe delle
  tabelle si ricalcolano sul solo periodo scelto.

### Modificato
- Refactor della pagina: CSS e JavaScript estratti in file esterni.
- I dati sono stati estratti in `data.json` come **fonte unica**, con `meta` che
  dichiara versione, unità di misura e avvertenze sulle rotture di serie.

### Corretto
- Apertura da `file://`: i browser bloccano `fetch()` sulle pagine locali, quindi la
  pagina restava vuota al doppio clic. Introdotto `data.js`, copia generata di
  `data.json` che assegna i dati a `window.__DATA__` e fa da riserva.

---

## Dati 2.1 — 16 agosto 2026

Verifica puntuale di **tutti** i valori sulle fonti primarie (CSV e API di OWID,
Eurostat, ISTAT, SIPRI; PDF di Banca d'Italia, MEF, Corte dei Conti).

### Aggiunto
- **Debito pubblico in % del PIL** come criterio di valutazione, in Tabella 1: serie
  Banca d'Italia (Francese-Pace) fino al 1990, Eurostat SEC2010 dal 1995, con
  l'avvertenza esplicita che le due non sono omogenee (3–6 punti di scarto nelle
  sovrapposizioni).
- **Tabella 5 — cessioni di asset statali e nazionalizzazioni (1900–2026)**: incassi
  nominali, destinazione dei proventi, controversie documentate, e le operazioni
  inverse (salvataggi, ri-nazionalizzazioni).
- **§7, il rischio "svendita"**: cinque criteri verificabili — congruità del prezzo,
  destinazione dei proventi, dividendi persi contro interessi risparmiati, qualità
  della regolazione post-vendita, socializzazione delle perdite — applicati caso per
  caso.
- Delitti 2020 (1.900.624, valore ufficiale ISTAT che la v2.0 dava per non
  reperibile) e 2024 (2.399.347).

### Corretto
- **Spesa pubblica totale 2024: 50,4%, non 53,6%.** Il 53,6% era il dato 2023,
  gonfiato dai crediti d'imposta Superbonus contabilizzati come spesa.
- **Istruzione COFOG 2015: 4,0%, non 4,4%** (e 2010: 4,4, non 4,5).
- **Spesa media mensile delle famiglie 2008 e 2010: 2.485 € e 2.453 €**, non 2.648 €
  e 2.604 € — i valori della v2.0 non trovavano riscontro in alcuna serie ISTAT.
- Imprecisioni minori su difesa 1965 e 2020, sanità 1985 e 2024, protezione sociale
  2015 e 2024, titoli di studio 2020, reddito SHIW 2008.
- Composizioni di governo integrate (Giolitti V, Moro IV, Berlusconi III, Renzi) e
  denominazione PSU/PSDI per il 1970. Tutte le 26 attribuzioni anno → governo sono
  risultate corrette.

---

## Dati 2.0 — 15 agosto 2026

Rifondazione metodologica rispetto alla ricerca originale.

### Modificato
- **Finestre di 5 anni invece di 10**: 26 punti di osservazione anziché 13. Rende
  visibili il crollo del 1915, il boom 1920–1925, il collasso del 1945 (−44,5% pro
  capite in cinque anni) e la doppia recessione 2010–2015.
- **Ogni valore tracciato a una fonte aperta e ufficiale**; dove non verificabile,
  `N/D` anziché una stima.
- **Unità dichiarate e omogenee**: PIL in dollari internazionali a prezzi 2011 (PPP),
  Maddison Project Database 2023.

### Corretto
- Il **+124% del PIL nel decennio 1950–60** era sovrastimato: Maddison dà +80% totale
  e +69% pro capite. Il miracolo economico fu una crescita costante di ~+27% per
  quinquennio dal 1955 al 1970, non un unico decennio anomalo.
- **I reati erano sbagliati in quasi tutte le righe.** Il picco storico è il 1990–91
  (2.501,6 mila delitti), non il 2010; il minimo del 2020 è un effetto lockdown, non
  una tendenza strutturale.
- **L'istruzione era sovrastimata** per gli anni recenti (45,2% e 55,1% secondo
  Eurostat, non 55% e 60%) e non documentabile per il periodo pre-1950.
- **Il welfare in % PIL era gonfiato** per gli anni '70–'90 (13,8 / 17,3 / 20,6
  secondo OCSE-SOCX, non 18 / 22 / 24).
- **Reddito e capacità di spesa pre-2005 rimossi**: i valori in "euro equivalenti
  2020" della ricerca originale non avevano una fonte tracciabile.
- Attribuzioni di governo e popolazione 2020 imprecise.
