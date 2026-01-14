FROM node:22-alpine

WORKDIR /app

# 🔥 Increase Node heap to 4GB
ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "preview"]
