# Movies App

A modern web application for browsing and discovering movies, built with React, TypeScript, and Chakra UI.

## Demo

[Demo Link](https://movies.zackweng.com/)

## Tech Stack

- React 18
- TypeScript
- Vite
- Chakra UI
- SWR for data fetching
- TMDB API


## 系統需求

- Node.js >= 18
- pnpm
- TMDB API Key

## 安裝與執行

- 確保你的系統已安裝符合版本要求的 Node.js
```bash
node -v # 確認 Node.js 版本
```

- 安裝 pnpm（如果尚未安裝）
```bash
npm install -g pnpm
```

- 設置環境變量
```bash
# 複製環境變量範例文件
cp .env.example .env

# 編輯 .env 文件，填入你的 TMDB API Key
```

### 獲取 TMDB API Key

- 前往 [TMDB 官網](https://www.themoviedb.org/) 註冊帳號
- 登入後，前往 [API 設置頁面](https://www.themoviedb.org/settings/api)
- 點擊 "Request an API Key"
- 複製獲得的 API Key 到 `.env` 文件中

- 安裝專案依賴
```bash
pnpm install # 或使用簡寫 pnpm i
```

- 執行專案
```bash
pnpm dev    # 開發環境
pnpm build  # 建置生產環境
pnpm preview # 預覽生產環境
```

- 代碼規範
```bash
pnpm lint # 運行代碼檢查
```

## 專案結構

```
├── assets/           # 靜態資源
├── src/              # 源代碼目錄
│   ├── components/   # 共用元件
│   ├── constants/    # 常量定義
│   ├── hooks-api/    # API 相關的 SWR Hooks
│   ├── pages/        # 頁面元件
│   ├── types/        # TypeScript 型別定義
│   ├── utils/        # 工具函式
│   ├── App.tsx       # 主應用元件
│   └── main.tsx      # 應用入口
├── .env              # 環境變量配置
├── .env.example      # 環境變量範例
├── vite.config.ts    # Vite 配置
├── tsconfig.json     # TypeScript 配置
└── package.json      # 專案依賴和腳本
```

## 主要功能

- 電影列表瀏覽
- 電影詳情查看
- 搜索功能
- 響應式設計
- Light Mode and Dark mode


### Developed with [TMDB](https://www.themoviedb.org/) APIs.