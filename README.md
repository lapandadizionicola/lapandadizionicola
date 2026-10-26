# La Panda di Zio Nicola – Sito web

Sito multi-pagina per la pagina TikTok **@lapandadizionicola**.

## Struttura

```
lapanda-site/
├── index.html          ← Home + profilo TikTok integrato
├── bio.html            ← Storia e bio
├── modifiche.html      ← Pezzi e modifiche
├── contatti.html       ← Contatti + form + FAQ
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

La home incorpora il profilo creator ufficiale `@lapandadizionicola`: non servono gli ID dei singoli video e i contenuti sono gestiti direttamente da TikTok. Se TikTok non carica l’embed, il pulsante **Segui @lapandadizionicola** apre comunque il profilo.

Per cambiare profilo, aggiorna in `index.html` l’URL del `blockquote` (`cite`), l’attributo `data-unique-id` e i link al profilo. Mantieni lo script `https://www.tiktok.com/embed.js` una sola volta nella pagina.

## Come aggiungere una modifica

In `modifiche.html` duplica un blocco `<article class="mod-card">…</article>`, cambia:

- emoji (o metti una foto vera in `img/`)
- titolo
- descrizione
- tag (`estetica`, `performance`, `offroad`, `comfort`)

## Personalizzazioni rapide

- **Colori**: modifica le variabili CSS in cima a `css/style.css` (`--accent`, `--black`, ecc.)
- **Testo bio**: modifica liberamente i paragrafi in `bio.html`
- **Form contatti**: per farlo funzionare davvero collega Formspree, Netlify Forms o un backend

## Note

- Design responsive (mobile-first)
- HTML e CSS completamente separati
- Nessun framework esterno obbligatorio
- Menu hamburger automatico su schermi piccoli
