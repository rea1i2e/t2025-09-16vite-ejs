/**
 * environments.js - 環境別設定統合ファイル
 * 
 * 【ファイルの役割】
 * 開発・ステージング・本番の全環境設定を1つのファイルで管理します。
 * 環境ごとの設定をオブジェクトで定義し、環境名でアクセスします。
 * 
 * 【設定構造】
 * - development: ローカル開発環境
 * - staging: ステージング環境（テスト用）
 * - production: 本番環境
 * 
 * 【使用方法】
 * 1. vite.config.js で環境名を指定して設定を取得
 * 2. 新しい環境を追加する場合は、このファイルに設定を追加
 * 3. 環境固有の設定のみを各環境オブジェクトに記述
 */
export const environments = {
  development: {
    // 環境固有設定
    environment: 'development',
    environmentPrefix: '【開発】',
    debug: true,
    
    // 開発環境特有の設定
    hotReload: true,
    sourceMap: true,
    consoleLog: true
  },
  
  staging: {
    // 環境固有設定
    environment: 'staging',
    environmentPrefix: '【テスト】',
    debug: true,
    
    // ステージング環境特有の設定
    hotReload: false,  // ビルド済みなので無効
    sourceMap: true,   // デバッグ用に有効
    consoleLog: true,  // テスト用に有効
    
    // ステージング環境の最適化設定
    minify: false,     // デバッグ用に無効
    compress: false    // デバッグ用に無効
  },
  
  production: {
    // 環境固有設定
    environment: 'production',
    environmentPrefix: '',  // 本番環境はプレフィックスなし
    debug: false,
    
    // 本番環境特有の設定
    hotReload: false,
    sourceMap: false,
    consoleLog: false,
    
    // 本番環境の最適化設定
    minify: true,
    compress: true
  }
}

export default environments
