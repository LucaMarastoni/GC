# GC Finiture Edili

Sito vetrina statico per GC Finiture Edili, realizzato con React, Vite, JavaScript e CSS moderno. Il sito è pensato per GitHub Pages e punta alla generazione di contatti tramite chiamata, WhatsApp e indicazioni stradali.

## Requisiti

- Node.js 20 o superiore
- npm

## Installazione

```bash
npm install
```

## Avvio locale

```bash
npm run dev 
```

## Build

```bash
npm run build
```

## Deploy su GitHub Pages

Il progetto è configurato per un repository pubblicato nel sottopercorso:

```text
https://lucamarastoni.github.io/GC/
```

Per pubblicare:

```bash
npm run deploy
```

Se il nome del repository è diverso, modifica `VITE_BASE_PATH` durante la build:

```bash
VITE_BASE_PATH=/nome-repository/ npm run build
```

Per dominio personalizzato o pubblicazione alla root:

```bash
VITE_BASE_PATH=/ npm run build
```

## Configurazione contenuti

- Dati aziendali e contatti: `src/data/company.js`
- Servizi: `src/data/services.js`
- Galleria lavorazioni: `src/data/projects.js`
- Recensioni: `src/data/reviews.js`
- Testi privacy e cookie: `src/pages/PrivacyPage.jsx` e `src/pages/CookiePage.jsx`

Telefono, WhatsApp e dominio pubblico sono impostati in `src/data/company.js`. Le CTA usano automaticamente i dati presenti nel file.

## Logo e immagini

- Logo: `public/images/logo-gc-finiture-edili.png`
- Foto reali del sito: `public/images/photos/`
- Riferimenti immagini: `src/data/heroSlides.js`, `src/data/projects.js`, `src/components/About.jsx`

Le immagini pubblicate nella home e nella galleria lavori usano le foto caricate in `public/images/photos/`.

## SEO e dominio

Il dominio pubblico è configurato per GitHub Pages in `src/data/company.js`, `public/sitemap.xml`, `public/robots.txt`, `index.html` e `public/site.webmanifest`. Il JSON-LD viene generato in `src/utils/seo.js` usando i dati aziendali.

## Privacy e cookie

Le pagine Privacy Policy e Cookie Policy descrivono lo stato del sito in produzione: niente analytics, pixel pubblicitari, mappe o video incorporati, form, account o cookie di profilazione.

## Manutenzione

- Eseguire `npm run build`.
- Testare il sito a 320, 360, 375, 390, 430, 768, 1024, 1280 e 1440 px.
- Se vengono aggiunti analytics, pixel, mappe, video incorporati, chat esterne o altri strumenti di tracciamento, aggiornare Privacy Policy, Cookie Policy e gestione del consenso prima di attivarli.
