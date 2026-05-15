const cacheName = 'muslim-assistant-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './fajr.jpg',
  './dhuhr.jpg',
  './asr.jpg',
  './maghrib.jpg',
  './isha.jpg'
];

// تثبيت الملفات في ذاكرة الموبايل
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل الموقع من الذاكرة لو النت مقطوع
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});