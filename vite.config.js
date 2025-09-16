import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import'

export default defineConfig({
  server: {
    open: true,           // 自動でブラウザを開く
  },
  build: {
    outDir: 'dist/recruit'  // ビルド出力ディレクトリを変更
  },
  plugins: [sassGlobImports()], // Sassファイルをglobパターン（ワイルドカード）でまとめてインポートできるようにする
})