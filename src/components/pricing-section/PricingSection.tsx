'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './PricingSection.module.less';

type Tier = {
  name: string;
  monthly: number;
  yearly: number;
  tagline: string;
  cta: string;
  features: string[];
  popular?: boolean;
};

const TIERS: Tier[] = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    tagline: 'Для первых шагов и пробных занятий',
    cta: 'Get Started',
    features: [
      'Доступ к базовым урокам',
      'AI-подсказки в чате (ограничено)',
      '1 проект-челлендж / месяц',
      'Сообщество новичков',
    ],
  },
  {
    name: 'Pro',
    monthly: 19,
    yearly: 180, // -21%
    tagline: 'Оптимально для стабильной практики',
    cta: 'Start Pro',
    popular: true,
    features: [
      'Все Starter возможности',
      'Безлимитные AI-подсказки',
      'Еженедельные мини-проекты',
      'Ревью кода от менторов',
      'Приоритетная поддержка',
    ],
  },
  {
    name: 'Mentor+',
    monthly: 39,
    yearly: 360, // -23%
    tagline: 'Максимум: менторство и дорожная карта',
    cta: 'Join Mentor+',
    features: [
      'Все Pro возможности',
      '1:1 сессии с ментором',
      'Личная roadmap и трекинг прогресса',
      'Подготовка к собеседованиям',
      'Сертификат по итогам трека',
    ],
  },
];

export default function PricingSection() {
  const router = useRouter();
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className={styles.pricing} id="pricing">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.kicker}>Plans & Pricing</span>
          <h2 className={styles.title}>Choose a plan that grows with you</h2>

          <div className={styles.toggle} role="group" aria-label="Billing period">
            <button
              className={`${styles.toggleBtn} ${billing === 'monthly' ? styles.active : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`${styles.toggleBtn} ${billing === 'yearly' ? styles.active : ''}`}
              onClick={() => setBilling('yearly')}
            >
              Yearly <span className={styles.save}>save up to 20%</span>
            </button>
          </div>
        </div>

        <div className={styles.grid}>
          {TIERS.map((t) => {
            const price = billing === 'monthly' ? t.monthly : t.yearly;
            const suffix = billing === 'monthly' ? '/mo' : '/yr';
            return (
              <article key={t.name} className={`${styles.card} ${t.popular ? styles.popular : ''}`}>
                {t.popular && <div className={styles.badge}>Most popular</div>}

                <header className={styles.cardHead}>
                  <h3 className={styles.cardTitle}>{t.name}</h3>
                  <p className={styles.tagline}>{t.tagline}</p>
                </header>

                <div className={styles.priceWrap}>
                  {price === 0 ? (
                    <span className={styles.free}>Free</span>
                  ) : (
                    <>
                      <span className={styles.currency}>$</span>
                      <span className={styles.price}>{price.toLocaleString('en-US')}</span>
                      <span className={styles.suffix}>{suffix}</span>
                    </>
                  )}
                </div>

                <ul className={styles.features}>
                  {t.features.map((f, i) => (
                    <li key={i} className={styles.featureItem}>
                      <span className={styles.check} aria-hidden>
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button onClick={() => router.push('/pricing')} className={styles.cta}>
                  {t.cta}
                </button>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>
          Все планы можно изменить или отменить в любой момент. Никакой привязки карты на бесплатном
          тарифе.
        </p>
      </div>
    </section>
  );
}
