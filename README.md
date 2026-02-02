# SEVEN INK. TATTOO SOCIETY – Site web

Site multi-pagină Next.js pentru salonul de tatuaje **SEVEN INK. TATTOO SOCIETY** (București, Lipscani 43).

## Stack

- **Next.js 14** (App Router) – routing, RSC, SEO
- **React 18** – UI
- **TypeScript** – tipizare
- **Tailwind CSS** – stiluri (paletă brand: negru, verde, auriu, roz subtil)
- **Framer Motion** – animații și micro-interacțiuni

**De ce App Router:** layout-uri nested, metadata per pagină, streaming, generare statică pentru servicii. Ideal pentru site-uri multi-pagină cu conținut semi-static.

## Structură pagini (routing)

| Rută | Pagină |
|------|--------|
| `/` | Acasă (hero + secțiuni) |
| `/despre-noi` | Despre noi (misiune, viziune, echipă) |
| `/servicii` | Listă servicii |
| `/servicii/[slug]` | Pagină serviciu (tatuaje custom, cover-up, piercing) |
| `/galerie` | Galerie (layout asimetric) |
| `/contact` | Contact (formular + date + Google Maps) |
| `/legal/privacy` | Politica de confidențialitate |
| `/legal/terms` | Termeni și condiții |

**SEO:** `app/sitemap.ts` și `app/robots.ts` generează `sitemap.xml` și `robots.txt`. Setează `NEXT_PUBLIC_SITE_URL` pentru domeniul live.

---

## Comenzi (copy–paste)

```bash
# 1. Instalare dependențe
npm install

# 2. Development (localhost:3000)
npm run dev

# 3. Build pentru producție
npm run build

# 4. Rulare build (după npm run build)
npm start

# 5. Lint
npm run lint
```

---

## TO-DO list – Verificare post-generare

- [ ] **Dependențe** – Rulează `npm install` în rădăcina proiectului.
- [ ] **Dev** – Rulează `npm run dev`, deschide `http://localhost:3000` și verifică toate paginile.
- [ ] **Navigare** – Click pe fiecare link din header/footer: Acasă, Despre noi, Servicii, Galerie, Contact; din Servicii intră pe fiecare serviciu; din footer verifică Privacy și Terms.
- [ ] **Contact** – Completează formularul de contact și verifică mesajul de succes (acum e simulare; pentru producție conectează un backend sau Formspree/Netlify Forms).
- [ ] **Hartă** – Verifică că iframe-ul Google Maps se încarcă corect pe pagina Contact.
- [ ] **Responsive** – Verifică pe mobil/tablet: meniu hamburger, texte, butoane, formular.
- [ ] **Accesibilitate** – Tab prin pagină: Skip to content, linkuri, butoane, formular; verifică focus-ul vizibil (ring auriu).
- [ ] **SEO** – După deploy: setează `NEXT_PUBLIC_SITE_URL` la URL-ul real; verifică `/sitemap.xml` și `/robots.txt`.
- [ ] **Conținut** – Înlocuiește textele placeholder (ex. descrieri servicii, despre noi) cu conținutul final; adaugă imagini reale în Galerie (sau conectează CMS).
- [ ] **Formular contact** – Conectează la un serviciu real (email, API sau form provider) și testeză trimiterea.
- [ ] **Build producție** – Rulează `npm run build` și remediază eventualele erori; apoi `npm start` pentru test local al build-ului.

---

## Variabile de mediu (opțional)

| Variabilă | Descriere |
|-----------|-----------|
| `NEXT_PUBLIC_SITE_URL` | URL-ul public al site-ului (ex. `https://www.sevenink.ro`). Folosit în sitemap și robots. |

---

## Design

- **Paletă:** negru (#0a0a0a), charcoal, verde (tonuri din peretele verde din brand), auriu (#c9a227) pentru CTA, roz subtil (#e8b4b8) pentru highlight.
- **Tipografie:** Bebas Neue (display/titluri), DM Sans (body).
- **Principii:** asimetrie controlată, secțiuni cu identitate vizuală proprie, depth (overlap, blur, transparențe), CTA clar în hero, fără grile egale peste tot.

---

© SEVEN INK. TATTOO SOCIETY
