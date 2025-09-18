import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import'
import { ViteEjsPlugin } from 'vite-plugin-ejs'

export default defineConfig({
  server: {
    open: true,           // 自動でブラウザを開く
  },
  build: {
    outDir: 'dist'  // ビルド出力ディレクトリをルートに変更
  },
  root: 'src',  // ルートディレクトリをsrcに変更
  assetsInclude: ['**/*.ejs'],  // EJSファイルをアセットとして扱う
  plugins: [
    ViteEjsPlugin({
      title: 'ホーム - サイトタイトル',
      description: 'サイトのメインページです',
      // グローバル変数
    }), // EJSファイルを使用できるようにする
    sassGlobImports() // Sassファイルをglobパターン（ワイルドカード）でまとめてインポートできるようにする
  ],
})