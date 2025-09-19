import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import siteConfig from './src/config/site.js'
import devConfig from './src/config/development.js'
import stagingConfig from './src/config/staging.js'
import prodConfig from './src/config/production.js'
import pageConfig from './src/config/pages.js'

export default defineConfig(({ mode }) => {
  // 環境に応じて設定を選択
  let envConfig
  switch(mode) {
    case 'production':
      envConfig = prodConfig
      break
    case 'staging':
      envConfig = stagingConfig
      break
    default:
      envConfig = devConfig
  }
  const config = { ...siteConfig, ...envConfig, pageConfig }
  
  return {
    server: {
      open: true,           // 自動でブラウザを開く
    },
    build: {
      outDir: 'dist',  // ビルド出力ディレクトリをルートに変更
      rollupOptions: {
        input: {
          main: 'src/index.html',
          top: 'src/pages/top.ejs',
          about: 'src/pages/about.ejs'
        }
      }
    },
    root: 'src',  // ルートディレクトリをsrcに変更
    assetsInclude: ['**/*.ejs'],  // EJSファイルをアセットとして扱う
    plugins: [
      ViteEjsPlugin(config), // 環境別設定を読み込み
      sassGlobImports() // Sassファイルをglobパターン（ワイルドカード）でまとめてインポートできるようにする
    ],
  }
})