import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/site-config';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '常见问题 FAQ',
  description: `${SITE.name}常见问题解答：安装、下载、播放、账号等高频疑问一站式答疑。`,
  keywords: ['琪琪影视常见问题', '安装失败', '无法播放', '未知来源', '免费吗'],
  alternates: { canonical: '/help/faq' },
  openGraph: {
    title: `${SITE.name} 常见问题 FAQ`,
    description: '关于下载安装、播放体验的常见问题解答。',
    url: `${SITE.baseUrl}/help/faq`,
  },
};

const FAQS = [
  {
    q: '琪琪影视是免费的吗？',
    a: '是的，琪琪影视免费供用户下载使用，安装与观看基本功能完全免费，无需付费即可畅享海量高清影视内容。',
  },
  {
    q: '支持哪些系统？',
    a: '目前仅提供安卓（Android）版本下载，支持 Android 8.0 及以上系统。iOS 版本暂未开放，敬请期待。',
  },
  {
    q: '如何下载并安装？',
    a: '点击页面中的「立即下载」按钮获取官方安装包，下载完成后打开安装包，若提示「未知来源」，请在手机设置中允许该应用安装权限，然后完成安装即可。',
  },
  {
    q: '安装时提示「未知来源」怎么办？',
    a: '在手机「设置 → 安全/应用 → 安装未知应用」中，允许浏览器或文件管理应用安装未知来源应用，再返回重新安装即可。',
  },
  {
    q: '视频播放卡顿或无法播放怎么办？',
    a: '建议先检查网络连接，尝试切换清晰度或刷新；也可以清除应用缓存后重启。若仍无法解决，请联系我们的技术支持。',
  },
  {
    q: '如何搜索想看的影视？',
    a: '打开应用后，使用顶部搜索栏输入片名或演员即可精准搜索；也可以按分类、地区、年份等维度浏览片库。',
  },
  {
    q: '内容会实时更新吗？',
    a: '会的。我们持续更新热门电影、电视剧、综艺与动漫等内容，追剧体验更及时。',
  },
  {
    q: '使用琪琪影视安全吗？',
    a: '我们始终坚持安全纯净的观影环境，无恶意插件与恶意广告。也请从官网等正规渠道下载，避免使用不明来源的安装包。',
  },
];

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">常见问题</h1>
        <p className="mt-3 text-muted-foreground">关于 {SITE.name} 的高频问题，这里为您一次性解答。</p>
      </div>

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {FAQS.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-1">
            <AccordionTrigger className="px-4 text-left font-medium text-foreground">{item.q}</AccordionTrigger>
            <AccordionContent className="px-4 leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-12 text-center">
        <p className="text-foreground">还有其他问题？联系我们：{SITE.email}</p>
        <Button asChild className="mt-4 gap-2">
          <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
            下载 {SITE.name} 开始观影
          </Link>
        </Button>
      </div>
    </div>
  );
}