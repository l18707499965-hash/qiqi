'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Download, Play } from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { href: '/', label: '首页' },
  { href: '/features', label: '功能介绍' },
  { href: '/download', label: '下载中心' },
  { href: '/about', label: '关于我们' },
  { href: '/help', label: '帮助中心' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="group flex items-center gap-3" aria-label={SITE.name}>
          <span className="relative inline-flex h-10 w-10 overflow-hidden rounded-xl ring-1 ring-black/5">
            <Image
              src={SITE.iconUrl}
              alt={`${SITE.name} App 图标`}
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-foreground">{SITE.name}</span>
            <span className="text-[11px] text-muted-foreground">{SITE.slogan}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="主导航">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm" className="gap-1.5">
            <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
              <Download className="h-4 w-4" />
              安卓下载
            </Link>
          </Button>
        </div>

        <div className="flex items-center md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="打开菜单">
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="sr-only">导航菜单</SheetTitle>
              <div className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 gap-1.5" onClick={() => setOpen(false)}>
                  <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
                    <Play className="h-4 w-4" />
                    安卓免费下载
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}