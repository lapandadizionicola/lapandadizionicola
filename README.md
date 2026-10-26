# La Panda di Zio Nicola – Sito web

Sito multi-pagina per la pagina TikTok **@lapandadizionicola**.

## Struttura

```
lapanda-site/
├── index.html          ← Home + profilo TikTok integrato
├── bio.html            ← Storia e bio
├── modifiche.html      ← Pezzi e modifiche
├── contatti.html       ← Contatti + Microsoft Forms + FAQ
├── css/
│   └── style.css       ← Tutto lo stile (separato)
├── img/                ← Metti qui foto e logo
└── README.md
```

## Come visualizzarlo

Apri semplicemente `index.html` con il browser (doppio click) oppure usa un server locale:

```bash
# Dalla cartella del sito
python3 -m http.server 8000
# poi vai su http://localhost:8000
```

## Video TikTok

La home carica il profilo creator ufficiale `@lapandadizionicola` solo quando si preme **Carica i video**, così TikTok non rallenta la pagina a ogni visita. Il pulsante per aprire direttamente il profilo resta disponibile anche senza caricare l'embed.

Per cambiare profilo, aggiorna in `index.html` l'URL del `blockquote` (`cite`), l'attributo `data-unique-id` e i link al profilo.

## Messaggi e foglio Excel

Una pagina statica non può scrivere in un file Excel senza un servizio collegato. La soluzione scelta è incorporare un Microsoft Forms pubblico con i campi Nome, Email e Messaggio. In Forms crea il modulo, apri **Raccogli risposte → Incorpora** e copia l'URL del modulo per inserirlo in `contatti.html`. Dalla scheda **Risposte → Apri risultati in Excel** puoi consultare il workbook collegato su OneDrive e le nuove risposte. Non inserire password, token o link privati di Power Automate nel codice pubblico.

## Come aggiungere una modifica

In `modifiche.html` duplica un blocco `<article class="mod-card">…</article>`, cambia:

- emoji (o metti una foto vera in `img/`)
- titolo
- descrizione
- tag (`estetica`, `performance`, `offroad`, `comfort`)

## Personalizzazioni rapide

- **Colori**: modifica le variabili CSS in cima a `css/style.css` (`--accent`, `--black`, ecc.)
- **Testo bio**: modifica liberamente i paragrafi in `bio.html`
- **Modulo Excel**: crea un Microsoft Form con Nome, Email e Messaggio, attiva il workbook da **Risposte → Apri risultati in Excel** e inserisci sul sito il link di condivisione/incorporamento del modulo.

## Note

- Design responsive (mobile-first)
- HTML e CSS completamente separati
- Nessun framework esterno obbligatorio
- Menu hamburger automatico su schermi piccoli
