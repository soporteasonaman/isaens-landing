# ── Imagen base: nginx alpine (muy ligera, ~8 MB) ──────────────────────────
FROM nginx:alpine

# Eliminar el contenido por defecto de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar todos los archivos de la landing al directorio público de nginx
COPY . /usr/share/nginx/html/

# Copiar la configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# nginx arranca automáticamente con la imagen base
CMD ["nginx", "-g", "daemon off;"]
