const CACHE_NAME = 'marathon-miami-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/marathon-image.jpg',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

## 🎨 Archivos de imagen que necesitas crear

1. **marathon-image.jpg** - Tu imagen principal (usa el prompt que te daré abajo)
2. **icon-192.png** - Ícono de 192x192px para la app
3. **icon-512.png** - Ícono de 512x512px para la app

---

## 🤖 PROMPTS para NanoBanana/Gemini

### **Para la imagen principal (marathon-image.jpg):**
```
Crea una imagen motivacional de maratón en estilo fotográfico profesional. 
Muestra a un corredor masculino atlético en posición de arranque en una 
carrera de maratón, con expresión facial de determinación y concentración 
intensa, mirando hacia adelante con los ojos enfocados en el desafío. 
El corredor está en la línea de salida, cuerpo ligeramente inclinado hacia 
adelante en posición de sprint inicial. Ambiente de madrugada con luz 
amanecer dorada. Al fondo se ve el skyline de Miami con palmeras y 
edificios modernos. Colores vibrantes: azules del océano, naranjas del 
amanecer, y el logo del "Miami Marathon" visible en su playera de running. 
Composición cinematográfica, alta calidad, foto estilo deportivo profesional.
Relación de aspecto 16:9 (1200x675px ideal).
```

### **Para los íconos de la app (icon-192.png y icon-512.png):**
```
Diseña un ícono de aplicación móvil para una app de maratón. Fondo degradado 
de azul oscuro a azul cyan vibrante. En el centro, una silueta minimalista 
de un corredor en movimiento en color blanco. Alrededor, un círculo con 
efecto de cronómetro o velocímetro. Estilo moderno, limpio, flat design. 
El ícono debe verse bien en tamaños pequeños. Formato cuadrado, colores: 
azul #1e3a8a, cyan #0891b2, blanco #ffffff.
