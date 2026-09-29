import Link from 'next/link';
import Image from 'next/image';
import {
  Play,
  Download,
  Clapperboard,
  Search,
  Sparkles,
  MonitorPlay,
  ShieldCheck,
  Zap,
  Smartphone,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { SITE } from '@/lib/site-config';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FEATURES = [
  {
    icon: MonitorPlay,
    title: '海量高清资源',
    desc: '聚合影视剧、电影、综艺、动漫与短剧，内容实时更新，画质清晰流畅。',
  },
  {
    icon: Search,
    title: '智能搜索',
    desc: '精准高效的内容检索，输入片名即可秒出结果，翻看历史更省心。',
  },
  {
    icon: Sparkles,
    title: '精选推荐',
    desc: '基于观看偏好智能推送热门剧集，帮你发现每一部好片。',
  },
  {
    icon: Zap,
    title: '流畅播放',
    desc: '专业解码引擎，极速缓冲、高清不卡顿，看电影不等待。',
  },
  {
    icon: ShieldCheck,
    title: '安全纯净',
    desc: '无插件、无恶意广告，保护设备安全，观影更省心。',
  },
  {
    icon: Smartphone,
    title: '安卓轻量',
    desc: '安装包小巧、占用资源低，低配手机也能顺畅运行。',
  },
];

const STEPS = [
  { step: '01', title: '打开下载页', desc: '点击「立即下载」获取官方安卓安装包。' },
  { step: '02', title: '允许安装未知来源', desc: '根据手机提示，在设置中允许安装未知来源应用。' },
  { step: '03', title: '安装并开始观影', desc: '安装完成后打开 App，海量影视即刻畅看。' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-red-50 via-white to-white"
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
              <Play className="h-3 w-3 fill-current" />
              安卓（Android）官方下载
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              琪琪影视 · <span className="text-primary">海量高清</span>
              <br />
              随时随地看大片
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              一款轻量、流畅、内容丰富的影视应用。影视剧、电影、综艺、动漫、短剧一网打尽，
              智能推荐懂你的喜好，安卓手机免费下载，即装即看。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="gap-2 px-7 py-3 text-base">
                <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
                  <Download className="h-5 w-5" />
                  立即下载安卓版
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="px-7 py-3 text-base">
                <Link href="/features">
                  了解功能
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">免费</span> · 版本 {SITE.version} · 支持 Android 8.0 及以上
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" />高清流畅播放</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" />内容实时更新</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" />安全无广告</li>
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div aria-hidden className="absolute inset-0 -z-10 rounded-[2.5rem] bg-gradient-to-br from-red-100 to-red-50 blur-2xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl">
              <Image
                src={SITE.iconUrl}
                alt={`${SITE.name} App 宣传图`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 380px"
                className="object-contain p-6"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-14">
                <p className="text-white">
                  <span className="block text-lg font-bold">{SITE.name}</span>
                  <span className="text-sm text-white/80">{SITE.slogan}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">为什么选择琪琪影视？</h2>
          <p className="mt-3 text-muted-foreground">一款为你而生的高清影视应用，好看、好用、好安心。</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title} className="border-border/80 shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-primary">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Download steps */}
      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">三步开始观影</h2>
            <p className="mt-3 text-muted-foreground">简单几步，即刻享受海量高清内容。</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="gap-2 px-8">
              <Link href={SITE.downloadUrl} target="_blank" rel="noopener nofollow">
                <Clapperboard className="h-5 w-5" />
                下载 {SITE.name}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-red-600 to-red-500 p-8 text-white sm:p-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">有问题？想了解更多？</h2>
              <p className="mt-2 text-white/85">遇到安装、使用疑问？前往帮助中心，随时为你解答。</p>
            </div>
            <Button asChild variant="secondary" size="lg" className="shrink-0">
              <Link href="/help">进入帮助中心</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}