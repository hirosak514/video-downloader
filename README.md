# 動画ダウンローダー (Video Downloader)

YouTube、Twitter、一般的なウェブサイトの動画をダウンロードできるウェブアプリケーション。Monetag広告統合機能付き。

## 🎯 機能

- **多サイト対応**: YouTube、Twitter、Facebook、Instagram、TikTok、その他多数のサイトに対応
- **高品質ダウンロード**: 複数の品質オプションから選択可能
- **モバイル対応**: スマートフォンでの写真アルバム保存機能（Web Share API）
- **広告統合**: Monetag広告ネットワーク統合による収益化
- **レスポンシブデザイン**: デスクトップ・モバイル両対応

## 🚀 技術スタック

### フロントエンド
- React 18 + TypeScript
- Vite (高速ビルドツール)
- Tailwind CSS + shadcn/ui
- Web Share API (モバイル対応)

### バックエンド
- FastAPI (Python)
- yt-dlp (動画ダウンロードライブラリ)
- Poetry (依存関係管理)

### 広告統合
- Monetag (旧PropellerAds) SDK
- React対応広告コンポーネント
- 環境変数による設定管理

## 📦 デプロイ

### Docker Compose (推奨)
```bash
docker-compose up -d
```

### 手動デプロイ
詳細は `SELF_HOSTING_GUIDE.md` を参照してください。

## 🔧 環境変数

### フロントエンド (.env)
```
VITE_API_URL=https://your-backend-url.com
VITE_MONETAG_ZONE_ID=your_zone_id_here
VITE_ENABLE_ADS=true
```

### バックエンド
```
PORT=8000
```

## 📱 使用方法

1. 動画URLを入力フィールドに貼り付け
2. 「動画を解析」ボタンをクリック
3. 品質を選択してダウンロード
4. モバイルの場合は「写真アプリに保存」でアルバムに直接保存

## 🎨 広告設定

Monetagアカウントを作成し、Zone IDを環境変数に設定することで広告を有効化できます。

## 📄 ライセンス

個人利用の範囲でご利用ください。著作権を尊重し、適切にご使用ください。

---

Link to Devin run: https://app.devin.ai/sessions/3d68dd71b4714a88bf5d0c76dade1dd9
Requested by: iromsa airi (dddddbbbbbrrrrr@gmail.com)
