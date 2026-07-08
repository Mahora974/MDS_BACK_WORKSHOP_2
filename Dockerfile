# syntax=docker/dockerfile:1.7

FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS deps
RUN npm ci

FROM deps AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start:dev"]

FROM deps AS build
ARG DATABASE_URL=postgresql://app_user:app_password@localhost:40421/app_db?schema=app
ENV DATABASE_URL=${DATABASE_URL}
COPY tsconfig*.json ./
COPY nest-cli.json ./
COPY prisma.config.ts ./
COPY prisma ./prisma
COPY src ./src
COPY test ./test
RUN npx prisma generate
RUN npm run build

FROM build AS prod-deps
ENV NODE_ENV=production
RUN npm prune --omit=dev

FROM node:20-alpine AS prod
WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/prisma.config.ts ./prisma.config.ts

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
