import { defineConfig } from 'vite'
import sassGlobImports from 'vite-plugin-sass-glob-import'
import { ViteEjsPlugin } from 'vite-plugin-ejs'
import siteConfig from './src/config/site.js'
import { environments } from './src/config/environments.js'
import pageConfig from './src/config/pages.js'

export default defineConfig(({ mode }) => {
  // 環境に応じて設定を選択（デフォルトはdevelopment）
  const envConfig = environments[mode] || environments.development
  
  // タイトルを自動生成
  const title = envConfig.environmentPrefix 
    ? `${envConfig.environmentPrefix}${siteConfig.baseTitle}`
    : siteConfig.baseTitle
  
  const config = { 
    ...siteConfig, 
    ...envConfig, 
    pageConfig,
    title  // 自動生成されたタイトルを追加
  }
  
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