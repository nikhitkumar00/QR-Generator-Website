self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open("qr-generator-cache").then(function (cache) {
			return cache.addAll([
				"/",
				"/index.html",
				"/index.css",
				"/favicon.ico",
				"/android-chrome-192x192.png",
				"/android-chrome-512x512.png",
				"/index.js",
				"/manifest.json",
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
