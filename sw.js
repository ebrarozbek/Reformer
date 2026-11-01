// Offline support: the app files are stored on the device the first time the app opens.
// When you upload a new version, change VERSION so phones fetch the new files.
const VERSION = "reformer-v1";
const FILES = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "lib/three.min.js",
  "fonts/fonts.css",
  "fonts/f0.woff2", "fonts/f1.woff2", "fonts/f2.woff2", "fonts/f3.woff2", "fonts/f4.woff2",
  "fonts/f5.woff2", "fonts/f6.woff2", "fonts/f7.woff2", "fonts/f8.woff2", "fonts/f9.woff2",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// App files come from the device first, so the app opens without internet.
// Pages opened from links in the app (photos and video tutorials) still need internet.
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    event.respondWith(caches.match("index.html").then(hit => hit || fetch(req)));
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }))
  );
});
