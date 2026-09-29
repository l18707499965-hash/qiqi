import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Download, Smartphone, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE, SOFTWARE_JSON_LD } from '@/lib/site-config';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '安卓下载',
  description: `${SITE.name}官方安卓下载中心，${SITE.slogan}。一键下载安装，海量高清影视免费看。下载地址：${SITE.downloadUrl}`,
  keywords: ['琪琪影视下载', '琪琪影视安卓版', '琪琪影视apk', '免费影视下载', '安卓影视app下载'],
  alternates: { canonical: '/download' },
  openGraph: {
    title: `${SITE.name} 安卓免费下载`,
    description: `官方安卓下载中心，海量高清影视免费看。`,
    url: `${SITE.baseUrl}/download`,
    images: [{ url: SITE.iconUrl, width: 512, height: 512, alt: `${SITE.name} 下载` }],
  },
};

const jsonLd = [
  SOFTWARE_JSON_LD,
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: SITE.baseUrl },
      { '@type': 'ListItem', position: 2, name: '安卓下载', item: `${SITE.baseUrl}/download` },
    ],
  },
];

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{SITE.name} · 安卓下载</h1>
        <p className="mt-3 text-muted-foreground">
          {SITE.slogan}。以下为官方安卓安装包下载入口，免费！
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-md">
        <div className="flex flex-col items-center gap-6 bg-gradient-to-br from-red-600 to-red-500 p-8 text-white sm:flex-row sm:justify-between sm:p-10">
          <div className="flex items-center gap-5">
            <span className="relative inline-flex h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-2 ring-white/30">
              <Image src={SITE.iconUrl} alt={`${SITE.name} 图标`} fill sizes="80px" className="object-cover" />
            </span>
            <div>
              <h2 className="text-2xl font-bold">{SITE.name}</h2>
              <p className="mt-1 text-white/85">版本 {SITE.version} · 免费 · Android 8.0+</p>
            </div>
          </div>
          <div className="w-full sm:w-auto">
            <Button asChild size="lg" variant="secondary" className="w-full gap-2 sm:w-auto">
              <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
                <Download className="h-5 w-5" />
                下载安卓安装包
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-4 p-6 sm:grid-cols-3 sm:p-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />官方正版安装包
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />安全无恶意插件
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Smartphone className="h-4 w-4 shrink-0 text-primary" />支持 Android 8.0 及以上
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800">
        <p className="font-semibold">安装提示</p>
        <ul className="mt-2 list-inside list-disc space-y-1">
          <li>下载后点击安装包进行安装；</li>
          <li>如提示「未知来源」，请在手机设置中允许此应用的安装权限；</li>
          <li>若下载或安装遇到问题，可前往 <Link href="/help" className="font-medium underline">帮助中心</Link> 获取指引。</li>
        </ul>
      </div>
    </div>
  );
}