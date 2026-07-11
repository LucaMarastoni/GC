# GC Finiture Edili

Sito vetrina statico per GC Finiture Edili, realizzato con React, Vite, JavaScript e CSS moderno. Il sito è pensato per GitHub Pages e punta alla generazione di contatti tramite chiamata, WhatsApp, email e indicazioni stradali.

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
https://username.github.io/gc-finiture-edili/
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

Telefono, WhatsApp, email e dominio sono volutamente impostati con valori temporanei nel file dati. Quando inseriti, tutte le CTA si aggiornano automaticamente.

## Logo e immagini

- Logo: sostituire `public/images/logo-gc-finiture-edili.png` con il logo ufficiale.
- Hero: `public/images/hero/finiture-edili-hero.webp`
- Placeholder galleria: `public/images/placeholders/`
- Fonti e note licenza: `IMAGE_SOURCES.md`

Le immagini della galleria sono placeholder tecnici e non indicano lavori reali eseguiti dall'impresa.

## SEO e dominio

Aggiornare prima della pubblicazione:

- `company.domain` in `src/data/company.js`
- `public/sitemap.xml`
- `public/robots.txt`
- canonical in `index.html` se si vuole avere anche un valore statico definitivo
- `public/site.webmanifest` se cambia sottopercorso o dominio

Il JSON-LD viene generato in `src/utils/seo.js` usando solo dati forniti.

## Privacy e cookie

Le pagine Privacy Policy e Cookie Policy sono bozze tecniche. Nella configurazione iniziale il sito non include analytics, pixel, iframe di Google Maps, video incorporati, form o cookie di profilazione.

## Checklist pre-pubblicazione

- Inserire numero di telefono e WhatsApp reali.
- Inserire email reale.
- Inserire dominio definitivo.
- Sostituire il logo placeholder con il logo ufficiale.
- Sostituire le immagini placeholder con fotografie autentiche.
- Inserire eventuali recensioni solo se verificabili.
- Verificare testi privacy e cookie.
- Aggiornare sitemap, robots, canonical e manifest.
- Eseguire `npm run build`.
- Testare il sito a 320, 360, 375, 390, 430, 768, 1024, 1280 e 1440 px.
