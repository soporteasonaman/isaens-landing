# ISAENS Landing — Contexto del Proyecto

## Descripción
Landing page estática de ISAENS (legal-tech, servicios de confianza digital).
Producto principal: **V.O.L.** (Validador On Line de firmas electrónicas) — gratuito, sin registro.

## Stack
- HTML + Tailwind CSS CDN + vanilla JS (sin build step)
- Docker: `nginx:alpine` sirviendo estáticos
- CI/CD: GitHub Actions → GHCR → Portainer

## Archivos clave
- `index.html` — toda la landing (único archivo de contenido)
- `Dockerfile` — imagen nginx:alpine
- `nginx.conf` — config del contenedor (sirve estáticos en puerto 80)
- `docker-compose.yml` — stack Portainer, red externa `isaens-public`
- `.github/workflows/docker-publish.yml` — build & push a GHCR en cada push a `main`

## Despliegue
- Imagen: `ghcr.io/soporteasonaman/isaens-landing:latest`
- Servidor: `188.165.194.175` (OVH)
- Dominio: `https://isaens.com` y `www.isaens.com`
- Proxy inverso: contenedor `isaens_nginx_prod`, config en `/data/compose/94/nginx/nginx.conf`
- Red Docker compartida: `isaens-public`
- Tras push a main → Actions construye imagen → actualizar stack en Portainer

## Colores corporativos
- Teal principal: `#77beb8`
- Navy: `#1a3a5c`
- Fondo alterno: `#f7f9fc`
- Fondo teal claro: `#f0fafa`

## Estructura de la landing (secciones en orden)
1. **Hero** — tagline gratuito, H1, subtítulo, 2 botones CTA
2. **El desafío** — header + bloque imagen/texto con las 3 preguntas V.O.L.
3. **Nuestra Herramienta** — descripción V.O.L., 4 ventajas, botón "Empezar a Validar Gratis"
4. **Cómo funciona** — 3 pasos
5. **Tu Confianza** — stats, garantías, bloque tecnología europea, bloque DPO/AEPD/KIWA
6. **Quiénes somos** — misión, bloque imagen/texto
7. **FAQ** — "Resolvemos tus Dudas", 3 preguntas
8. **Footer** — contacto, servicios, legal

## Contacto/Footer
- Email: info@isaens.com
- Teléfono: 800 808 111
- Dirección: C/ Vicente Fuentes Sansano, nº37 A, C.P 03205 Elche - Alicante
- Legal: Aviso Legal y Condiciones de Uso | Política de Privacidad | Política de Cookies

## Notas importantes
- NO mencionar "DSS" ni "Digital Signature Services" directamente → usar "librería oficial de software para firmas electrónicas desarrollada y mantenida por la Comisión Europea"
- NO incluir referencias a Sellos de Tiempo en esta landing (tienen su propio sitio en ts.isaens.com)
- El V.O.L. está en vol.isaens.com

## Instrucciones de trabajo
- Usar `grep` para buscar en index.html en lugar de leerlo completo
- Usar subagentes para tareas de exploración o investigación; informar al usuario cuando se lance uno
- Objetivo: bajo consumo de tokens

No pongas nunca el coauthored.
