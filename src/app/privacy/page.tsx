import type { Metadata } from 'next';
import { SITE } from '@/lib/site-config';

export const metadata: Metadata = {
  title: '隐私政策',
  description: `${SITE.name}隐私政策：我们如何收集、使用与保护您的个人信息，以及您在数据方面的权利。`,
  keywords: ['隐私政策', '数据保护', '个人信息'],
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: `${SITE.name} 隐私政策`,
    description: '了解我们如何保护您的个人信息与隐私。',
    url: `${SITE.baseUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">{SITE.name} 隐私政策</h1>
      <p className="mt-2 text-sm text-muted-foreground">更新日期：{new Date().toISOString().slice(0, 10)}</p>

      <div className="prose mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-lg font-semibold text-foreground">一、引言</h2>
          <p>本隐私政策旨在说明{ SITE.name }（以下简称「我们」）在提供影视观看服务过程中，如何收集、使用、存储和保护用户（以下简称「您」）的个人信息。请您在使用本应用前仔细阅读并充分理解本政策。</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">二、我们收集的信息</h2>
          <p>在您使用过程中，我们可能收集以下信息：(1) 设备信息（如设备型号、操作系统版本）；(2) 基本使用日志（如页面访问、播放行为，用于优化服务）；(3) 您主动提供的反馈信息。</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">三、信息的使用</h2>
          <p>我们收集的信息仅用于：(1) 提供与优化影视观看服务；(2) 改进产品体验与稳定性；(3) 保障服务安全，防止恶意行为。我们不会将您的个人信息出售给任何第三方。</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">四、信息的存储与保护</h2>
          <p>我们采取合理的技术与管理措施保护您的信息安全，防止信息遭到未授权访问、公开披露、使用、篡改或损坏。</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">五、您的权利</h2>
          <p>您有权访问、更正或删除您的个人信息，或在法律允许范围内限制或拒绝我们处理您的数据。如有相关需求，可通过下方联系方式与我们取得联系。</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">六、政策更新</h2>
          <p>我们可能适时修订本隐私政策，修订后的政策将在本页面公布并更新日期。重大变更将通过显著方式告知您。</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold text-foreground">七、联系我们</h2>
          <p>如对本隐私政策有任何疑问或建议，请通过以下方式联系我们：{SITE.email}</p>
        </section>
      </div>
    </div>
  );
}