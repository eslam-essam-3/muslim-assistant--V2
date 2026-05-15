const cacheName = 'muslim-assistant-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './fajr.jpg',
  './dhuhr.jpg',
  './asr.jpg',
  './maghrib.jpg',
  './isha.jpg',
  './manifest.json'
];

// تثبيت ملفات الموقع في ذاكرة الموبايل
self.addEventListener('install', installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل الموقع حتى لو النت مقطوع
self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});