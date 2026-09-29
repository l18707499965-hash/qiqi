/**
 * 站点全局配置
 * 集中管理品牌名、下载地址、统计 ID 与 SEO 基础信息，便于统一维护。
 */
export const SITE = {
  name: '琪琪影视',
  enName: 'QIQI Video',
  slogan: '海量高清影视 · 一键免费看',
  description:
    '琪琪影视是一款海量高清视频应用，聚合影视剧、综艺、动漫、短剧等内容，支持高清流畅播放、智能搜索与精选推荐，安卓手机免费下载安装，随时随地在线看片。',
  keywords: [
    '琪琪影视',
    '琪琪影视app',
    '琪琪影视下载',
    '琪琪影视安卓下载',
    '琪琪影视官网',
    '免费观影app',
    '高清影视app',
    '电视剧免费看',
  ],
  // 仅安卓下载地址
  downloadUrl: 'https://bos.liao-hai.chat/yxq/%e7%90%aa%e7%90%aa%e5%bd%b1%e8%a7%86.apk',
  downloadFileName: '琪琪影视.apk',
  // 统计 ID（渠道/安装统计标识，提交给渠道使用）
  statsId: '8fc129760ce080943794d1b00cf9422a',
  // 站点对外访问域名（运行时由环境变量注入，禁止硬编码）
  baseUrl: process.env.COZE_PROJECT_DOMAIN_DEFAULT ?? 'https://localhost:5000',
  // 应用图标/Logo（本地静态资源，避免外链失效）
  iconUrl: '/qiqi-icon.jpeg',
  version: 'v3.2.0',
  email: 'support@qiqi-video.example.com',
} as const;

/** 应用软件结构化数据（SoftwareApplication） */
export const SOFTWARE_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE.name,
  description: SITE.description,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'Android',
  platform: 'Android',
  softwareVersion: SITE.version,
  inLanguage: 'zh-CN',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CNY',
  },
};