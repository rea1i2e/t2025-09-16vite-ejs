// サイト基本設定（共通）
export const siteConfig = {
  siteName: 'EJS + Vite + Sass テンプレート',
  author: '作者名',
  keywords: 'キーワード1,キーワード2,キーワード3',
  ogImage: '/images/og-image.jpg',
  twitterCard: 'summary_large_image',
  
  // 動的な値
  currentYear: new Date().getFullYear(),
  
  // メタデータ
  meta: {
    viewport: 'width=device-width, initial-scale=1.0',
    charset: 'UTF-8',
    robots: 'index, follow'
  }
}

export default siteConfig
