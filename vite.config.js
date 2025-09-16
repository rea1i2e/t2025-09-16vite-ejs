import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,           // 自動でブラウザを開く
  },
  build: {
    outDir: 'dist/recruit'  // ビルド出力ディレクトリを変更
  }
})