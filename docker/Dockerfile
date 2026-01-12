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
# nginx.conf는 ConfigMap으로 관리하므로 여기서는 복사하지 않음
# COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# non-root 런타임 경로를 /tmp로 통일
# nginx.conf는 ConfigMap으로 마운트되므로, 여기서는 기본 설정만 준비
RUN chown -R nginx:nginx /usr/share/nginx/html \
 && find /usr/share/nginx/html -name "*.map" -delete

EXPOSE 8080
USER nginx
CMD ["nginx", "-g", "daemon off;"]
