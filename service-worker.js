self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open("qr-generator-cache").then(function (cache) {
			return cache.addAll([
				"/",
				"/index.html",
				"/index.css",
				"/assets/favicon.ico",
				"/assets/icon-192x192.png",
				"/assets/icon-512x512.png",
				"/index.js",
				"/site.webmanifest",
			]);
		})
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
