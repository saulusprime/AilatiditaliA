# Come contribuire

Grazie per l'interesse. Questo è un progetto di documentazione quantitativa, non una
libreria: il contributo di gran lunga più prezioso è **la segnalazione di un dato
sbagliato, con la fonte primaria alla mano**.

## La regola che governa tutto

> **Nessun numero senza una fonte aperta, ufficiale e verificabile.**
> Dove il dato non è reperibile su tali fonti si scrive `N/D` — mai una stima
> presentata come misura.

Da questa regola discende tutto il resto. Una proposta che migliora la prosa ma
introduce un valore non tracciabile non viene accettata; una che sostituisce un
valore con uno peggiore ma verificabile, sì.

## Che cosa conta come fonte accettabile

In ordine di preferenza:

1. **Dataset ufficiali interrogabili** — Eurostat (con codice del dataset, es.
   `gov_10a_exp`), ISTAT/IstatData, SIPRI, OWID/Maddison. Sono i migliori perché
   chiunque può rifare la query.
2. **Pubblicazioni ufficiali con URL stabile** — comunicati e report ISTAT, quaderni
   Banca d'Italia, relazioni della Corte dei Conti, documenti MEF, dossier
   parlamentari.
3. **Letteratura accademica accessibile** — per i periodi storici in cui le fonti
   statistiche non esistono (Bel 2011 sulle privatizzazioni fasciste, Harrison sulla
   spesa bellica, Galassi & Harrison sulla Grande Guerra).

**Non sono sufficienti:** articoli di stampa senza il documento sottostante, voci
enciclopediche usate come fonte numerica primaria (accettabili solo per
l'attribuzione anno → governo, e sempre in coppia con storia.camera.it), stime
personali, ricostruzioni di modelli linguistici.

Se un valore è verificabile solo su fonte secondaria, va **marcato come tale nel
testo** — come già avviene per il Nuovo Pignone 1994 ("cifra di stampa, non
verificata su fonte primaria").

## Segnalare un dato sbagliato

Apri una issue con il modello **Segnalazione di un dato**. Servono quattro cose:

1. dove si trova il valore (tabella e anno, oppure la chiave in `data.json`);
2. il valore attualmente pubblicato;
3. il valore corretto;
4. **l'URL della fonte primaria** e, se serve, come arrivare al numero (codice del
   dataset, filtri applicati, pagina o tavola del PDF).

Non serve saper programmare: una issue ben documentata è un contributo completo.

## Modificare i dati

`data.json` è la **fonte unica**. La ricerca in
`efficacia_governi_italiani_1900_2025.md` è il documento di riferimento: se cambia un
numero, vanno aggiornati entrambi, e `data.js` va rigenerato.

```bash
# 1. modifica data.json (e la tabella corrispondente nella ricerca)
# 2. rigenera la copia per l'apertura da file://
python3 tools/build_data_js.py
# 3. controlli strutturali
python3 tools/validate_data.py
# 4. verifica finale, la stessa che gira in CI
python3 tools/build_data_js.py --check
```

Poi apri il sito in locale e controlla che grafici e classifica reggano, soprattutto
agli estremi dell'intervallo:

```bash
python3 -m http.server 8000   # http://localhost:8000
```

### Convenzioni di `data.json`

- Le serie sono liste `[anno, valore]` in ordine crescente di anno.
- `null` come valore significa **dato non disponibile**.
- La coppia `[null, null]` è una **interruzione voluta della linea**, usata per non
  congiungere graficamente due tratti di serie non omogenei (per esempio la sanità
  prima e dopo il 1990, o l'istruzione prima e dopo il 1988).
- In `T1`: `a` anno, `g` governo, `c` coalizione, `pop` popolazione in milioni, `pil`
  PIL totale, `pc` PIL pro capite, `v` variazione % sul quinquennio precedente, `d`
  debito/PIL. `stima: true` marca una riga il cui valore non è misurato ma
  concatenato da serie diverse (oggi solo il 2025).
- In `AREE_GIUDIZIO`: `p0`/`p1` delimitano la finestra dell'area, `asset` è un malus
  0–3, `fuori: true` esclude l'area dalla classifica lasciandola in tabella.

`validate_data.py` verifica queste convenzioni, non la correttezza dei valori: quella
resta un lavoro umano.

## Modificare il codice

Il sito è deliberatamente **senza dipendenze, senza build e senza framework**: HTML,
CSS e JavaScript scritti a mano, grafici in SVG generato a runtime. Le proposte che
introducono un bundler, una libreria di grafici o un framework non saranno accettate,
per quanto siano scritte bene: la longevità di un progetto d'archivio dipende dal
fatto che tra dieci anni basti un browser per aprirlo.

Linee guida pratiche:

- lo stile del codice esistente è la specifica: stessa densità di commenti, stessi
  nomi in italiano, stesse abbreviazioni;
- i colori passano dalle variabili CSS in cima a `style.css`, mai scritti a mano nelle
  regole — servono a far funzionare i temi chiaro, scuro e auto;
- **accessibilità**: ogni controllo interattivo deve restare raggiungibile da
  tastiera e dichiarare il proprio stato (`aria-expanded`, `aria-sort`, `aria-label`);
- verifica sempre entrambi i temi e la larghezza mobile (sotto i 640px la topbar va
  su due righe).

## Modificare la ricerca

Le correzioni non si applicano in silenzio: si **documentano nel §10** della ricerca,
con il valore vecchio, quello nuovo e la fonte che ha risolto la discrepanza. È il
motivo per cui il §10 esiste, e il motivo per cui il lavoro è verificabile.

Aggiornamenti sostanziali dei dati fanno salire la versione in `data.json` → `meta` e
richiedono una riga nel [CHANGELOG](CHANGELOG.md).

## Pull request

Un tema per pull request. Nella descrizione: che cosa cambia, perché, e — se tocca i
dati — le fonti. La CI verifica la validità di `data.json` e l'allineamento di
`data.js`; se fallisce, il messaggio dice quale comando eseguire.

## Tono

Il progetto tratta materia politicamente carica e prova a farlo con un metodo che
sopravviva al disaccordo: dichiarare le fonti, dichiarare i pesi, dichiarare i limiti.
Nelle discussioni si contesta un numero o un criterio, non una parte politica. Vale il
[Codice di condotta](CODE_OF_CONDUCT.md).
