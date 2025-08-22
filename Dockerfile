# ビルドステージ
FROM node:18-alpine as build

WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm ci --only=production

# ソースコードをコピー
COPY . .

# 環境変数を設定
ARG VITE_API_URL=http://localhost:8000
ENV VITE_API_URL=$VITE_API_URL

# アプリケーションをビルド
RUN npm run build

# 本番ステージ
FROM nginx:alpine

# ビルドされたファイルをコピー
COPY --from=build /app/dist /usr/share/nginx/html

# Nginxの設定をコピー
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
