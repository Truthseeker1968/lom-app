/* Service worker for LØM Læringsapp — gjør appen installerbar og brukbar uten nett.
   Versjonsstrengen under settes av bygg.py; ny versjon = ny cache, gammel slettes.
   Strategi: samme opphav hentes fra nettet først (så oppdateringer kommer med én gang)
   og lagres i cache; uten nett brukes siste lagrede kopi. Pensumfilene (pensum/…) lagres
   når de åpnes, så en åpnet PDF finnes også uten nett. Kall til andre domener
   (bruksstatistikk) går rett gjennom. */
const VERSJON = "2.0.1-24.-september-2026";
const CACHE = "lom-app-" + VERSJON;
const FORHAAND = ["./", "./index.html", "./manifest.webmanifest", "./ikon-192.png", "./ikon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FORHAAND).catch(() => {})).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((n) => Promise.all(n.filter((k) => k.startsWith("lom-app-") && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then((svar) => {
      if (svar && svar.ok) { const kopi = svar.clone(); caches.open(CACHE).then((c) => c.put(e.request, kopi)).catch(() => {}); }
      return svar;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then((c) => c || (e.request.mode === "navigate" ? caches.match("./index.html") : undefined)))
  );
});
