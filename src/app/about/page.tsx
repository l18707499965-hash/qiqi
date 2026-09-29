import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, MessagesSquare, ShieldCheck } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '关于我们',
  description: `了解${SITE.name}：一支用心做内容的团队，致力于为用户提供海量高清、流畅安全的观影体验。`,
  keywords: ['琪琪影视', '关于我们', '影视团队', '观影服务'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: `关于${SITE.name}`,
    description: '一支用心做内容的团队，为每一位用户打造极致的观影体验。',
    url: `${SITE.baseUrl}/about`,
    images: [{ url: SITE.iconUrl, width: 512, height: 512, alt: `${SITE.name}` }],
  },
};

const VALUES = [
  { icon: Eye, title: '内容为本', desc: '持续丰富片库，实时更新热门影视，让好内容触手可及。' },
  { icon: ShieldCheck, title: '安全至上', desc: '坚持纯净无毒的观影环境，守护每一台设备与每一位用户。' },
  { icon: MessagesSquare, title: '体验优先', desc: '不断打磨播放体验与交互细节，让观看更顺畅、更舒心。' },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <span className="relative mx-auto mb-6 inline-flex h-24 w-24 overflow-hidden rounded-3xl shadow-lg">
          <Image src={SITE.iconUrl} alt={`${SITE.name} Logo`} fill sizes="96px" className="object-cover" />
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">关于 {SITE.name}</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          {SITE.name} 是一款致力于为用户提供海量高清影视内容的安卓应用。我们汇聚电影、电视剧、综艺、
          动漫与短剧等丰富资源，以流畅的播放体验与智能的推荐算法，让每一位用户都能随时随地、轻松
          找到自己喜欢的内容。
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.title} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary">
              <v.icon className="h-6 w-6" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">{v.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl bg-muted/50 p-8 text-center sm:p-10">
        <h2 className="text-xl font-bold text-foreground">加入我们，一起看大片</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          现在下载 {SITE.name}，开启你的专属观影之旅。有任何建议或反馈，欢迎通过「帮助中心」联系我们。
        </p>
        <Button asChild size="lg" className="mt-6 gap-2">
          <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
            立即下载
          </Link>
        </Button>
      </div>
    </div>
  );
}