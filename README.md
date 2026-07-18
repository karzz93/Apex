# Apexbook — Track Day Diary

Offline-first track-day diary for motorcycle riders. Lap times & consistency, bike setup, corner notes on real circuit maps, Track Memory, progress dashboards. All data stays on your device (IndexedDB) — no account, no server.

## Put it online with GitHub Pages

1. Create a new repository on GitHub (e.g. `apexbook`). Public is easiest for Pages.
2. Upload **all files in this folder** to the repository root:
   `index.html`, `sw.js`, `manifest.webmanifest`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `.nojekyll`
   (Repo page → *Add file → Upload files* → drag them in → *Commit changes*.)
3. Go to **Settings → Pages** → under *Build and deployment* choose **Deploy from a branch**, branch `main`, folder `/ (root)` → *Save*.
4. After a minute your app is live at
   `https://<your-username>.github.io/apexbook/`

## Install on Android

1. Open that URL in **Chrome** on your phone.
2. Tap the **⬇ Install app** chip in the top bar — or Chrome's menu (⋮) → **Add to Home screen → Install**.
3. Apexbook now opens full-screen from its own icon, works fully offline, and keeps your data on the phone.

Works the same in Edge/Samsung Internet, and on iPhone via Safari → Share → *Add to Home Screen*.

## Updating the app

When you upload a newer `index.html`, also bump the version string at the top of `sw.js` (e.g. `apexbook-v1.0.1`). Installed phones pick up the new version on their next online launch and reload automatically.

## Your data

- Everything is stored locally in the browser/app profile. Uninstalling the app or clearing site data deletes it — use **Settings → Full JSON backup** regularly.
- Backups restore on any device running Apexbook.

## Map data

Circuit centrelines: © OpenStreetMap contributors (ODbL), via the open *bacinger/f1-circuits* dataset, plus the TUM FTM racetrack-database (LGPL-3.0). Circuits without verified open geometry show "Track map not yet available" — import your own GeoJSON/GPX/KML/SVG per layout (a clean RaceChrono GPX lap works great).
