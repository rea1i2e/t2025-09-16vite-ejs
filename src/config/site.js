/**
 * site.js - サイト基本設定ファイル
 * 
 * 【ファイルの役割】
 * このファイルは、サイト全体で共通して使用される基本設定を管理します。
 * 開発環境・本番環境に関係なく、常に同じ値を使用したい設定をここに記述します。
 * 
 * 【設定項目の説明】
 * - siteName: サイト名（ページタイトルのフォールバック値）
 * - author: 作者名（meta authorタグで使用）
 * - keywords: SEO用キーワード（カンマ区切り）
 * - ogImage: Open Graph用画像のパス
 * - twitterCard: Twitter Cardの表示形式
 * - currentYear: 現在年（動的に取得、コピーライト等で使用）
 * - meta: HTMLのmeta要素用設定（charset、viewport、robots）
 * 
 * 【使用方法】
 * 1. このファイルで設定した値は、EJSテンプレートで変数として使用可能
 * 2. 例: <%= siteName %>、<%= author %>、<%= meta.charset %> など
 * 3. 環境別の設定（development.js、production.js）で上書きされる場合がある
 * 
 * 【注意事項】
 * - 環境によって値が変わる設定は、development.js または production.js に記述
 * - ページによって値が変わる設定は、pages.js に記述
 * - このファイルは全環境・全ページ共通の設定のみを記述
 */
export const siteConfig = {
  // サイト基本情報
  siteName: 'EJS + Vite + Sass テンプレート',  // サイト名（titleのフォールバック）
  author: '作者名',                              // 作者名（meta author）
  keywords: 'キーワード1,キーワード2,キーワード3',  // SEO用キーワード
  
  // SNS連携設定
  ogImage: '/images/og-image.jpg',              // Open Graph用画像パス
  twitterCard: 'summary_large_image',           // Twitter Cardの種類
  
  // 動的な値
  currentYear: new Date().getFullYear(),        // 現在年（自動取得）
  
  // HTMLメタデータ設定
  meta: {
    viewport: 'width=device-width, initial-scale=1.0',  // ビューポート設定
    charset: 'UTF-8',                                   // 文字エンコーディング
    robots: 'index, follow'                             // 検索エンジン向け設定
  }
}

export default siteConfig
