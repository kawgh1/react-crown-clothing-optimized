// CACHE is the name for browser storage
const CACHE_NAME = "crown-clothing-cache-version-1";
const urlsToCache = [
    "index.html",
    "offline.html",
    "favicon.ico",
    "android-chrome-192x192.png",
    "android-chrome-256x256.png",
    "android-chrome-512x512.png",
];

// this represents the serviceworker itself
const self = this;

// Install SW
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("Opened cache");

            return cache.addAll(urlsToCache);
        })
    );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
    event.respondWith(
        // this means for every fetch request (ie API weather data fetch) we want to return
        // a new fetch every time, we don't want to store the fetch data
        // then, if the fetch fails, (if we are offline) we want to return the cache for offline.html
        caches.match(event.request).then(() => {
            return fetch(event.request).catch(() =>
                caches.match("offline.html")
            );
        })
    );
});

// Activate the SW
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    // this code means, whenever we update the cache with a new request,
    // if the new cache name from the request is not our initial CACHE_NAME,
    // then we want to delete that from the cacheWhiteList - we only want one cache,
    // not a new cache for every request
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            )
        )
    );
});
