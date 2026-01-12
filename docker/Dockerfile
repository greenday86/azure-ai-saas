# ============================================
# Stage 1: Build
# ============================================
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci && npm cache clean --force

COPY . .
RUN npm run build
RUN test -f /app/dist/index.html

# ============================================
# Stage 2: Production
# ============================================
FROM nginx:1.25-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# non-root 런타임 경로를 /tmp로 통일
RUN mkdir -p /tmp/nginx \
 && chown -R nginx:nginx /tmp/nginx /usr/share/nginx/html /etc/nginx/conf.d \
 && (grep -q "^pid " /etc/nginx/nginx.conf && \
     sed -i 's|^pid .*;|pid /tmp/nginx.pid;|g' /etc/nginx/nginx.conf || \
     sed -i '1ipid /tmp/nginx.pid;' /etc/nginx/nginx.conf) \
 && printf "\nclient_body_temp_path /tmp/nginx/client_body;\nproxy_temp_path /tmp/nginx/proxy;\nfastcgi_temp_path /tmp/nginx/fastcgi;\nuwsgi_temp_path /tmp/nginx/uwsgi;\nscgi_temp_path /tmp/nginx/scgi;\n" \
    > /etc/nginx/conf.d/zz-temp-paths.conf \
 && find /usr/share/nginx/html -name "*.map" -delete

EXPOSE 80
USER nginx
CMD ["nginx", "-g", "daemon off;"]
