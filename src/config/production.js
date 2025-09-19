// 本番環境用設定
export const prodConfig = {
  title: 'ホーム - サイトタイトル',
  description: 'サイトのメインページです',
  debug: false,
  apiUrl: 'https://api.example.com',
  
  // 本番環境特有の設定
  hotReload: false,
  sourceMap: false,
  consoleLog: false,
  
  // 本番環境の最適化設定
  minify: true,
  compress: true
}

export default prodConfig
