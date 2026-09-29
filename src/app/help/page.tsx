import type { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, Download, Settings, ShieldCheck, ChevronRight } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: '帮助中心',
  description: `${SITE.name}帮助中心：下载安装、使用说明、常见问题与联系我们，助您轻松上手高清观影。`,
  keywords: ['琪琪影视帮助', '使用教程', '安装问题', '常见问题', '联系我们'],
  alternates: { canonical: '/help' },
  openGraph: {
    title: `${SITE.name} 帮助中心`,
    description: '下载安装、使用教程与常见问题一站式解答。',
    url: `${SITE.baseUrl}/help`,
  },
};

const HELP_ITEMS = [
  { icon: Download, title: '如何下载与安装', desc: '获取安卓安装包、允许未知来源、完成安装的分步指南。', href: '/help/faq' },
  { icon: Settings, title: '使用教程', desc: '搜索、收藏、追更与清晰度切换等常用功能说明。', href: '/help/faq' },
  { icon: ShieldCheck, title: '安全与隐私', desc: '我们对安全纯净观影环境的承诺与数据保护说明。', href: '/privacy' },
  { icon: HelpCircle, title: '常见问题 FAQ', desc: '集中解答安装、播放、账号等高频问题。', href: '/help/faq' },
];

export default function HelpPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">帮助中心</h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          在这里找到关于下载、安装与使用 {SITE.name} 的一切答案。
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {HELP_ITEMS.map((item) => (
          <Card key={item.title} className="border-border/80 shadow-sm hover:shadow-md">
            <CardContent className="pt-6">
              <Link href={item.href} className="group flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-primary">
                  <item.icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="flex items-center gap-1 text-lg font-semibold text-foreground">
                    {item.title}
                    <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{item.desc}</span>
                </span>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-muted/50 p-6 sm:flex-row">
        <div>
          <h2 className="text-lg font-semibold text-foreground">没有找到需要的答案？</h2>
          <p className="text-sm text-muted-foreground">特殊情况联系技术支持：{SITE.email}</p>
        </div>
        <Button asChild>
          <Link href="/help/faq">查看常见问题</Link>
        </Button>
      </div>
    </div>
  );
}