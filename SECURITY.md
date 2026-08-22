# Politica di sicurezza

## Che cos'è a rischio, qui

Questo è un **sito statico senza backend, senza database, senza autenticazione e
senza dipendenze di terze parti**: HTML, CSS e JavaScript serviti da GitHub Pages.
Non raccoglie dati personali, non usa cookie, non effettua chiamate di rete verso
domini esterni. La superficie di attacco è quindi minima, ma non nulla.

Sono considerate vulnerabilità:

- **XSS** — un percorso per cui un contenuto di `data.json` finisca interpretato come
  HTML anziché come testo. Il codice usa `textContent` proprio per evitarlo: una via
  che aggiri questa scelta è una segnalazione valida.
- **Compromissione della catena di pubblicazione** — un modo per alterare i file
  serviti da GitHub Pages, o per far accettare dati manipolati aggirando la CI.
- **Manipolazione dei dati** — l'inserimento deliberato di valori falsi o di fonti
  fabbricate. In un progetto documentale è l'equivalente di un exploit, e va
  segnalato come tale.

**Non** sono vulnerabilità: l'assenza di header di sicurezza configurabili solo lato
server (GitHub Pages non li espone), l'assenza di CSP su una pagina senza risorse
esterne, i risultati automatici di scanner senza uno scenario di sfruttamento
concreto.

## Come segnalare

Per una vulnerabilità **non** aprire una issue pubblica. Usa
**[Security → Report a vulnerability](https://github.com/saulusprime/AilatiditaliA/security/advisories/new)**,
il canale privato di GitHub per la segnalazione di vulnerabilità.

Nella segnalazione includi: descrizione, passi per riprodurre, impatto atteso e — se
lo hai — un suggerimento di correzione.

Per un **dato sbagliato in buona fede** la strada è invece quella normale e pubblica:
una [issue](https://github.com/saulusprime/AilatiditaliA/issues/new/choose) con il
modello *Segnalazione di un dato*.

## Tempi

Il progetto è mantenuto a tempo perso da una sola persona: non ci sono garanzie di
servizio. L'impegno è dare un primo riscontro entro **una settimana** e, per le
segnalazioni confermate, correggere prima di ogni divulgazione pubblica.

## Versioni supportate

Vale sempre e solo lo stato attuale del ramo `main`, che è ciò che GitHub Pages
pubblica. Le versioni precedenti dei dati restano consultabili nella cronologia git,
ma non ricevono correzioni retroattive: le correzioni sono documentate nel §10 della
ricerca e nel [CHANGELOG](CHANGELOG.md).
