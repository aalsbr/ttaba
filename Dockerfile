# syntax=docker/dockerfile:1

# ---------- Stage 1: build the static site ----------
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies (cached unless lockfile/package.json change)
COPY package.json package-lock.json* ./
RUN npm install

# Build → Next.js static export lands in /app/out
COPY . .
RUN npm run build

# ---------- Stage 2: serve with nginx ----------
FROM nginx:1.27-alpine AS runner

# SPA/static-friendly nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the exported static site
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -q --spider http://127.0.0.1:80/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
