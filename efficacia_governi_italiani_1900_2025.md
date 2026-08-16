# Efficacia dei governi italiani, 1900–2025
## Analisi a finestre quinquennali su fonti ufficiali e aperte

**Versione:** 2.1 — verifica puntuale di tutti i dati sulle fonti primarie, correzione degli errori emersi, aggiunta del debito pubblico e delle cessioni di asset statali come criteri di valutazione.
**Data di elaborazione:** 16 agosto 2026 (v2.0: 15 agosto 2026).

---

## 1. Nota metodologica

Questa versione consolida i tre punti fondativi introdotti dalla v2.0 (1–3) e aggiunge due nuovi criteri di valutazione (4–5):

1. **Finestre di 5 anni invece di 10** (26 punti di osservazione: 1900, 1905, … 2025), che rendono visibili eventi che la griglia decennale nascondeva: il crollo della Prima guerra mondiale (1915), il boom 1920–1925, il collasso bellico del 1945 (−44,5% di PIL pro capite in 5 anni), la doppia recessione 2010–2015.
2. **Ogni valore è tracciato a una fonte aperta e ufficiale precisa** (elenco completo in §12). Dove il dato non è verificabile su tali fonti, è riportato **N/D** — non una stima. Nella v2.1 tutti i valori sono stati riverificati uno per uno sulle fonti primarie (CSV/API di OWID, Eurostat, ISTAT, SIPRI; PDF di Banca d'Italia, MEF, Corte dei Conti): le correzioni sono elencate in §10.
3. **Unità di misura dichiarate e omogenee.** Il PIL è espresso in **dollari internazionali a prezzi 2011 (PPP)** dal **Maddison Project Database 2023** (Bolt & van Zanden, Università di Groningen, via Our World in Data): è l'unica serie aperta, ufficiale e continua che copre il 1900–2022. La serie termina nel 2022; per il 2023–2025 valgono le variazioni in volume ISTAT (+0,9%, +0,8%, +0,5%; comunicato del 2/3/2026).
4. **Debito pubblico in % del PIL** aggiunto alla Tabella 1: è la variabile che più direttamente misura il vincolo lasciato da ogni stagione politica alle successive, ed è la motivazione dichiarata di quasi tutte le dismissioni di asset.
5. **Cessioni di asset statali** (privatizzazioni, concessioni, cartolarizzazioni) e operazioni inverse (nazionalizzazioni, salvataggi) censite nella nuova Tabella 5, con incassi, destinazione dei proventi e controversie documentate: servono a valutare il rischio **"svendita"** — la tentazione ricorrente di cedere patrimonio pubblico per migliorare i numeri di bilancio di breve periodo (§7).

**Avvertenze strutturali:**

- **Confini:** fino al 1918 confini del Regno pre-Grande Guerra; dal 1919–20 al 1947 includono Venezia Giulia, Trentino-Alto Adige, Zara (e Fiume dal 1924), in gran parte ceduti col Trattato di Parigi del 1947; dal 1947 confini attuali.
- **Attribuzione al governo:** per ogni anno è indicato il governo in carica al 30 giugno. Con finestre di 5 anni l'attribuzione causale resta comunque debole: molti governi della Prima Repubblica duravano meno di un anno, e gli effetti delle politiche si manifestano con ritardi lunghi. Tutte le 26 attribuzioni sono state verificate su it.wikipedia e sul Portale storico della Camera (storia.camera.it).
- **Rotture di serie:** i delitti denunciati hanno rotture nel 1983 (nuovo modello di rilevazione) e nel 2004 (passaggio al sistema SDI del Ministero dell'Interno); il reddito familiare Banca d'Italia ha una rottura nel 2020 (nuovo disegno campionario); la spesa familiare ISTAT ha una rottura nel 2014 (nuova indagine); il welfare in % PIL è riportato in più definizioni non confrontabili tra loro (COFOG "protezione sociale", spesa sociale OCSE/SOCX, ESSPROS).
- **Debito pubblico:** la serie 1900–1990 è la ricostruzione storica Banca d'Italia (Francese-Pace, QEF 31/2008, ripresa dall'IMF Historical Public Debt Database); dal 1995 è la serie Eurostat SEC2010. Le due serie **non sono omogenee**: nei punti di sovrapposizione differiscono di 3–6 punti di PIL.
- **Popolazione:** in Tabella 1 è quella implicita del dataset Maddison (coerente con il PIL); i valori coincidono con i censimenti ISTAT entro ±0,5 mln. Il 2025 è il dato ISTAT (58.934.177 al 1/1/2025, provvisorio; la revisione di marzo 2026 lo colloca a ~58,94 mln).

---

## 2. Tabella 1 — Politica, economia e debito (1900–2025)

| Anno | Governo al 30/6 (Presidente del Consiglio) | Partito / Coalizione | Pop. (mln) | PIL totale (mld $ int. 2011) | PIL pro capite ($ int. 2011) | Var. % PIL pro capite vs 5 anni prima | Debito PA / PIL %² |
|:---:|:---|:---|:---:|:---:|:---:|:---:|:---:|
| 1900 | Saracco | Liberali (Sinistra storica) | 33,7 | 110 | 3.264 | — | 109,8 |
| 1905 | Fortis I | Liberali (Sinistra storica) | 35,0 | 124 | 3.532 | +8,2% | 100,9 |
| 1910 | Luzzatti | Liberali + Radicali | 36,6 | 140 | 3.829 | +8,4% | 87,1 |
| 1915 | Salandra II | Liberali (governo di guerra) | 38,0 | 138 | 3.642 | **−4,9%** | 84,3 |
| 1920 | Giolitti V | Liberali, PPI, democratici sociali, radicali | 37,4 | 142 | 3.789 | +4,0% | **159,7** |
| 1925 | Mussolini | PNF | 39,2 | 179 | 4.580 | **+20,9%** | 103,8 |
| 1930 | Mussolini | PNF | 40,8 | 189 | 4.631 | +1,1% | 106,6 |
| 1935 | Mussolini | PNF | 42,4 | 198 | 4.670 | +0,8% | 80,7 |
| 1940 | Mussolini | PNF (economia di guerra) | 44,3 | 226 | 5.099 | +9,2% | 72,6 |
| 1945 | Parri | PdA; esarchia CLN (DC, PCI, PSIUP, PLI, PdA, PDL) | 45,4 | 129 | 2.831 | **−44,5%** | 72,4 |
| 1950 | De Gasperi VI | DC, PSLI, PRI (centrismo) | 47,1 | 263 | 5.582 | **+97,2%** | 29,5 |
| 1955 | Scelba | DC, PSDI, PLI | 48,6 | 362 | 7.453 | +33,5% | 33,9 |
| 1960 | Tambroni | Monocolore DC (appoggio esterno MSI) | 50,2 | 473 | 9.430 | +26,5% | 31,4 |
| 1965 | Moro II | Centrosinistra organico (DC, PSI, PSDI, PRI) | 52,0 | 630 | 12.111 | +28,4% | 28,4 |
| 1970 | Rumor III | Centrosinistra (DC, PSI, PSU³, PRI) | 53,7 | 831 | 15.492 | +27,9% | 37,1 |
| 1975 | Moro IV | DC, PRI (appoggio esterno PSI e PSDI) | 55,6 | 952 | 17.123 | +10,5% | 56,6 |
| 1980 | Cossiga II | DC, PSI, PRI | 56,5 | 1.183 | 20.959 | +22,4% | 56,1 |
| 1985 | Craxi I | Pentapartito (PSI, DC, PSDI, PRI, PLI) | 56,7 | 1.275 | 22.469 | +7,2% | 80,9 |
| 1990 | Andreotti VI | Pentapartito (DC, PSI, PSDI, PRI, PLI) | 56,7 | 1.475 | 26.003 | +15,7% | 95,2 |
| 1995 | Dini | Tecnico | 56,9 | 1.630 | 28.666 | +10,2% | 119,1 |
| 2000 | Amato II | Centrosinistra (DS, PPI, Dem., UDEUR, SDI, FdV, RI, PdCI) | 57,0 | 1.864 | 32.717 | +14,1% | 108,7 |
| 2005 | Berlusconi III | Casa delle Libertà (FI, AN, UdC, Lega, NPSI, PRI) | 58,2 | 2.029 | 34.872 | +6,6% | 106,2 |
| 2010 | Berlusconi IV | Centrodestra (PdL, Lega Nord, MpA) | 59,8 | 2.081 | 34.766 | **−0,3%** | 118,8 |
| 2015 | Renzi | PD, NCD, UdC, SC, PSI, CD, DemoS | 60,3 | 2.026 | 33.621 | **−3,3%** | 134,8 |
| 2020 | Conte II | M5S, PD, LeU, IV | 59,5 | 1.926 | 32.385 | **−3,7%** | **154,4** |
| 2025 | Meloni | Centrodestra (FdI, Lega, FI, NM) | 58,9 | N/D¹ | N/D¹ | ≈ +14–15% vs 2020¹ | 137,1 |

¹ Il Maddison Project Database 2023 termina nel 2022 (PIL pro capite 36.224 $, +11,9% vs 2020, rimbalzo post-COVID; ancora −0,2% rispetto al picco storico del 2007, 36.311 $). Per il 2023–2025 ISTAT registra variazioni del PIL in volume di +0,9% (2023), +0,8% (2024) e +0,5% (2025): la variazione 2020→2025 indicata (≈+14–15% pro capite) è la concatenazione del dato Maddison 2020–2022 con i tassi ISTAT, tenuto conto del lieve calo demografico. Nota su tutti gli anni: se nell'anno si sono succeduti più governi, è indicato quello in carica al 30 giugno (es. nel 1960 Tambroni, tra Segni II e Fanfani III; nel 1995 Dini dopo Berlusconi I; nel 1900 Saracco, nominato il 24/6 e giurato il 25/6, dopo Pelloux II).
² Debito delle amministrazioni pubbliche in % del PIL: 1900–1990 ricostruzione storica Banca d'Italia (Francese-Pace, QEF 31/2008) via IMF Historical Public Debt Database; dal 1995 Eurostat (gov_10dd_edpt1, SEC2010, vintage aprile 2026). Serie non omogenee tra loro (scarti di 3–6 punti nei periodi di sovrapposizione). Picchi fuori griglia: 1897 ≈ 128%; 1920 = 159,7% (massimo assoluto); 1943 ≈ 102,5%, azzerato dall'inflazione (24,2% nel 1947); 1994 = 121,8% nella serie dell'epoca (117,9% nella ricostruzione IMF); 2020 = 154,4% dopo le revisioni ISTAT del PIL. Il 2025 (137,1%, ISTAT marzo 2026) risale dal 134,7% del 2024 per l'effetto di cassa dei crediti Superbonus.
³ Nel 1970 il partito socialdemocratico si chiamava PSU (Partito Socialista Unitario); assunse la denominazione PSDI nel 1971.

---

## 3. Tabella 2 — Istruzione e criminalità (1900–2025)

Due serie sull'istruzione, **non confrontabili tra loro**: i censimenti misurano la popolazione dai 6 anni in su (dal 2018, censimento permanente, dai 9 anni in su); Eurostat la fascia 25–64 anni (è quest'ultima l'indicatore standard internazionale). L'anno effettivo del dato, se diverso dall'anno di griglia, è tra parentesi.

| Anno | Analfabetismo % (censimenti) | % pop. 6+ con diploma o laurea (censimenti) | % pop. 25–64 con almeno diploma (Eurostat) | Delitti denunciati (migliaia) |
|:---:|:---:|:---:|:---:|:---:|
| 1900 | 48,5 (1901) | N/D | N/D | N/D⁴ |
| 1905 | N/D | N/D | N/D | N/D⁴ |
| 1910 | 37,6 (1911) | N/D | N/D | N/D⁴ |
| 1915 | N/D | N/D | N/D | N/D⁴ |
| 1920 | 27,0 (1921) | N/D | N/D | N/D⁴ |
| 1925 | N/D | N/D | N/D | N/D⁴ |
| 1930 | 20,9 (1931) | N/D | N/D | N/D⁴ |
| 1935 | N/D | N/D | N/D | N/D⁴ |
| 1940 | N/D | N/D | N/D | N/D⁴ |
| 1945 | N/D | N/D | N/D | N/D⁴ |
| 1950 | 12,9 (1951) | 4,3 (1951) | N/D | N/D⁴ |
| 1955 | N/D | N/D | N/D | 344,9 (1956)⁴ |
| 1960 | 8,3 (1961) | 5,6 (1961) | N/D | 332,7⁴ |
| 1965 | N/D | N/D | N/D | 452,8 |
| 1970 | 5,2 (1971) | 8,7 (1971) | N/D | 547,8 |
| 1975 | N/D | N/D | N/D | 770,6 |
| 1980 | 3,1 (1981) | 14,3 (1981) | N/D | 1.139,2 |
| 1985 | N/D | N/D | N/D | 1.364,0 |
| 1990 | 2,1 (1991) | 22,4 (1991) | 32,6 (1992) | 2.501,6 |
| 1995 | N/D | N/D | 36,3 | 2.267,5 |
| 2000 | 1,5 (2001) | 33,4 (2001) | 45,2 | 2.205,8 |
| 2005 | N/D | N/D | 50,1 | 2.579,1⁵ |
| 2010 | 1,1 (2011) | 41,4 (2011) | 55,1 | 2.621,0 |
| 2015 | N/D | N/D | 59,9 | 2.687,2 |
| 2020 | 0,5 (2021) | 50,9 (2020)⁶ | 62,6 | **1.900,6**⁷ |
| 2025 | 0,5 (2024) | N/D | 67,0 (2025) | 2.399,3 (2024)⁸ |

⁴ ISTAT: "in Italia le statistiche sulla delittuosità sono disponibili solo dal 1955" (Tavola 6.18 delle Serie storiche, 1955–2014; 1955 = 321,8). La copia Eurostat (crim_hist), usata qui per il 1956–2000, parte dal 1956; per il triennio 1959–1961 le due fonti divergono di ~48.000 unità (es. 1960: 332,7 Eurostat vs 381,0 ISTAT). Ulteriore rottura interna nel 1983 (nuovo modello di rilevazione). ⁵ Rottura di serie 2004: passaggio al sistema SDI del Ministero dell'Interno (dal 2004 inclusi anche Corpo forestale e Polizia penitenziaria); i valori ante/post 2004 non sono pienamente comparabili. Dal 2006 i dati provengono dal datawarehouse ufficiale ISTAT (DCCV_DELITTIPS). ⁶ Dato 2020 del censimento permanente: 36,0% diplomati + 14,9% con titolo terziario = 50,9% della popolazione di 9 anni e più — non pienamente comparabile con la serie 1951–2011 (popolazione 6+). ⁷ Valore ufficiale ISTAT 2020: 1.900.624 delitti (−17,4% sul 2019, che era a 2.301,9): effetto lockdown, non tendenza strutturale — nel 2021 i delitti erano già 2.104,1. ⁸ Serie recente ISTAT: 2022 = 2.255,8; 2023 = 2.341,6 (+3,8%); 2024 = 2.399,3 (+2,5%).

---

## 4. Tabella 3 — Spesa pubblica in % del PIL (1900–2025)

Welfare in definizioni **non sommabili né confrontabili**: COFOG GF10 "protezione sociale" delle amministrazioni pubbliche (Eurostat, dal 1995) e spesa sociale pubblica OCSE/SOCX-Lindert (serie lunga); la serie SOCX qui utilizzata si ferma al 2010, per cui dal 2015 la seconda definizione è la spesa per protezione sociale ESSPROS (Eurostat), a sua volta non confrontabile con SOCX. La sanità pre-1978 è il sistema mutualistico, non il SSN. La difesa è la serie SIPRI per tutto il periodo 1949–2025: include Carabinieri e pensioni militari, ed è quindi sistematicamente più alta (0,2–0,6 punti) della funzione COFOG GF02.

| Anno | Difesa (SIPRI) | Sanità pubblica | Istruzione | Protezione sociale / welfare | Spesa pubblica totale |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1900 | N/D | N/D | 0,8 (1903)⁹ | ~0 (trasferimenti sociali, Lindert) | N/D |
| 1905 | N/D | N/D | N/D | ~0 | N/D |
| 1910 | N/D | N/D | N/D | ~0 | N/D |
| 1915 | N/D | N/D | 1,4 (1915)⁹ | N/D | consumi pubblici 31,9¹⁰ |
| 1920 | N/D | N/D | N/D | ~0 (Lindert) | N/D |
| 1925 | N/D | N/D | N/D | N/D | N/D |
| 1930 | N/D | N/D | N/D | 0,1 (solo trasferimenti) | N/D |
| 1935 | N/D¹¹ | N/D | N/D | N/D | N/D |
| 1940 | 12 (% reddito naz., 1940)¹² | N/D | N/D | N/D | N/D |
| 1945 | N/D | N/D | N/D | N/D | N/D |
| 1950 | 3,8 (1951) | N/D | N/D | N/D | N/D |
| 1955 | 3,3 | N/D | N/D | N/D | N/D |
| 1960 | 2,7 | 2,7 | N/D | 10,7 (SOCX) | N/D |
| 1965 | 2,7 | 3,5 | N/D | 13,2 (SOCX) | N/D |
| 1970 | 2,1 | 4,1 | 3,4 | 13,8 (SOCX) | N/D |
| 1975 | 2,0 | 4,8 | 3,7 | 17,1 (SOCX) | N/D |
| 1980 | 1,8 | 5,1 | 4,4 | 17,3 (SOCX) | N/D |
| 1985 | 1,9 | 4,9 | 4,7 (1985) | 20,0 (SOCX) | N/D |
| 1990 | 1,9 | 5,7 | 4,6 (1988) | 20,6 (SOCX) | N/D |
| 1995 | 1,5 | 5,1 | 4,4 | 17,5 COFOG / 21,0 SOCX | 51,4 |
| 2000 | 1,7 | 5,8 | 4,4 | 16,7 COFOG / 22,6 SOCX | 46,4 |
| 2005 | 1,6 | 6,8 | 4,5 | 17,1 COFOG / 24,0 SOCX | 47,1 |
| 2010 | 1,5 | 7,4 | 4,4 | 19,7 COFOG / 26,8 SOCX | 49,8 |
| 2015 | 1,2 | 7,0 | **4,0** | 21,2 COFOG / 29,5 ESSPROS | 50,2 |
| 2020 | 1,7 | 7,8 | 4,3 | 25,0 COFOG / 34,2 ESSPROS | 56,8 (picco pandemico) |
| 2025 | 1,9 (2025, SIPRI) | 6,6 (2024) | 4,0 (2024) | 21,3 COFOG (2024) | **50,4** (2024)¹³ |

⁹ Spesa del solo Stato centrale, non dell'intera PA. ¹⁰ Durante la Grande Guerra i consumi pubblici arrivarono al 31,9% del PIL nel 1915 e al 44,1% nel 1917 (Galassi & Harrison). ¹¹ Per il 1935–36 è documentato che le spese di guerra assorbivano il 31,7% della spesa finale complessiva dello Stato (Legnani), ma non il rapporto sul PIL. ¹² Serie Harrison in % del reddito nazionale, non del PIL: 8 (1939), 12 (1940), 23 (1941), 22 (1942), 21 (1943). ¹³ Il 53,6% riportato in v2.0 come dato 2024 era in realtà il dato **2023**, gonfiato dalla contabilizzazione dei crediti d'imposta Superbonus come spesa; nel 2024 la spesa totale è scesa al 50,4% (51,2% il dato provvisorio 2025). Le lacune 1900–1934 (difesa) e 1920–1965 (istruzione) sono colmabili solo con la pubblicazione RGS "La spesa dello Stato dall'Unità d'Italia", non scaricabile (errore 403).

---

## 5. Tabella 4 — Reddito, capacità di spesa e accesso al credito delle famiglie

Questi indicatori **non esistono nelle fonti ufficiali prima degli anni '60–'80**: l'Indagine sui bilanci delle famiglie della Banca d'Italia parte dal 1962–65, l'indagine ISTAT sui consumi dal 1968–73, la rilevazione dell'indebitamento dal 1989 circa. I supplementi storici esistono solo in formati tecnicamente inaccessibili ai fini di questa ricerca (PDF scansionati in lire, tavole xlsx): i valori pre-2005 sono quindi N/D, non inesistenti. Valori nominali correnti; il reddito Banca d'Italia è netto (al netto di imposte e contributi sociali).

| Anno | Reddito familiare medio annuo (Banca d'Italia SHIW) | Spesa media mensile famiglie (ISTAT)¹⁴ | % famiglie indebitate (SHIW) | Debito famiglie / reddito disponibile (Eurostat) |
|:---:|:---:|:---:|:---:|:---:|
| 1900–1960 | non rilevato (indagini inesistenti) | non rilevato | non rilevato | non rilevato |
| 1965–2000 | N/D (serie esistente dal 1965/1977, non consultabile) | N/D (serie dal 1968/1973, non consultabile) | N/D (rilevato dal ~1989) | N/D |
| 2005 | 32.146 € (2008; ≈2.679 €/mese) | 2.485 € (2008) | N/D | N/D |
| 2010 | 32.714 € | 2.453 € | 27,7% (2010; 27,8% nel 2008) | N/D |
| 2015 | ≈30.500 € (2014) | 2.499 € | 21% (2016) | 61,0% |
| 2020 | 39.343 €¹⁵ (≈32.383 € comparabile) | 2.328 € (−9,0% su 2019) | 24,7% comparabile (28,1% nuovo disegno) | 63,7% |
| 2025 | 37.511 € media, 30.039 € mediana (EU-SILC ISTAT, redditi 2023)¹⁶ | 2.755 € (2024) | 26% (2022) | 55,4% (2024) |

¹⁴ Rottura di serie 2014: i valori 2008 e 2010 provengono dalla vecchia "Indagine sui consumi delle famiglie" (fino al 2013), **non comparabile** con la nuova "Indagine sulle spese delle famiglie" (dal 2014: 2015, 2020, 2024). ¹⁵ Rottura di serie 2020 (nuovo disegno campionario): il valore comparabile con la serie storica è ≈32.383 €. ¹⁶ Fonte diversa (indagine EU-SILC, report ISTAT "Condizioni di vita e reddito delle famiglie – Anni 2023-2024", marzo 2025; per il 2024 lo stesso report stima una media di 39.501 €): non confrontabile direttamente con le righe precedenti. La SHIW 2022 registra +1,4% reale sul 2020, ma un reddito medio ancora circa il 10% sotto il livello 2006 in termini reali: è il dato chiave dell'intera sezione.

---

## 6. Tabella 5 — Cessioni di asset statali e nazionalizzazioni (1900–2026)

Nuova sezione della v2.1. Gli **incassi sono nominali** (miliardi di lire fino al 2001, euro dopo) e **non confrontabili tra epoche diverse** senza deflazione; servono a valutare ogni operazione nel suo contesto, non a sommare periodi. Per le operazioni dei gruppi pubblici (IRI, ENI, ENEL, RAI) i proventi restavano all'ente, non al bilancio dello Stato: la distinzione è indicata caso per caso.

### 6.1 Cessioni (privatizzazioni, concessioni, cartolarizzazioni)

| Anni | Governo | Operazione | Incasso nominale | Nota / rischio svendita |
|:---:|:---|:---|:---|:---|
| 1923 | Mussolini (min. De Stefani) | Fine del monopolio statale dei fiammiferi: vendita al consorzio privato dei produttori (CIF), con divieto per legge di nuove fabbriche | — (nuova imposta; −65 mln £ di spesa) | Monopolio privato garantito per legge a un cartello; per Bel (2011) un favore politico più che una liberalizzazione |
| 1923 | Mussolini (De Stefani) | Abolizione del monopolio INA sul ramo vita (R.D. 966/1923) | — | Beneficiò le compagnie che avevano fatto lobbying; oligopolio di fatto con l'INA |
| 1925 | Mussolini (De Stefani) | Reti telefoniche statali a 5 concessionarie private (Stipel, Telve, Timo, Teti, Set); allo Stato resta la sola zona in perdita | 255,35 mln £ | Condizioni riscritte a favore dei privati (R.D.L. 837/1924); 3 concessionarie su 5 tornano pubbliche già nel 1933 (IRI/STET) |
| 1925 | Mussolini | Riprivatizzazione Ansaldo (a Banca Nazionale di Credito + Credito Italiano) | 207,5 mln £ (41,5 subito, resto in 5 anni al 5%) | Incasso inferiore ai ~300 mln £ di sostegno pubblico erogato via CSVI dal febbraio 1923 |
| 1922–25 | Mussolini | Concessioni autostradali cinquantennali a privati (Milano-Laghi a Puricelli, ecc.), con garanzie e sussidi statali | 0 | "Profitti privati, perdite pubbliche": la maggior parte nazionalizzata negli anni '30 (AASS) per dissesto |
| 1985 | Craxi I | Collocamenti di minoranza IRI (Alitalia, Comit, STET, Sirti) | N/D (proventi a IRI) | Nessuna contendibilità: perso il premio di maggioranza |
| 1985 | Craxi I | SME: preliminare di vendita a Buitoni-De Benedetti a 497,5 mld £, bloccato da Craxi come svendita | 0 | La vendita a pezzi 1993–96 fruttò ~2.044 mld £, circa 4 volte il prezzo 1985 |
| 1986 | Craxi II | Alfa Romeo a FIAT | 1.050 mld £ in 5 rate senza interessi, prima rata 1993 | Valore attuale molto sotto il nominale; respinta l'offerta Ford; critiche durature di "regalo" |
| 1987 | Craxi II | Lanerossi (ENI) a Marzotto | 173 mld £ (a ENI) | Condanna UE per i ripianamenti pregressi (aiuti di Stato) |
| 1988 | Goria / De Mita | Riassetto Mediobanca: le banche IRI (Comit, Credit, Banco di Roma) scendono al 25%, un altro 25% a privati in patto di sindacato | N/D (proventi alle banche IRI) | Quota pubblica ridotta senza contendibilità: controllo di fatto al management e al "salotto buono" |
| 1992 | Amato I | IRI, ENI, INA, ENEL trasformati in SpA (D.L. 333/1992) | — | Avvio della privatizzazione "formale" |
| 1993–96 | Ciampi, Berlusconi I, Dini, Prodi I | Banche e finanza: Credito Italiano 54,8% (1.801 mld £), COMIT 51,3% (2.891), IMI in 3 tranche (~3.200), INA in 3 tranche (~10.400) | ~18.300 mld £ | Critiche sui "noccioli duri" deboli gravitanti su Mediobanca; obiettivo public company mancato; la 1ª tranche INA (4.530 mld £, 1994) avvenne sotto Berlusconi I |
| 1993–96 | Ciampi, Berlusconi I, Prodi I | SME a pezzi: Italgel a Nestlé, Cirio-Bertolli-De Rica, GS-Autogrill a Benetton | ~2.044 mld £ (a IRI) | GS rivenduta dai Benetton a Carrefour dopo pochi anni per ~5.000 mld £ |
| 1994 | Berlusconi I | Nuovo Pignone (ENI) a General Electric | ~700 mld £ (a ENI; cifra di stampa, non verificata su fonte primaria) | Prima dismissione industriale ENI della stagione |
| 1995–97 | Dini → Prodi I | ENI, tranche 1ª–3ª (offerte globali) | ~28.400 mld £ (6.299 + 8.872 + 13.230) | Con le tranche 1998 e 2001, ~46.700 mld £ (~24 mld €) per ~63% del capitale; operazione di mercato ordinata, controllo di fatto mantenuto (10% a CDP nel 2003, oggi CDP ~28%) |
| 1997 | Prodi I | Telecom Italia (42,1%): la maggiore privatizzazione europea dell'epoca | 22.883 mld £ (11,8 mld €) | Nocciolo duro di appena il 6,7%: nel 1999 scalata a debito Olivetti/Colaninno (golden share non esercitata); oltre 30 mld € di debito riversati sull'azienda |
| 1997 | Prodi I | SEAT Pagine Gialle (44,7%, trattativa diretta) | 1.653 mld £ | Caso-simbolo di sottoprezzo: rivalorizzata ~10 volte alla rivendita del 2000 |
| 1998 | Prodi I / D'Alema I | ENI 4ª tranche; BNL (68,3%) | 12.995 + 6.707 mld £ | — |
| 1999 | D'Alema I | ENEL 1ª tranche (~32%): allora la più grande OPV europea; Mediocredito Centrale (100%) | 32.045 + 3.944 mld £ | Corte dei Conti (2010): redditività post-vendita delle utility dovuta più a tariffe sopra la media UE che a efficienza |
| 1999–2000 | D'Alema I–II | Autostrade: OPV + 30% al nucleo Schemaventotto (Benetton) | 13.016 mld £ (6,7 mld €, a IRI) | Convenzione e proroghe favorevoli al concessionario; il nodo esplode col crollo del Morandi (2018) |
| 2000 | Amato II | Finmeccanica 43,7% (10.659 mld £), Aeroporti di Roma 51,2% (2.571), Banco di Napoli residuo (956) | ~14.200 mld £ | Banco di Napoli: il 60% era stato ceduto nel 1997 per soli 62 mld £ dopo il salvataggio pubblico del 1996 |
| 2001 | Amato II / Berlusconi II | ENI 5ª tranche (5.268 mld £); IPO Snam Rete Gas (~40%, proventi a ENI) | 2,7 mld € + ~2,2 mld € (a ENI) | — |
| 2001–02 | Berlusconi II (min. Tremonti) | Cartolarizzazioni immobiliari SCIP 1 e SCIP 2 (oltre 90.000 immobili pubblici) | 2,3 + 6,6 mld € di titoli | SCIP2: flop conclamato — vendite −33,5% sulle attese, sconti sotto il valore di mercato, chiusura in liquidazione (2009) con ~1,7 mld € a carico degli enti previdenziali |
| 2003 | Berlusconi II | ETI (tabacchi) a British American Tobacco, in asta | 2,3 mld € | — |
| 2003–05 | Berlusconi II–III | Cessioni infragruppo a CDP SpA: ENI 10%, ENEL 10,35%, Poste 35% (e Terna 29,99% da ENEL nel 2005); ceduto anche il 30% della stessa CDP alle fondazioni bancarie | ~11,0 mld € allo Stato + 1,3 mld € a ENEL + 1,05 mld € (quota CDP) | "Privatizzazioni contabili": lo Stato vende a un soggetto che controlla (CDP, fuori perimetro PA) per abbattere il debito Maastricht senza cedere il controllo |
| 2003–05 | Berlusconi II–III | ENEL tranche 2ª–4ª sul mercato; IPO Terna (50%) | ~13,9 mld € + ~1,7 mld € (a ENEL) | — |
| 2008–09 | Berlusconi IV | Alitalia a CAI ("capitani coraggiosi") dopo il no ad Air France-KLM | ≈0 al bilancio (prezzo alla procedura) | Socializzazione delle perdite: bad company allo Stato; costo 2008–14 ~4,1 mld € (studio Mediobanca) |
| 2014 | Renzi | IPO Fincantieri (~350 mln €, aumento di capitale) e Rai Way (~280 mln €, alla RAI) | ≈0 al Tesoro | Nessun incasso per il bilancio dello Stato |
| 2015 | Renzi | ENEL 5,74% (2,2 mld €); IPO Poste Italiane 35,3% (~3,1–3,4 mld €) | ~5,3–5,6 mld € | Poste: incasso ~1 mld sotto le attese; primo round del dibattito "dividendi ceduti vs interessi risparmiati" |
| 2016 | Renzi | IPO ENAV (46,6%) | 0,76–0,83 mld € | — |
| 2023–24 | Meloni | MPS in tre tranche (25% + 12,5% + 15%) | ~2,7 mld € | Recupero parziale dei ~7 mld € pubblici 2017–22; la tranche del nov. 2024 (allocazioni a Caltagirone e Delfin) sotto esame giudiziario e UE; nel 2025–26 la quota MEF si è diluita a ~4,9% con l'OPS di MPS su Mediobanca |
| 2024 | Meloni | ENI 2,8% (accelerated bookbuilding, sconto 1,7%) | ~1,4 mld € | Cessione a sconto di una quota ad alto dividendo per una riduzione marginale del debito |
| 2025–26 | Meloni | ITA Airways a Lufthansa: 41% (aumento riservato, 2025) + 49% (opzione 2026, closing atteso 2027); MEF residuo 10% | 325 mln € (a ITA) + 325 mln € (al MEF) | Il 90% ceduto per ~650 mln € contro 1,35 mld € di capitale pubblico versato nel 2021–23 (e ~8,6 mld € di salvataggi Alitalia cumulati) |
| 2024–26 | Meloni | Poste Italiane: tranche fino al ~14% autorizzata (DPCM set. 2024, mano pubblica sopra il 50%) | 0 (non eseguita ad ago. 2026) | Rinviata più volte; critiche di opposizione ("svendita") e obiezione dividendi/interessi (Osservatorio CPI) |

### 6.2 Nazionalizzazioni e salvataggi con denaro pubblico

| Anni | Governo | Operazione | Costo per le casse pubbliche | Nota |
|:---:|:---|:---|:---|:---|
| 1905–06 | Fortis I / Sonnino I / Giolitti III | Nazionalizzazione delle ferrovie (nascono le FS); riscatto della Rete Adriatica | Annualità di 30 mln £/anno per 60 anni + massicci investimenti in rotabili | Reti private sotto-investite riportate allo Stato alla scadenza delle convenzioni |
| 1907 | Giolitti III | Telefoni: reversione allo Stato delle reti delle due maggiori concessionarie | ≈0 (senza indennizzo, a scadenza) | La gestione statale si rivelò inadeguata (attese di 2–3 anni per un allaccio) |
| 1912 | Giolitti IV | Monopolio statale del ramo vita: nasce l'INA | 0 indennizzi (scelta esplicita) | Abolito dal fascismo nel 1923 |
| 1922–24 | Facta / Mussolini | Salvataggi via CSVI: Banco di Roma, Banca Italiana di Sconto, Ansaldo | Esposizione ~4.000 mln £ verso Banca d'Italia (fine 1924) | Profitti privati, perdite pubbliche; l'Ansaldo fu poi riprivatizzata sotto costo |
| 1926–33 | Mussolini | La maggior parte delle autostrade private in dissesto trasferita all'AASS (1928); restarono private Napoli-Pompei, Torino-Milano e Venezia-Padova | N/D | Fallimento del modello concessorio degli anni '20 |
| 1931–34 | Mussolini | IMI (1931); IRI (1933) e convenzioni 1934: banche miste (Comit, Credit, Banco di Roma) e loro partecipazioni industriali allo Stato | N/D (oneri di smobilizzo verso Banca d'Italia) | Al 31/12/1934 lo Stato controllava il 21,5% del capitale delle SpA italiane: il settore pubblico più ampio fuori dall'URSS (Blinkhorn) |
| 1933 | Mussolini | STET: 3 delle 5 concessionarie telefoniche "privatizzate" nel 1925 tornano pubbliche | — (interna al perimetro IRI) | Dimostra la fragilità della privatizzazione del 1925 |
| 1962–63 | Fanfani IV | Nazionalizzazione elettrica: nasce l'ENEL (~1.270 imprese) | ~1.500 mld £ di indennizzi in 10 anni (5,5%) | Indennizzi alle società, non agli azionisti: finanziarono l'avventura chimica Montedison, con "gigantesco spreco di risorse" (arch. storico Mediobanca) |
| 1962–82 | vari (DC e centrosinistra) | EFIM, GEPI (1971), EGAM (sciolto 1977), salvataggio chimica SIR-Liquichimica | Costo cumulato non verificabile; documentati: ricapitalizzazione GEPI 168 mld £ (1980), perdite ex-EGAM ~480 mld £ (1977–80), SAMIM ~1.000 mld £ (1977–82), SIR ~4.000 mld £ tra banche e Stato (stima giornalistica) | La stagione dei "salvataggi assistenziali": aziende decotte a carico del contribuente |
| 2015–17 | Renzi / Gentiloni | 4 banche (2015), banche venete (2017), MPS (2017: ricapitalizzazione precauzionale, Tesoro al 68%) | 3,6 mld € (a carico del sistema bancario) + 4,8 mld € cash e ~12 mld € di garanzie + 5,4 mld € (più 1,6 mld € nel 2022) | Burden sharing sui risparmiatori retail (caso Etruria); le good bank rivendute a 1 € (tre a UBI) con perdite per il Fondo di Risoluzione; da MPS recuperati solo ~2,7 mld € con le vendite 2023–24 |
| 2017–19 | Gentiloni / Conte I-II | Prestiti ponte ad Alitalia in amministrazione straordinaria | ~1,3 mld € (dichiarati aiuti illegali dalla UE, mai recuperati) | Costo cumulato dei salvataggi Alitalia: 7,4 mld € 1974–2014 (Mediobanca), ~8,6 mld € includendo il 2017–21 (Sole 24 Ore) |
| 2020–23 | Conte II → Meloni | ITA Airways: nuova compagnia interamente pubblica | 1,35 mld € di capitale versato | Ceduta a Lufthansa nel 2025–26 per ~650 mln € complessivi |
| 2021–22 | Draghi | Riacquisto di Autostrade per l'Italia da Atlantia (88,06%, via CDP + Blackstone + Macquarie) | 8,2 mld € | Critica speculare alla svendita: uscita "generosa" dei Benetton dopo il Morandi, senza revoca della concessione |
| 2024 | Meloni | FiberCop/NetCo TIM: il MEF entra con ~16% accanto a KKR | ~2,2 mld € (stima stampa, DPCM di autorizzazione) | Lo Stato socio di minoranza nella rete TLC nazionale ceduta a un fondo USA |

### 6.3 Aggregati documentati

- **1925–26 (fascismo):** telefoni + Ansaldo fruttarono 462,85 mln £ = 2,3% delle entrate fiscali di quell'esercizio, il primo e unico con surplus reale di bilancio del regime (Répaci, in Bel 2011).
- **1992–2000:** incassi Tesoro + IRI ≈ **94,3 mld €** (Libro bianco del Tesoro, 2001), con picchi annui del 2,05% del PIL (1997) e 2,21% (1999).
- **1985–2008:** la Corte dei Conti (relazione 12/2/2010) censisce **207 operazioni per ~156 mld €** (119 mld dalle 93 operazioni post-1992), collocando l'Italia "al secondo posto, dopo il Giappone, nella classifica globale" per incassi.
- **Destinazione:** i proventi del Tesoro affluirono per legge (L. 432/1993) al **Fondo per l'ammortamento dei titoli di Stato**: 111,2 mld € di entrate 1994–2005 (dossier Camera). Ma la Corte dei Conti rileva ritardi nei versamenti, 2,2 mld € di costi di gestione e un abbattimento del debito di solo ~10% a fronte di un debito cresciuto di un quarto nel periodo; le privatizzazioni "effettive" (con perdita di controllo) valsero il 3,9% del PIL contro l'11,9% del Regno Unito.
- **2024–26 (piano Meloni):** obiettivo NADEF 2023 ~20 mld € (1% del PIL); incassati ad agosto 2026 ~4,1 mld € (MPS 2,7 + ENI 1,4), più 325 mln € attesi al MEF dal closing della cessione ITA (Q1 2027): ~4,4 mld € complessivi, circa un quinto dell'obiettivo. L'Osservatorio CPI stima che, mantenendo il controllo pubblico, il perimetro vendibile "difficilmente raggiunge 10 miliardi" e che i vantaggi di cassa sarebbero annullati dai dividendi persi in ~20 anni.

---

## 7. Il rischio "svendita": criteri e casi documentati

Vendere asset pubblici non è di per sé una svendita: l'esito dipende da cinque condizioni verificabili. La storia italiana offre casi documentati per ciascuna.

1. **Congruità del prezzo.** Il test più semplice è la rivendita: SEAT Pagine Gialle, ceduta nel 1997 a 1.653 mld £ e rivalorizzata ~10 volte nel 2000; la GS (dallo spezzatino SME ai Benetton, insieme ad Autogrill), rivenduta a Carrefour per ~5.000 mld £; la SME stessa, il cui spezzatino 1993–96 fruttò circa 4 volte il prezzo bloccato nel 1985. All'estremo opposto, Alfa Romeo (1986): prezzo nominale dilazionato in 5 rate senza interessi a partire da 7 anni dopo, cioè un valore attuale molto inferiore. Caso recente: ITA Airways, il cui 90% è passato a Lufthansa per ~650 mln € contro 1,35 mld € di capitale pubblico appena versato.
2. **Destinazione dei proventi.** La stagione 1993–2005 fu, sulla carta, virtuosa: proventi vincolati per legge al Fondo ammortamento titoli di Stato. Ma l'effetto sul debito fu modesto (~−10% secondo la Corte dei Conti, mentre il debito saliva). Le privatizzazioni fasciste del 1922–25 finanziarono il pareggio di bilancio corrente; le cessioni a CDP del 2003–05 furono operazioni contabili per il debito Maastricht senza vera cessione; le vendite dei gruppi (Lanerossi, Snam, Terna, Rai Way, Fincantieri) non portarono nulla al bilancio dello Stato.
3. **Dividendi persi vs interessi risparmiati.** È il criterio centrale del dibattito attuale: cedere quote di ENI o Poste — società ad alto dividendo — riduce il debito di frazioni di punto ma rinuncia a flussi perpetui; l'Osservatorio CPI calcola che per il piano 2024–26 i vantaggi di cassa si annullerebbero in circa vent'anni di dividendi persi. L'argomento è documentato per Poste nel 2015 e per il piano 2024–26; per le grandi OPV degli anni '90 un confronto quantitativo dividendi/interessi non è verificabile sulle fonti reperite.
4. **Qualità della regolazione post-vendita.** Una cessione può trasformare un monopolio pubblico in un monopolio privato: i fiammiferi al consorzio CIF nel 1923 (con divieto legale di nuovi entranti); Telecom privatizzata con un nocciolo duro del 6,7% che la lasciò preda della scalata a debito del 1999; Autostrade ceduta con una convenzione e proroghe che la vicenda Morandi e le analisi successive hanno mostrato squilibrate a favore del concessionario; le utility privatizzate la cui redditività, nota la Corte, venne "più da tariffe sopra la media europea che da efficienza".
5. **Socializzazione delle perdite.** Il rischio simmetrico alla svendita: lo Stato che vende il buono e tiene il cattivo (Alitalia-CAI 2008: asset a CAI, bad company e ~4 mld € ai contribuenti), o che ricompra caro ciò che aveva venduto (ASPI riacquistata per 8,2 mld € nel 2022 da Atlantia, controllata dai Benetton, che nel 2000 ne avevano rilevato il controllo pagando ~4.911 mld £ — ~2,5 mld € — per il solo 30% via Schemaventotto, incassando poi 1,4 mld € di dividendi nel 2000–2009; le autostrade degli anni '20, private nei profitti e pubbliche nel dissesto).

**Lettura d'insieme:** in 125 anni il rischio svendita si è materializzato non tanto nelle grandi OPV di mercato (ENI, ENEL, che restano le operazioni meglio riuscite), quanto nelle **trattative dirette con pochi compratori** (SEAT, Alfa Romeo, Autostrade per il nucleo stabile) o **con regole riscritte a favore dei compratori** (telefoni 1925), nelle **operazioni fatte per far quadrare i conti in fretta** (cartolarizzazioni SCIP2, cessioni contabili a CDP, piano 2024–26 realizzato per un quinto) e nelle **uscite di emergenza da salvataggi** (Ansaldo 1925, Banco di Napoli 1997, ITA 2025). La costante storica: quando l'obiettivo primario è il numero di bilancio dell'anno, il prezzo e la regolazione passano in secondo piano.

---

## 8. Analisi per fasi storiche (griglia quinquennale)

### 8.1 Età giolittiana (1900–1914): il primo decollo
Crescita regolare del +8% pro capite per quinquennio, la migliore performance dell'Italia liberale, con il debito in discesa da 110% a ~84% del PIL. È il primo decollo industriale (triangolo Milano-Torino-Genova, nazionalizzazione delle ferrovie nel 1905, conversione della rendita nel 1906), ma su una base sociale fragilissima: nel 1901 l'analfabetismo era al 48,5% e lo Stato spendeva per l'istruzione meno dell'1% del PIL. L'emigrazione di massa fu la valvola di sfogo di una crescita che non assorbiva la popolazione. Sul fronte degli asset, è la stagione delle **statalizzazioni strategiche** (FS 1905, telefoni 1907, INA 1912), fatte pagando poco o nulla ai concessionari uscenti.

### 8.2 Guerra, dopoguerra e fascismo (1915–1943): la volatilità
La griglia quinquennale rivela ciò che quella decennale nascondeva: il quinquennio 1910–1915 è già negativo (−4,9%), il 1915–1920 quasi fermo, e il vero boom è il 1920–1925 (+20,9%) — che inizia con i governi liberali e la ripresa post-bellica, non con le politiche del regime. La guerra lascia il debito al massimo storico assoluto (159,7% nel 1920) e prezzi moltiplicati per 3,5 rispetto al 1914. Il primo fascismo è anche l'autore della **prima privatizzazione della storia** (Bel 2011): fiammiferi, assicurazioni vita, reti telefoniche, Ansaldo, autostrade in concessione (1922–25), per un incasso pari al 2,3% delle entrate fiscali 1925–26 — operazioni funzionali al pareggio di bilancio e alla costruzione del consenso tra gli industriali. Il fascismo "maturo" (quota 90, autarchia) produce invece i due quinquenni 1925–1935 peggiori del secolo in tempo di pace: +1,1% e +0,8% — sul secondo pesa anche la Grande Depressione mondiale, che però l'Italia attraversò peggio di molti concorrenti. La crisi riporta tutto allo Stato: salvataggi bancari, IMI (1931), IRI (1933): nel 1934 lo Stato controlla il 21,5% del capitale azionario italiano, il settore pubblico più ampio fuori dall'URSS — l'esatto contrario delle privatizzazioni di dieci anni prima. Il +9,2% del 1935–1940 è drogato dalla spesa bellica (dall'8% al 12% del reddito nazionale tra 1939 e 1940, fino al 23% nel 1941), e il conto arriva nel 1940–1945: −44,5% pro capite, il PIL torna ai livelli del 1905. Il debito bellico viene azzerato di fatto dall'iperinflazione 1943–47 (prezzi ×16,7): dal 102,5% del 1943 al 24,2% del 1947, una patrimoniale occulta sui risparmiatori. Sull'istruzione, l'analfabetismo scende (dal 27% del 1921 al 20,9% del 1931) ma per inerzia demografica più che per investimento: il dato sui titoli di studio del 1951 (4,3%) certifica che mezzo secolo di scuola aveva prodotto un'élite minuscola.

### 8.3 Ricostruzione e miracolo (1945–1970): il quarto di secolo irripetibile
Cinque quinquenni consecutivi con crescita pro capite tra +26% e +97%: nessun altro periodo della storia italiana si avvicina. I governi centristi e poi di centrosinistra mantengono bassa la spesa per la difesa (dal 3,8% del 1951 al 2,1% del 1970), moneta stabile, alto risparmio, **debito al minimo storico** (24–34% per tutto il periodo) e investimento pubblico industriale (IRI — ereditato dal fascismo e riconvertito —, ENI di Mattei dal 1953, Autostrada del Sole, Cassa per il Mezzogiorno). La riforma Vanoni (1951) introduce la dichiarazione dei redditi. Il PIL pro capite quasi triplica tra 1950 e 1970 (da 5.582 a 15.492 $). La nazionalizzazione elettrica del 1962–63 (ENEL) è l'ultima grande espansione del perimetro pubblico, ma con un vizio documentato: ~1.500 mld £ di indennizzi pagati alle società e non agli azionisti, che finanziarono la fallimentare avventura chimica Montedison. È anche il periodo in cui nasce la scuola media unica (1962): i titoli di studio passano dal 4,3% (1951) all'8,7% (1971) della popolazione — ancora pochissimo, ma con le coorti giovani ormai scolarizzate. Il rovescio: i delitti denunciati salgono da 333k (1960) a 548k (1970), inizio di una tendenza ventennale.

### 8.4 Welfare, inflazione e debito (1970–1990): crescita comprata a credito
La crescita rallenta ma resta reale (+10,5%, +22,4%, +7,2%, +15,7% nei quattro quinquenni). In questi vent'anni i governi costruiscono il welfare moderno: Statuto dei lavoratori (1970), riforma tributaria con IVA e IRPEF (1971–74), SSN (1978); la spesa sociale sale dal 13,8% al 20,6% del PIL e quella sanitaria dal 4,1% al 5,7%. La scolarizzazione accelera davvero: i diplomati/laureati passano dall'8,7% al 22,4% (pop. 6+). Ma il conto è triplice: **il debito passa dal 37,1% (1970) al 95,2% (1990)** del PIL; l'inflazione resta a due cifre per dodici anni (picco 21% nel 1980); e il perimetro pubblico diventa il ricettacolo dei salvataggi assistenziali (EFIM, GEPI, EGAM, chimica SIR — miliardi l'anno a fondo perduto). I delitti denunciati più che quadruplicano: da 548k (1970) a 2.502k (1990), picco della serie omogenea pre-2004 — anni di piombo, eroina, criminalità organizzata (sul picco 1990–91 pesa anche l'entrata a regime del nuovo codice di procedura penale del 1989). Le prime dismissioni dell'IRI di Prodi (Alfa Romeo 1986, Lanerossi 1987, caso SME 1985) sono episodiche, opache nelle modalità e trascurabili rispetto ai trasferimenti statali agli enti. È la fase in cui efficacia sociale ed equilibrio finanziario divergono definitivamente.

### 8.5 L'aggancio all'euro (1990–2007): l'ultimo tratto di crescita
Contrariamente alla vulgata della "stagnazione anni '90", i quinquenni 1990–1995, 1995–2000 e 2000–2005 sono ancora positivi (+10,2%, +14,1%, +6,6%): il risanamento per Maastricht (governi Amato, Ciampi, Dini, Prodi) comprime la spesa senza fermare la crescita, mentre Tangentopoli (1992–94) travolge i partiti che avevano costruito il debito (nel 1993 un referendum abroga il Ministero delle Partecipazioni Statali con il 90,1% dei sì). Le riforme strutturali si concentrano qui: pensioni Amato (1992) e Dini (1995), pacchetto Treu (1997), IRAP (1997). È anche la **grande stagione delle privatizzazioni** (~94 mld € di incassi 1992–2000, secondo programma al mondo dopo il Giappone), che insieme all'avanzo primario piega il debito dal picco del 1994 (121,8% nella serie dell'epoca) al 106–109% dei primi anni 2000 — ma con gli errori documentati in §7: Telecom, SEAT, Autostrade. Il picco storico del PIL pro capite pre-crisi è nel 2007 (36.311 $). I delitti scendono dal picco 1991 e oscillano attorno a 2,2–2,6 milioni. L'istruzione continua la sua marcia: dal 32,6% (1992) al 50,1% (2005) dei 25–64enni con almeno un diploma.

### 8.6 Il quindicennio perduto e il rimbalzo (2008–2025)
Tre quinquenni consecutivi negativi — 2005–2010 (−0,3%), 2010–2015 (−3,3%), 2015–2020 (−3,7%) — un unicum in tempo di pace dall'Unità. Nel 2020 il PIL pro capite (32.385 $) era tornato sotto il livello del 2000. Le cause si vedono nelle tabelle: la spesa pubblica sale (dal 47,1% al 56,8% del PIL tra 2005 e 2020) ma trainata da protezione sociale e sanità, non da investimento; il debito sale da 106,2% (2005) a 154,4% (2020), nonostante la riforma Fornero (2011) e gli avanzi primari; il reddito reale delle famiglie nel 2022 era ancora ~10% sotto il 2006 (Banca d'Italia); la spesa mensile delle famiglie nel 2020 (2.328 €) era ai minimi. Le operazioni sugli asset diventano bidirezionali e difensive: privatizzazioni di mercato sotto target (Poste, ENAV 2015–16), salvataggi bancari (2015–17), ri-nazionalizzazioni (ITA, riacquisto ASPI a 8,2 mld €), e dal 2023 un nuovo piano di dismissioni da 20 mld € realizzato per circa un quinto. Il paradosso è che questo è il periodo di massima istruzione della storia (67% dei 25–64enni con almeno un diploma nel 2025) e di forte emigrazione qualificata. Il rimbalzo post-COVID (+11,9% pro capite 2020–2022) riporta il pro capite 2022 a un soffio dal picco 2007 (−0,2%), superato poi di misura con la crescita 2023–2025 (+0,9%, +0,8%, +0,5% annui secondo ISTAT); il PNRR (194,4 mld €, incassati ~166 mld ad agosto 2026 ma spesi solo ~113,5 mld a febbraio 2026, con ~24 mld a rischio slittamento secondo la Corte dei Conti) è la scommessa aperta; la crescita di fondo resta sotto l'1% annuo e il debito risale a 137,1% nel 2025 per l'effetto di cassa del Superbonus.

### 8.7 Sintesi
La lettura quinquennale ridimensiona due miti e ne conferma uno. Ridimensiona il mito del decennio-miracolo isolato (fu un quarto di secolo di crescita continua, 1945–1970, sotto governi a guida DC con formule diverse) e il mito del "crollo della criminalità" recente (il picco della serie omogenea pre-2004 è il 1990, il minimo del 2020 è un artefatto dei lockdown, e i livelli attuali sono risaliti a ~2,4 milioni di delitti). Conferma invece la diagnosi centrale: dal 2008 l'Italia ha vissuto il più lungo arresto della crescita della sua storia unitaria in tempo di pace, con redditi familiari reali fermi ai livelli di metà anni 2000 nonostante la popolazione più istruita di sempre. Nessuna coalizione — centrodestra, centrosinistra, tecnici, populisti — ha invertito la tendenza; il rimbalzo 2021–2022 è l'unico episodio di crescita robusta del ventennio. La serie del debito aggiunge la controprova: le uniche riduzioni durature sono venute dall'inflazione (1943–47), dalla crescita (1950–1965) e dall'avanzo primario con privatizzazioni (1994–2007); mai dalle sole cessioni di asset.

---

## 9. Valutazione sintetica per area politica

Sintesi per "famiglie" politiche, sulle metriche delle tabelle 1–5. Vale l'avvertenza del §11: correlazione non è causazione, e ogni area ha governato in condizioni internazionali diverse.

| Area politica (periodo) | Crescita pro capite | Debito/PIL | Gestione asset statali | Fatti chiave per la valutazione |
|:---|:---|:---|:---|:---|
| Liberali giolittiani (1900–1914) | +8% a quinquennio | 110 → ~84 | Statalizzazioni strategiche a basso costo (FS, telefoni, INA) | Decollo industriale; analfabetismo al 48,5%; emigrazione di massa come valvola |
| Guerra e crisi liberale (1915–1922) | −4,9%, poi ristagno | → 159,7 (max storico) | Economia di guerra | Prezzi ×3,5; crollo dello Stato liberale |
| Fascismo (1922–1943) | +20,9 (ripresa post-bellica), poi +1,1 e +0,8 (i peggiori del secolo in pace), +9,2 (riarmo), −44,5 (guerra) | 104 → 72 (1940), ~102 nel 1943, poi azzerato dall'iperinflazione: patrimoniale occulta | Prima privatizzazione della storia (1922–25) a favore di gruppi vicini al regime; poi statalizzazione massima (IRI, 21,5% del capitale azionario) | Bilancio economico complessivo fallimentare; il conto della guerra pagato da risparmiatori e popolazione |
| Centrismo DC (1945–1962) | +97,2, +33,5, +26,5 | 72 → ~30 (minimo storico) | Espansione produttiva del perimetro pubblico (ENI 1953); nessuna svendita | Miracolo economico; riforma Vanoni; difesa in calo costante |
| Centrosinistra organico (1962–1976) | +28,4, +27,9, +10,5 | 28 → 57 | ENEL (1962: indennizzi mal disegnati); inizio dei salvataggi (EFIM, GEPI) | Scuola media unica, Statuto dei lavoratori, riforma tributaria; primo scivolamento dei conti |
| Solidarietà nazionale e pentapartito (1976–1992) | +22,4, +7,2, +15,7 | 56 → 105 (1992) | Salvataggi assistenziali sistematici (SIR, EGAM); prime dismissioni opache (Alfa Romeo, SME) | Welfare completato (SSN 1978) ma a debito; inflazione a due cifre; picco storico dei delitti; l'era si chiude con Tangentopoli |
| Tecnici e Ulivo (1992–2001) | +10,2, +14,1 | 121,8 (picco '94) → 109 | La grande stagione: ~94 mld € (Tesoro + IRI), con i proventi del Tesoro vincolati per legge al Fondo ammortamento; errori su Telecom, SEAT, Autostrade | Risanamento Maastricht; riforme pensioni Amato/Dini, Treu, IRAP; unica riduzione del debito ottenuta con avanzi primari e cessioni (non con inflazione) nella storia repubblicana |
| Centrodestra berlusconiano (2001–2011) | +6,6, −0,3 | 109 → 119 | Cessioni di mercato reali (ETI; tranche ENEL 2003–05 ~13,9 mld €) ma anche operazioni contabili (CDP 2003–05) e cartolarizzazioni (SCIP2, flop); Alitalia-CAI: perdite socializzate | Riforme Maroni e Biagi; crescita già ferma prima della crisi 2008 |
| Monti, larghe intese e governi PD (2011–2018) | −3,3 | ~120 → ~135 | Privatizzazioni di mercato sotto target (Poste, ENAV); salvataggi bancari 2015–17 (~10 mld € tra cash e ricapitalizzazioni) | Fornero e Jobs Act; doppia recessione; redditi familiari ai minimi |
| Governi Conte I e II (2018–2021) | −3,7 (2015–20) | → 154,4 (2020) | Ri-nazionalizzazione Alitalia→ITA (istituita da Conte II; 1,35 mld € versati in tranche 2021–23); prestiti ponte dichiarati illegali dalla UE | Quota 100 e RdC; gestione COVID; avvio PNRR |
| Unità nazionale (2021–2022) | +11,9 (rimbalzo 2020–22) | 154,4 → 138,4 (2022) | Riacquisto ASPI (8,2 mld €, prezzo criticato) | Rimbalzo record trainato anche dal Superbonus, il cui costo emerge negli anni successivi |
| Centrodestra Meloni (2022–2025) | +0,9, +0,8, +0,5 annui | 134,7 (2024) → 137,1 (2025) | Piano da 20 mld € realizzato ~20% (MPS, ENI, ITA); rischio "dividendi vs interessi" (Osservatorio CPI); ingresso in FiberCop (2,2 mld €) | Stabilità politica inusuale (governo tra i più longevi della Repubblica); PNRR incassato all'85% ma speso al 58%; crescita sotto l'1% |

**Tre regolarità emergono dal quadro:**

1. **La stabilità non basta, ma l'instabilità costa.** Il Regno liberale cambiò governo in media ogni 13 mesi, la Prima Repubblica ogni 11–12 (50 governi in 48 anni), la Seconda ogni ~21 (18 governi dal 1994). Le fasi di crescita più lunga (1950–1970) coincisero con un sistema instabile nei governi ma stabilissimo nella formula politica; il ventennio 1922–43, il più stabile in assoluto, produsse i peggiori quinquenni di pace del secolo.
2. **Il debito è la variabile che separa le stagioni riformiste da quelle redistributive.** Le aree politiche che hanno costruito il welfare (1970–1992) lo hanno finanziato in deficit, lasciando alle successive il vincolo che da allora domina ogni scelta — incluse le cessioni di asset. Le uniche riduzioni durature del rapporto sono venute da inflazione, crescita o avanzi primari prolungati; mai dalle sole privatizzazioni (Corte dei Conti: ~−10% di debito da ~156 mld € di cessioni).
3. **Il rischio svendita è trasversale agli schieramenti.** Lo hanno corso il fascismo nel 1922–25 (favori ai gruppi amici), il pentapartito negli anni '80 (Alfa Romeo, trattative senza gara), il centrosinistra negli anni '90 (SEAT, noccioli duri deboli, convenzione Autostrade), il centrodestra negli anni 2000 (SCIP2, vendite contabili a CDP) e i governi recenti sulle uscite di emergenza (Banco di Napoli 1997, ITA 2025). Le operazioni meglio riuscite — le OPV di mercato di ENI ed ENEL — sono quelle con più concorrenza tra compratori e proventi vincolati alla riduzione del debito.

---

## 10. Correzioni rispetto alle versioni precedenti

### 10.1 Correzioni della v2.0 rispetto alla ricerca originale

1. **Il "+124% del PIL nel decennio 1950–60" era sovrastimato.** Il Maddison Project dà +80% per il PIL totale e +69% per il pro capite nel 1950–1960 (valori riverificati sul CSV nella v2.1). Il balzo davvero eccezionale è quello 1945–1950 (+97,2% pro capite in 5 anni), che però è ricostruzione dal collasso bellico. La griglia quinquennale mostra che il miracolo economico fu una crescita costante di ~+27% per quinquennio dal 1955 al 1970, non un unico decennio anomalo.
2. **I reati erano sbagliati in quasi tutte le righe.** L'originale indicava 2.100k nel 1990 (reale: 2.501,6k, il primo grande picco storico), 2.800k nel 2010 (reale: 2.621,0k) e un "crollo a 1.900k" nel 2020 presentato come tendenza strutturale: il valore 2020 è in effetti 1.900,6k (dato ufficiale ISTAT, verificato in v2.1) ma è un effetto lockdown — nel 2024 i delitti erano risaliti a 2.399,3k. La narrativa del "crollo strutturale della criminalità 2010–2020" non è supportata dai dati; il vero picco storico è il 1990–1991 e la vera esplosione è quella 1970–1990 (da 548k a 2.502k).
3. **L'istruzione era sovrastimata per gli anni recenti e ambigua per quelli storici.** L'originale dava 55% di diplomati/laureati nel 2000 e 60% nel 2010; Eurostat (25–64 anni) dà 45,2% e 55,1%. Per il periodo pre-1950 nessuna delle percentuali dell'originale è documentabile: il primo dato sui titoli di studio è del 1951 (4,3%, non il 12% indicato).
4. **Il welfare in % PIL era gonfiato per gli anni '70–'90.** L'originale indicava 18% (1970), 22% (1980), 24% (1990); la serie OCSE/SOCX dà 13,8%, 17,3%, 20,6%.
5. **Reddito e "capacità di spesa" pre-2005 non sono documentabili** nei formati aperti consultabili: i valori dell'originale in "euro equivalenti 2020" non hanno una fonte tracciabile e sono stati rimossi. Lo stesso vale per l'"accesso al credito" prima del 1989.
6. **Alcuni governi erano imprecisi.** Nel 1900 il governo prevalente fino a giugno era Pelloux II (Saracco è nominato il 24/6 e giura il 25/6); nel 2020 la popolazione era 59,6 mln al 1/1 secondo ISTAT, non 59,2 (in Tabella 1 figura 59,5: popolazione implicita del dataset Maddison); il PIL 2020 non era uguale al 2010 come suggeriva l'originale.

### 10.2 Correzioni della v2.1 (verifica puntuale sulle fonti primarie)

**Errori sostanziali corretti:**

1. **Spesa pubblica totale 2024: 50,4%, non 53,6%.** Il 53,6% era il dato 2023, gonfiato dai crediti d'imposta Superbonus contabilizzati come spesa (Eurostat gov_10a_main).
2. **Istruzione COFOG 2015: 4,0%, non 4,4%** (la spesa era già scesa al 4,0–4,1% dal 2011); anche il 2010 era 4,4, non 4,5 (Eurostat gov_10a_exp).
3. **Spesa media mensile delle famiglie 2008 e 2010: 2.485 € e 2.453 €, non 2.648 € e 2.604 €** (comunicati ISTAT "I consumi delle famiglie" 2008 e 2010; i valori della v2.0 non trovano riscontro in alcuna serie ISTAT). Aggiunta l'avvertenza sulla rottura di serie 2014.
4. **Delitti 2020: il valore ufficiale esiste** (1.900.624, ISTAT) — la v2.0 lo dava per non reperibile; **aggiunto il 2024** (2.399.347, +2,5% sul 2023).

**Imprecisioni minori corrette:** difesa 1965 = 2,7 (non 2,8) e 2020 = 1,7 SIPRI (non 1,6); sanità 1985 = 4,9 e 2024 = 6,6; protezione sociale COFOG 2015 = 21,2 e 2024 = 21,3; istruzione "4,7 (1987)" era in realtà il dato 1985; titoli di studio 2020 = 50,9% su popolazione 9+ (non ~50,5); reddito SHIW 2008 = 32.146 € (non 32.148).

**Composizioni di governo integrate:** Giolitti V includeva il PPI; nel 1970 il partito socialdemocratico si chiamava PSU; Moro IV aveva l'appoggio esterno anche del PSDI; Berlusconi III includeva NPSI e PRI; Renzi includeva anche PSI, CD e DemoS (tutte le 26 attribuzioni anno→governo sono risultate corrette).

**Precisazione Maddison:** il PIL pro capite 2022 (36.224 $) resta di un soffio **sotto** il picco pre-crisi del 2007 (36.311 $): nel 2022 l'Italia non aveva ancora del tutto recuperato il livello 2007.

---

## 11. Limiti dell'analisi e dati mancanti

Restano non colmati, per inaccessibilità tecnica delle fonti (non per loro inesistenza): la spesa statale per funzione 1900–1950 (pubblicazione RGS "La spesa dello Stato dall'Unità d'Italia", errore 403); i supplementi storici dell'Indagine Banca d'Italia 1965–2000 (PDF scansionati in lire e tavole xlsx); i delitti pre-1955 (ISTAT considera le statistiche di delittuosità disponibili solo dal 1955; la Tavola 6.18 delle Serie storiche, recuperata in v2.1 via Wayback Machine, copre il 1955–2014). Chi volesse completare la tabella dovrebbe partire da lì.

Sulla nuova sezione asset (§6–7) valgono tre cautele: gli **incassi nominali di epoche diverse non sono sommabili** (nessuna deflazione applicata); il giudizio di **congruità del prezzo è sempre più facile ex post** (le rivendite a multipli dimostrano il sottoprezzo solo se le condizioni di mercato sono comparabili); e per diverse operazioni (collocamenti 1985, Mediobanca 1988, quota esatta MEF in FiberCop) gli importi non sono verificabili su fonte primaria e sono marcati come tali. Inoltre: correlazione non è causazione — la tabella mostra cosa è accaduto durante ciascun governo, non cosa è accaduto a causa di esso; su finestre di 5 anni pesano cicli internazionali, shock petroliferi, pandemie e politiche dei governi precedenti.

---

## 12. Fonti

**PIL e popolazione:**
- Maddison Project Database 2023 (Bolt & van Zanden), Università di Groningen — https://www.rug.nl/ggdc/historicaldevelopment/maddison/releases/maddison-project-database-2023
- Our World in Data, "GDP per capita — Maddison Project Database" — https://ourworldindata.org/grapher/gdp-per-capita-maddison (e serie PIL totale: https://ourworldindata.org/grapher/gdp-maddison-project-database)
- ISTAT, "PIL e indebitamento AP – Anni 2023–2025" (2/3/2026) — https://www.istat.it/wp-content/uploads/2026/03/PIL-E-INDEBITAMENTO-AP_Anni-2023-2025.pdf
- ISTAT, Indicatori demografici 2024 e 2025 — https://www.istat.it/wp-content/uploads/2025/03/Indicatori_demografici_2024.pdf ; https://www.istat.it/wp-content/uploads/2026/03/Report_Indicatori-demografici_Anno-2025.pdf

**Debito pubblico e inflazione:**
- M. Francese, A. Pace, "Il debito pubblico italiano dall'Unità a oggi. Una ricostruzione della serie storica", Banca d'Italia, QEF n. 31, 2008 — https://www.bancaditalia.it/pubblicazioni/qef/2008-0031/QEF_31.pdf
- IMF Historical Public Debt Database (DEBT1) — https://www.imf.org/external/datamapper/api/v1/DEBT1
- Eurostat, gov_10dd_edpt1 (debito PA % PIL, 1995–2025) — https://ec.europa.eu/eurostat/databrowser/view/gov_10dd_edpt1/default/table
- ISTAT, "Il valore della moneta in Italia dal 1861 al 2024" (coefficienti di rivalutazione) — https://www.istat.it/tavole-di-dati/il-valore-della-moneta-in-italia-dal-1861-al-2024/

**Governi:**
- Wikipedia (it), voci dei singoli governi (verificate su wikitext originale) e liste — https://it.wikipedia.org/wiki/Governi_della_Repubblica_Italiana ; https://it.wikipedia.org/wiki/Governi_del_Regno_d%27Italia
- Portale storico della Camera dei deputati — https://storia.camera.it/governi

**Istruzione:**
- ISTAT, "Storie di dati n.1 – Il lungo cammino dell'istruzione" (analfabetismo ai censimenti 1861–2024) — https://www.istat.it/wp-content/uploads/2026/02/Storie_di_dati_1-Istruzione.pdf
- ISTAT, "Censimento e scuola" (titoli di studio ai censimenti 1951–2020, Tabella 7) — https://www.istat.it/wp-content/uploads/2022/12/Modulo2_Censimento-scuola.pdf
- Eurostat, edat_lfse_03 (% 25–64 con almeno diploma, 1992–2025) — https://ec.europa.eu/eurostat/databrowser/view/edat_lfse_03/default/table

**Spesa pubblica:**
- SIPRI Military Expenditure Database (difesa 1949–2025) — https://www.sipri.org/databases/milex (serie % PIL via https://ourworldindata.org/grapher/military-spending-as-a-share-of-gdp-sipri)
- Eurostat, gov_10a_exp (spesa COFOG 1995–2024: GF02, GF07, GF09, GF10) e gov_10a_main (spesa totale) — https://ec.europa.eu/eurostat/databrowser/view/gov_10a_exp/default/table
- OCSE, spesa sanitaria pubblica 1960–1990 via Our World in Data — https://ourworldindata.org/grapher/public-health-expenditure-share-gdp
- OCSE SOCX / Lindert, spesa sociale 1880–2023 via Our World in Data — https://ourworldindata.org/grapher/social-spending-oecd-longrun
- UNESCO/World Bank, spesa per istruzione % PIL (1970–1990) — https://ourworldindata.org/grapher/total-government-expenditure-on-education-gdp
- Eurostat, ESSPROS tps00098 (protezione sociale) — https://ec.europa.eu/eurostat/databrowser/view/tps00098/default/table
- M. Harrison, "The economics of World War II" — https://warwick.ac.uk/fac/soc/economics/staff/mharrison/public/ww2overview1998.pdf
- F. Galassi, M. Harrison, "Italy at war, 1915–1918" — https://warwick.ac.uk/fac/soc/economics/staff/mharrison/public/ww1italy2005.pdf
- M. Legnani, "Sul finanziamento della guerra fascista", Italia contemporanea — https://www.reteparri.it/wp-content/uploads/ic/RAV0053532_1985_158-161_15.pdf
- Quaderni Dip. Economia Politica Univ. Siena n. 388 (istruzione % PIL 1861–1915) — http://repec.deps.unisi.it/quaderni/388.pdf

**Criminalità:**
- Eurostat, crim_hist (delitti registrati 1956–2000) — https://ec.europa.eu/eurostat/databrowser/view/crim_hist/default/table
- ISTAT, Serie storiche, Tavola 6.18 "Delitti denunciati" 1955–2014 (via Wayback Machine) e "Storia delle fonti – Giustizia"
- ISTAT, datawarehouse IstatData, dataset DCCV_DELITTIPS (2006–2024) — https://esploradati.istat.it
- ISTAT, Annuario statistico italiano, cap. 6 (ed. 2024, Tavola 6.14) — https://www.istat.it/storage/ASI/2024/capitoli/C06.pdf
- ISTAT, "Dei delitti e delle pene" (2026) — https://www.istat.it/wp-content/uploads/2026/06/storie-dati-criminalita-giustizia.pdf

**Famiglie (reddito, consumi, credito):**
- Banca d'Italia, Indagine sui bilanci delle famiglie (fascicoli 2008, 2010, 2014, 2016, 2020, 2022) — https://www.bancaditalia.it/pubblicazioni/indagine-famiglie/
- ISTAT, comunicati "I consumi delle famiglie" (2008, 2010) e "Spese per consumi delle famiglie" (2015, 2020, 2024) — https://www.istat.it/comunicato-stampa/spese-per-consumi-delle-famiglie-anno-2024/
- ISTAT, "Condizioni di vita e reddito delle famiglie – Anni 2023-2024" (marzo 2025) — https://www.istat.it/wp-content/uploads/2025/03/REPORT-REDDITO-CONDIZIONI-DI-VITA_Anno-2024.pdf
- Eurostat, tec00104 (debito famiglie / reddito disponibile) — https://ec.europa.eu/eurostat/databrowser/view/tec00104/default/table

**Cessioni di asset statali, privatizzazioni, salvataggi:**
- G. Bel, "The first privatisation: selling SOEs and privatising public monopolies in Fascist Italy (1922–1925)", Cambridge Journal of Economics 35(5), 2011 (working paper EUI RSCAS 2009/46) — https://cadmus.eui.eu/handle/1814/12319
- Ministero del Tesoro, "Libro bianco sulle privatizzazioni", aprile 2001 — https://www.de.mef.gov.it/export/sites/sitode/modules/documenti_it/finanza_privatizzazioni/finanza_privatizzazioni/Libro_bianco_privatizzazioni_4603028-1-136.pdf
- Camera dei deputati, dossier "Le privatizzazioni" (XV legislatura, BI0145) — https://documenti.camera.it/leg15/dossier/testi/BI0145.htm
- Corte dei Conti, "Obiettivi e risultati delle operazioni di privatizzazione di partecipazioni pubbliche", relazione 12/2/2010 — https://corteconti.it (sintesi: https://www.uil.it/Documents/concorrenza2010.pdf)
- NENS, "La fine ingloriosa delle cartolarizzazioni immobiliari" (SCIP 1 e 2) — https://www.nens.it/archivio/la-fine-ingloriosa-delle-cartolarizzazioni-immobiliari
- MEF, comunicati sulle dismissioni 2015–2024 (ENEL 2015, Poste 2015, ENAV 2016, MPS 2023–24, ENI 2024) — https://www.mef.gov.it/ufficio-stampa/
- Area Studi Mediobanca, studio sul costo di Alitalia 1974–2014 (7,4 mld €) — via https://www.agi.it/fact-checking/alitalia_calenda_7_miliardi_e_mezzo_in_40_anni_studio_medio_banca-1716863/news/2017-04-26/ ; Il Sole 24 Ore, "Salvataggi Alitalia: allo Stato un conto da 8,6 miliardi"
- Banca d'Italia e MEF, documenti sulle crisi bancarie 2015–2017 (4 banche, venete, MPS) — https://www.bancaditalia.it/media/notizie/2017/crisi-banche-venete/index.html
- CDP, closing acquisto 88,06% ASPI (8,2 mld €, 2022) — https://cdp.it
- UPB, audizione NADEF 2023 (piano dismissioni ~1% PIL) — https://www.upbilancio.it/audizione-nellambito-dellesame-della-nadef-2023/
- Osservatorio CPI (Univ. Cattolica), "Le privatizzazioni del governo Meloni" — https://osservatoriocpi.unicatt.it/ocpi-pubblicazioni-le-privatizzazioni-del-governo-meloni
- Governo italiano / Corte dei Conti, stato di attuazione PNRR (rate incassate; Relazione semestrale maggio 2026) — https://www.governo.it ; https://www.corteconti.it
- ENEL, Snam, TIM/FiberCop: comunicati societari sulle operazioni citate (Terna a CDP 2005, IPO Snam 2001, closing NetCo 2024)
