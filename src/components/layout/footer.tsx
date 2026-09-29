import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site-config';

const FOOTER_LINKS = [
  { title: '产品', links: [
    { href: '/features', label: '功能介绍' },
    { href: '/download', label: '安卓下载' },
    { href: '/about', label: '关于我们' },
  ] },
  { title: '支持', links: [
    { href: '/help', label: '帮助中心' },
    { href: '/help/faq', label: '常见问题' },
    { href: '/privacy', label: '隐私政策' },
  ] },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl">
                <Image src={SITE.iconUrl} alt={`${SITE.name} Logo`} fill sizes="40px" className="object-cover" />
              </span>
              <span className="text-lg font-bold text-foreground">{SITE.name}</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE.slogan}，海量高清资源实时更新，打造极致流畅的在线观影体验。
            </p>
          </div>
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold text-foreground">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">下载</h3>
            <p className="mb-3 text-sm text-muted-foreground">仅支持安卓（Android）设备下载安装。</p>
            <Link
              href={SITE.downloadUrl}
              target="_blank"
              rel="noopener nofollow"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              立即下载
            </Link>
            <p className="mt-3 text-xs text-muted-foreground">版本 {SITE.version} · 免费</p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.name} 版权所有 · 本站仅为 {SITE.name} 官方信息与下载页面。</p>
          <p className="mt-1">请于正规渠道下载，观影请尊重版权，支持正版。</p>
        </div>
      </div>
    </footer>
  );
}