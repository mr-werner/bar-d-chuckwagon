# Bar D Chuckwagon Suppers — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://bardchuckwagon.com/ (Durango, CO).
Preview: https://bdc.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `bar-d-chuckwagon` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `bdc.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (all optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Motif: a twisted lariat (from the rope lettering in their logo) as section dividers, plank-wood background like their current header, ticket-stub price cards, a tin-plate supper photo and tilted snapshot cards for the activities.
- Rye (old west poster type) with Zilla Slab and Source Sans 3; their logo red and rope yellow on wood, with saddle brown and a ponderosa green.
- Playbill hero: "Old West Cowboy Music Show & Chuckwagon Supper" over a rope-framed stage photo, with the evening's schedule (4:30 / 6:30 / show) and the season line right under it.
- Section order follows a night at the Bar D: the evening timeline, tickets, the Wranglers (lineup and the Charlie Daniels quote from their history page), supper and ingredients, activities, groups and gift certificates, then the map.
- Reservations go to their existing booking page (reservations.bardchuckwagon.com); gift certificates go to their existing PayPal page.

## What changed from the current site

- Prices, times, season and phone are on the homepage; the current homepage has no prices or reservation button above the fold.
- Removes the stale 2023 concert page (Jerry Douglas, June 19, 2023, still listed as "upcoming") and the "nearly 50 years" line on the history page (it has been 57 years since 1969).
- Fixes the conflicting child price ($19 in the ticket table, $21 in the list below it) by showing one number.
- Drops the references to retired googlecode.com scripts (html5shim, css3-mediaqueries) still in the current page code.

## Owner should confirm

- Child ticket price: the concept shows $21; the ticket page shows both $19 and $21. All prices should be confirmed for 2027.
- The reservation link (https://reservations.bardchuckwagon.com/bard/res2020.php) is the one on the current tickets page; it failed certificate checks from our test network, so confirm it still works and whether a 2027 URL replaces it.
- Wranglers lineup (Matt Palmer, Jeff Johnson, Hayley Victor, Gary Cook, Joel Racheff) is from the current show page; the page also has photos named for "David".
- Whether to bring back special-guest concerts, and which email to publish (info@ from the site's structured data, groups@ for Krystal).
- The Charlie Daniels quote is copied word for word from the history page; confirm permission to feature it. No awards, badges or customer reviews appear on the current site, so none are shown.
- Photos and the logo are hotlinked from bardchuckwagon.com and must be replaced with licensed originals before launch.
