/* Apexbook service worker — bump VERSION when you upload a new build */
const VERSION = "apexbook-v1.1.1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // never intercept cross-origin

  // Navigations: serve cached shell first so the app opens with no network
  if (req.mode === "navigate") {
    e.respondWith(
      caches.match("./index.html").then(hit =>
        hit ||
        fetch(req).then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put("./index.html", copy));
          return res;
        })
      )
    );
    return;
  }

  // Everything else: cache-first, then network (and cache the result)
  e.respondWith(
    caches.match(req).then(hit =>
      hit ||
      fetch(req).then(res => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put(req, copy));
        }
        return res;
      })
    )
  );
});
