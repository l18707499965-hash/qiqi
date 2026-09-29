import type { Metadata } from 'next';
import { MonitorPlay, Search, Sparkles, Zap, ShieldCheck, Smartphone, CloudDownload, Star, ListVideo } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: '功能介绍',
  description: `了解${SITE.name}的核心功能：海量高清影视资源、智能搜索、精选推荐、流畅播放、安全纯净、安卓轻量体验。`,
  keywords: ['琪琪影视功能', '高清影视', '在线观影', '智能推荐', '影视搜索'],
  alternates: { canonical: '/features' },
  openGraph: {
    title: `${SITE.name} 功能介绍`,
    description: `了解${SITE.name}的核心功能与优势。`,
    url: `${SITE.baseUrl}/features`,
  },
};

const FEATURES = [
  { icon: MonitorPlay, title: '海量高清资源', desc: '聚合电影、电视剧、综艺、动漫、短剧等内容，热门剧集与院线大片实时更新，总有一部适合你。' },
  { icon: Search, title: '智能精准搜索', desc: '强大的内容检索能力，输入关键词秒级返回结果，支持片名、演员等多维度查找，找片更高效。' },
  { icon: ListVideo, title: '分类浏览', desc: '按剧情、地区、年份、类型等多维分类浏览，轻松在海量片库中找到心仪内容。' },
  { icon: Sparkles, title: '精选推荐', desc: '基于你的观看记录与偏好，智能为你推荐热门影视与个性化片单，发现好剧更简单。' },
  { icon: Zap, title: '高清流畅播放', desc: '专业播放内核，硬解加速、极速缓冲，支持多清晰度切换，流畅不卡顿。' },
  { icon: Star, title: '追更收藏', desc: '收藏喜欢的影片与剧集，追剧进度自动记录，接着上次的看，不错过任何一集。' },
  { icon: ShieldCheck, title: '安全纯净', desc: '无恶意插件、无烦人弹窗广告，守护设备安全，让观影体验更纯粹。' },
  { icon: Smartphone, title: '安卓轻量化', desc: '安装包体积小巧，内存占用低，即使是低配安卓手机也能带来流畅顺畅的体验。' },
  { icon: CloudDownload, title: '离线缓存（部分内容）', desc: '支持将内容缓存到本地，随时随地离线观看，流量轻松省。' },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{SITE.name} 功能一览</h1>
        <p className="mt-3 text-muted-foreground">一款内容丰富、体验流畅、安全省心的安卓影视应用。</p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <Card key={f.title} className="border-border/80 shadow-sm hover:shadow-md">
            <CardContent className="pt-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">{f.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-14 text-center">
        <p className="text-lg font-medium text-foreground">心动不如行动</p>
        <p className="mt-1 text-sm text-muted-foreground">下载 {SITE.name}，开启您的海量观影之旅。</p>
      </div>
    </div>
  );
}