# IngleX

Juego educativo de inglés de ÓrbitaKidx para 1.º a 4.º de Primaria, con especial profundidad en 3.º y 4.º.

Incluye vocabulario con pronunciación, comprensión oral, parejas, frases, pequeñas lecturas, 100 miniaventuras conversacionales, exámenes, medallas y progreso local. No requiere cuenta, no usa micrófono y no incluye publicidad.

## Desarrollo

```bash
npm ci
npm run build:web
npm run android:sync
```

Los recursos de Google Play se generan con `npm run store:assets` y `npm run store:screenshots`. Los iconos Android se regeneran con `npm run android:assets`.
