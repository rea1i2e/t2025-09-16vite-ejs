import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import siteConfig from './src/config/site.js'
import devConfig from './src/config/development.js'
import prodConfig from './src/config/production.js'

export default defineConfig(({ mode }) => {
  // 環境に応じて設定を選択
  const envConfig = mode === 'production' ? prodConfig : devConfig
  const config = { ...siteConfig, ...envConfig }
  
  return {
    server: {
      open: true,           // 自動でブラウザを開く
    },
    build: {
      outDir: 'dist'  // ビルド出力ディレクトリをルートに変更
    },
    root: 'src',  // ルートディレクトリをsrcに変更
    assetsInclude: ['**/*.ejs'],  // EJSファイルをアセットとして扱う
    plugins: [
      ViteEjsPlugin(config), // 環境別設定を読み込み
      sassGlobImports() // Sassファイルをglobパターン（ワイルドカード）でまとめてインポートできるようにする
    ],
  }
})