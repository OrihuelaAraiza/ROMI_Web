# Instrucciones para Probar Localmente

## Pasos para Iniciar el Servidor

1. **Limpiar cache (si hay problemas):**
   ```bash
   cd romi-web-frontend
   rm -rf .next
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Esperar a que compile:**
   - Deberías ver: `▲ Next.js 14.x.x`
   - Y: `- Local: http://localhost:3000`
   - Espera hasta que diga "Ready" o "Compiled successfully"

## Probar las Rutas Legacy

Una vez que el servidor esté corriendo, prueba estas URLs en tu navegador:

### Rutas sin slash (deben redirigir):
- `http://localhost:3000/Edu` → Debe redirigir a `/Edu/index.html`
- `http://localhost:3000/efysia` → Debe redirigir a `/efysia/index.html`
- `http://localhost:3000/NutriSnap` → Debe redirigir a `/NutriSnap/index.html`
- `http://localhost:3000/OncoPro` → Debe redirigir a `/OncoPro/index.html`
- `http://localhost:3000/RejuvIA` → Debe redirigir a `/RejuvIA/index.html`
- `http://localhost:3000/ROMIMED` → Debe redirigir a `/ROMIMED/index.html`

### Rutas con slash (deben cargar directamente):
- `http://localhost:3000/Edu/` → Debe cargar el HTML directamente
- `http://localhost:3000/efysia/` → Debe cargar el HTML directamente
- etc.

### Rutas directas a index.html (también deberían funcionar):
- `http://localhost:3000/Edu/index.html`
- `http://localhost:3000/efysia/index.html`
- etc.

## Solución de Problemas

### Si ves "ERR_TOO_MANY_REDIRECTS":

1. **Detén el servidor completamente:**
   ```bash
   # Presiona Ctrl+C en la terminal donde corre el servidor
   # O ejecuta:
   pkill -f "next dev"
   ```

2. **Limpia el cache:**
   ```bash
   rm -rf .next
   ```

3. **Reinicia el servidor:**
   ```bash
   npm run dev
   ```

### Si el servidor no inicia:

1. **Verifica que no haya otro proceso usando el puerto 3000:**
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **O usa otro puerto:**
   ```bash
   PORT=3001 npm run dev
   ```

### Si las rutas no cargan correctamente:

1. **Verifica que los archivos existan:**
   ```bash
   ls -la public/Edu/
   ls -la public/efysia/
   # etc.
   ```

2. **Verifica la configuración:**
   ```bash
   cat next.config.mjs
   ```

3. **Ejecuta el script de verificación:**
   ```bash
   npm run verify-legacy
   ```

## Verificar en DevTools

1. Abre las DevTools (F12)
2. Ve a la pestaña **Network**
3. Marca **"Preserve log"**
4. Navega a `http://localhost:3000/Edu`
5. Deberías ver:
   - Primera petición: `/Edu` → Status **301** (Redirect)
   - Segunda petición: `/Edu/index.html` → Status **200** (OK)

## Comandos Útiles

```bash
# Iniciar servidor
npm run dev

# Verificar archivos legacy
npm run verify-legacy

# Probar redirects (en otra terminal con el servidor corriendo)
npm run test-legacy

# Limpiar cache
rm -rf .next

# Ver logs del servidor
# (solo necesitas mirar la terminal donde corre npm run dev)
```

## Estado Actual de la Configuración

**Configuración aplicada:**
- ✅ `trailingSlash: false` (default de Next.js)
- ✅ Redirects de `/Edu` → `/Edu/index.html` (evita loops)
- ✅ Middleware excluye rutas legacy
- ✅ Archivos estáticos en `public/` se sirven directamente

**Nota importante:**
- Las rutas sin slash redirigen a `/Edu/index.html` (no a `/Edu/`)
- Las rutas con slash (`/Edu/`) cargan directamente sin redirect
- Esto evita loops infinitos pero la URL puede mostrar `index.html`

Si necesitas que la URL sea exactamente `/Edu/` sin mostrar `index.html`, será necesario un enfoque más avanzado con middleware personalizado o configuración específica en Vercel.

