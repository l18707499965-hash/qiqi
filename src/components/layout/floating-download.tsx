import Link from 'next/link';
import { Download } from 'lucide-react';
import { SITE } from '@/lib/site-config';

/** 右下角常驻下载悬浮按钮，强化转化与移动端触达 */
export function FloatingDownload() {
  return (
    <Link
      href={SITE.downloadUrl}
      target="_blank"
      rel="noopener nofollow"
      aria-label={`${SITE.name} 安卓免费下载`}
      className="fixed bottom-6 right-5 z-40 flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105"
    >
      <Download className="h-4 w-4" />
      立即下载
    </Link>
  );
}