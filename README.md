<p align="center">
  <img src="logo.png" alt="Ai lati d'Italia" width="420">
</p>

<h1 align="center">Efficacia dei governi italiani, 1900–2025</h1>

<p align="center">
  Centoventicinque anni di politica italiana misurati su dati ufficiali,<br>
  a finestre di cinque anni, con ogni numero tracciato alla sua fonte.
</p>

<p align="center">
  <a href="https://saulusprime.github.io/AilatiditaliA/"><b>→ Consulta il sito</b></a> ·
  <a href="efficacia_governi_italiani_1900_2025.md">Ricerca completa</a> ·
  <a href="data.json">Dati (JSON)</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/dati-v2.1%20(16--08--2026)-1f6feb" alt="Versione dei dati: 2.1">
  <img src="https://img.shields.io/badge/codice-MIT-green" alt="Licenza del codice: MIT">
  <img src="https://img.shields.io/badge/ricerca%20e%20dati-CC%20BY%204.0-lightgrey" alt="Licenza di ricerca e dati: CC BY 4.0">
  <img src="https://img.shields.io/badge/dipendenze-nessuna-blueviolet" alt="Nessuna dipendenza">
</p>

---

## Che cos'è

Un sito statico di consultazione — nessun framework, nessuna dipendenza, tre file
di codice — costruito sopra una ricerca che confronta i governi italiani dal 1900 al
2025 su sei famiglie di indicatori: **economia, debito pubblico, istruzione,
criminalità, spesa pubblica, famiglie** e **cessioni di asset statali**.

La domanda a cui prova a rispondere non è "chi ha governato meglio" in astratto, ma
una più modesta e verificabile: *che cosa è successo, misurabilmente, mentre ciascuna
stagione politica era al potere?* La distinzione conta, ed è ribadita ovunque nel
progetto: la tabella mostra cosa è accaduto **durante** un governo, non cosa è
accaduto **a causa** di esso.

Il sito permette di stringere l'intervallo di analisi (dal menù **Periodo**) e vede
grafici, indicatori sintetici e classifica ricalcolarsi sul solo intervallo scelto.

## Il metodo in cinque scelte

1. **Finestre di 5 anni, non di 10.** Ventisei punti di osservazione (1900, 1905, …
   2025). La griglia decennale nascondeva eventi decisivi: il crollo della Prima
   guerra mondiale, il boom 1920–1925, il collasso bellico del 1945, la doppia
   recessione 2010–2015.
2. **Ogni valore tracciato a una fonte aperta e ufficiale.** OWID/Maddison, Eurostat,
   ISTAT, SIPRI, Banca d'Italia, MEF, Corte dei Conti, OCSE. Dove il dato non è
   verificabile su queste fonti si legge **N/D** — mai una stima travestita da
   misura. L'elenco completo è nel [§12 della ricerca](efficacia_governi_italiani_1900_2025.md#12-fonti).
3. **Unità dichiarate e omogenee.** Il PIL è in dollari internazionali a prezzi 2011
   (PPP) dal Maddison Project Database 2023 — l'unica serie aperta e continua che
   copre il 1900–2022.
4. **Il debito pubblico come variabile centrale**, perché è ciò che ogni stagione
   politica lascia in eredità vincolante alla successiva.
5. **Le cessioni di asset statali come criterio autonomo**, per valutare il rischio
   *svendita*: la tentazione ricorrente di cedere patrimonio pubblico per migliorare
   i conti di un singolo esercizio.

Le rotture di serie sono dichiarate, non nascoste: i delitti denunciati cambiano
rilevazione nel 1983 e nel 2004, il reddito familiare Banca d'Italia nel 2020, la
spesa familiare ISTAT nel 2014, e la serie del debito pre-1990 (ricostruzione Banca
d'Italia) non è omogenea con quella Eurostat dal 1995 — nei punti di sovrapposizione
differiscono di 3–6 punti di PIL.

## Che cosa dicono i dati

Cinque risultati che la griglia quinquennale rende visibili.

**Il miracolo economico non fu un decennio, fu un quarto di secolo.** Dal 1945 al
1970, cinque quinquenni consecutivi con crescita pro capite tra +26% e +97%. Nessun
altro periodo della storia italiana si avvicina. Nello stesso arco il debito tocca il
minimo storico (24–34% del PIL) e la spesa per la difesa scende dal 3,8% al 2,1%.

**Il ventennio più stabile produsse i peggiori quinquenni di pace del secolo.** Il
boom vero è il 1920–1925 (+20,9%), che comincia con i governi liberali e la ripresa
post-bellica. Il fascismo maturo — quota 90, autarchia — dà +1,1% e +0,8%. Il +9,2%
del 1935–1940 è spesa bellica, e il conto arriva subito dopo: **−44,5% pro capite tra
1940 e 1945**, il PIL torna ai livelli del 1905.

**Dal 2008 c'è il più lungo arresto della crescita in tempo di pace dall'Unità.** Tre
quinquenni negativi di fila: −0,3%, −3,3%, −3,7%. Nel 2020 il PIL pro capite era
sotto il livello del 2000. Nessuna coalizione — centrodestra, centrosinistra, tecnici,
populisti — ha invertito la tendenza. Il paradosso: è anche il periodo con la
popolazione più istruita di sempre (67% dei 25–64enni con almeno un diploma nel 2025).

**Il "crollo della criminalità" recente non esiste.** Il picco della serie omogenea
pre-2004 è il 1990–91 (2,5 milioni di delitti), non il 2010; il minimo del 2020
(1,9 milioni) è un effetto lockdown — già nel 2021 si risale, e nel 2024 si è a
2,4 milioni. La vera esplosione è quella del 1970–1990, da 548mila a 2,5 milioni.

**Nessuna riduzione duratura del debito è mai venuta dalle privatizzazioni.** Le sole
tre discese durature vengono dall'inflazione (1943–47, una patrimoniale occulta sui
risparmiatori), dalla crescita (1950–1965) e dall'avanzo primario (1994–2007). La
Corte dei Conti censisce 207 operazioni per ~156 miliardi di euro tra 1985 e 2008, a
fronte di un abbattimento del debito di circa il 10% — mentre il debito, nel periodo,
cresceva di un quarto.

### La svendita: cinque criteri, non un'opinione

Vendere asset pubblici non è di per sé una svendita. La ricerca propone cinque
condizioni verificabili — congruità del prezzo, destinazione dei proventi, dividendi
persi contro interessi risparmiati, qualità della regolazione post-vendita, rischio di
socializzazione delle perdite — e le applica caso per caso, da SEAT Pagine Gialle
(rivalorizzata ~10 volte in tre anni) ad Alfa Romeo, da Autostrade a ITA Airways.

La conclusione è trasversale agli schieramenti: il rischio si è materializzato non
nelle grandi OPV di mercato (ENI, ENEL, le operazioni meglio riuscite), ma nelle
**trattative dirette con pochi compratori**, nelle **regole riscritte a favore
dell'acquirente**, nelle **operazioni fatte per far quadrare i conti in fretta** e
nelle **uscite di emergenza da salvataggi**. Quando l'obiettivo primario è il numero
di bilancio dell'anno, prezzo e regolazione passano in secondo piano.

## Come funziona il sito

Nessuna build, nessun bundler, nessuna libreria: HTML, CSS e JavaScript scritti a mano,
grafici in SVG generato dallo script.

| File | Ruolo |
|:--|:--|
| [`index.html`](index.html) | Struttura della pagina: topbar, sezioni in accordion, tabelle, contenitori dei grafici |
| [`style.css`](style.css) | Temi chiaro/scuro/auto via variabili CSS, layout, componenti |
| [`script.js`](script.js) | Rendering dei grafici SVG, gauge, giudizio ponderato, filtro d'intervallo, ordinamento delle tabelle |
| [`data.json`](data.json) | **Fonte unica dei dati.** Estratto dalla ricerca, con `meta` che dichiara versione e unità |
| [`data.js`](data.js) | Copia generata di `data.json`, usata solo all'apertura da `file://` |
| [`efficacia_governi_italiani_1900_2025.md`](efficacia_governi_italiani_1900_2025.md) | La ricerca integrale: tabelle, analisi per fase storica, correzioni, limiti, fonti |

### Perché esistono due file di dati

La pagina carica `data.json` con `fetch()`. I browser bloccano `fetch()` sulle pagine
aperte da `file://`, quindi `data.js` — che assegna gli stessi dati a
`window.__DATA__` — fa da riserva per chi scarica il repository e apre `index.html`
con un doppio clic. **`data.js` non va mai modificato a mano:** si rigenera.

```bash
python3 tools/build_data_js.py          # rigenera data.js da data.json
python3 tools/build_data_js.py --check  # verifica soltanto l'allineamento
python3 tools/validate_data.py          # controlli strutturali su data.json
```

La CI ([`.github/workflows/verifica-dati.yml`](.github/workflows/verifica-dati.yml))
esegue entrambi a ogni push: una pull request che tocca `data.json` senza rigenerare
`data.js` viene fermata.

### Esecuzione in locale

```bash
git clone https://github.com/saulusprime/AilatiditaliA.git
cd AilatiditaliA
python3 -m http.server 8000    # poi apri http://localhost:8000
```

Il doppio clic su `index.html` funziona lo stesso, grazie a `data.js`, ma il server
locale riproduce esattamente il comportamento del sito pubblicato.

## Il giudizio ponderato

La sezione *Sintesi* del sito produce due cose distinte, e la distinzione è
deliberata.

**Il giudizio universale** indica, per ogni categoria, l'area politica migliore in
assoluto: nessuna aggregazione, nessuna scelta discrezionale, solo il massimo della
metrica.

**Il punteggio ponderato** aggrega invece le cinque categorie con pesi espliciti. Per
ogni categoria le aree sono ordinate e ricevono un punteggio da 0 a 10 in base al
rango (i pari merito prendono la media delle posizioni); il punteggio finale è la
media pesata delle sole categorie disponibili — chi ha dati mancanti non viene
penalizzato, la sua media si calcola sul resto.

| Categoria | Peso | Metrica | Direzione |
|:--|--:|:--|:--|
| Crescita | 30 | PIL pro capite, variazione media per quinquennio | più alto è meglio |
| Debito | 25 | variazione del rapporto debito/PIL, in punti | più basso è meglio |
| Istruzione | 15 | progresso educativo, punti percentuali per quinquennio | più alto è meglio |
| Criminalità | 15 | variazione dei delitti denunciati nella finestra | più basso è meglio |
| Cessioni di asset | 15 | malus 0–3 sulla scala delle cessioni | più basso è meglio |

I pesi sono una scelta editoriale, dichiarata perché sia contestabile: vivono in
`CAT_GIUDIZIO` all'inizio di [`script.js`](script.js), e cambiarli è una riga di
codice. L'*Unità nazionale (2021–2022)* è marcata `fuori: true` — la sua finestra è
troppo breve perché il confronto sia sensato, e resta fuori classifica pur comparendo
in tabella.

## Limiti dichiarati

Il progetto è più utile se si sa che cosa **non** può fare.

- **Correlazione non è causazione.** Su finestre di cinque anni pesano cicli
  internazionali, shock petroliferi, pandemie e le politiche dei governi precedenti.
- **L'attribuzione al governo è debole per costruzione.** Per ogni anno si indica il
  governo in carica al 30 giugno; molti governi della Prima Repubblica duravano meno
  di un anno, e gli effetti delle politiche arrivano con ritardi lunghi.
- **Gli incassi delle cessioni sono nominali** e non sommabili tra epoche diverse:
  nessuna deflazione è stata applicata.
- **Il giudizio di congruità di un prezzo è sempre più facile ex post.**
- **Restano lacune per inaccessibilità tecnica delle fonti**, non per loro
  inesistenza: la spesa statale per funzione 1900–1950, i supplementi storici
  dell'Indagine Banca d'Italia 1965–2000, i delitti prima del 1955. Il
  [§11 della ricerca](efficacia_governi_italiani_1900_2025.md#11-limiti-dellanalisi-e-dati-mancanti)
  dice da dove ripartire per colmarle.
- **I confini cambiano.** Fino al 1918 sono quelli del Regno pre-Grande Guerra; dal
  1919–20 al 1947 includono Venezia Giulia, Trentino-Alto Adige e Zara; dal 1947 sono
  quelli attuali.

## Contribuire

Le segnalazioni più preziose sono quelle su un **dato sbagliato con la fonte primaria
alla mano**: è così che è nata la v2.1, che ha corretto la spesa pubblica 2024, la
spesa delle famiglie 2008–2010 e diversi altri valori. La procedura, e la regola che
governa tutto il progetto — *nessun numero senza fonte aperta e verificabile* — sono
in [CONTRIBUTING.md](CONTRIBUTING.md).

Le [correzioni già applicate](efficacia_governi_italiani_1900_2025.md#10-correzioni-rispetto-alle-versioni-precedenti)
sono documentate per intero nel §10 della ricerca, comprese quelle che smentiscono
versioni precedenti di questo stesso lavoro.

## Licenze

Il progetto ha due nature e due licenze.

- **Codice** (`index.html`, `style.css`, `script.js`, `tools/`): [MIT](LICENSE).
- **Ricerca, dati e logo** (`efficacia_governi_italiani_1900_2025.md`, `data.json`,
  `data.js`, `logo.png`): [Creative Commons Attribution 4.0](LICENSE-CONTENUTI.md) —
  riuso libero, anche commerciale, con attribuzione.

I dati sottostanti provengono da fonti pubbliche con licenze proprie (Eurostat, ISTAT,
OWID, SIPRI e altre): per il riuso massivo di una singola serie fai riferimento alla
fonte originale, elencata nel §12.

## Citare questo lavoro

Il repository include un [CITATION.cff](CITATION.cff): su GitHub, il pulsante *Cite
this repository* genera la citazione già formattata. In forma testuale:

> *Efficacia dei governi italiani, 1900–2025. Analisi a finestre quinquennali su fonti
> ufficiali e aperte*, v2.1, 2026. https://github.com/saulusprime/AilatiditaliA
