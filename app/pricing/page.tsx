'use client';

import { useMemo, useState } from 'react';
import styles from './PricingPage.module.less';
import AppHeader from "@components/app-header/AppHeader";

type PlanKey = 'starter' | 'pro' | 'team';

const monthly = {
    starter: 0,
    pro: 19,
    team: 49,
};

const yearly = {
    starter: 0,
    pro: 15, // /mo when billed yearly
    team: 39,
};

const features: Record<PlanKey, string[]> = {
    starter: [
        'AI tutor basic',
        'Community access',
        '5 saved sessions',
        'Email support',
    ],
    pro: [
        'AI tutor advanced',
        'Projects & quizzes',
        'Unlimited sessions',
        'Priority support',
        'Export to PDF/MD',
    ],
    team: [
        'Everything in Pro',
        'Team workspace',
        'Shared libraries',
        'Admin & SSO (SAML)',
        'Analytics & reports',
    ],
};

const rows = [
    { key: 'ai', label: 'AI tutor features', starter: 'Basic', pro: 'Advanced', team: 'Advanced+' },
    { key: 'sessions', label: 'Saved sessions', starter: '5', pro: 'Unlimited', team: 'Unlimited' },
    { key: 'export', label: 'Export to PDF/MD', starter: '—', pro: '✓', team: '✓' },
    { key: 'workspace', label: 'Team workspace', starter: '—', pro: '—', team: '✓' },
    { key: 'sso', label: 'SSO (SAML/OIDC)', starter: '—', pro: '—', team: '✓' },
    { key: 'support', label: 'Support', starter: 'Email', pro: 'Priority', team: 'Dedicated' },
];

export default function PricingPage() {
    const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');

    const price = useMemo(() => (billing === 'monthly' ? monthly : yearly), [billing]);
    const saveLabel = billing === 'yearly' ? 'Save up to 20%' : 'Switch to yearly & save';

    return (
        <div>
            <AppHeader/>
            <div className={styles.page}>
                {/* Hero */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <h1 className={styles.title}>Pricing Plans</h1>
                        <p className={styles.subtitle}>
                            Start free and upgrade when you’re ready. Simple, transparent pricing for individuals and
                            teams.
                        </p>

                        {/* Billing Toggle */}
                        <div className={styles.billingToggle} role="group" aria-label="Billing period toggle">
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
                                Yearly
                                <span className={styles.save}>{saveLabel}</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Cards */}
                <section className={styles.cards}>
                    <PlanCard
                        badge="Free"
                        name="Starter"
                        desc="Everything you need to try the AI tutor and community."
                        price={price.starter}
                        billing={billing}
                        cta="Get started"
                        features={features.starter}
                        highlight={false}
                    />
                    <PlanCard
                        badge="Most Popular"
                        name="Pro"
                        desc="Advanced AI tutoring, unlimited sessions and exports."
                        price={price.pro}
                        billing={billing}
                        cta="Upgrade to Pro"
                        features={features.pro}
                        highlight
                    />
                    <PlanCard
                        badge="Teams"
                        name="Team"
                        desc="Collaboration, shared libraries, SSO and admin controls."
                        price={price.team}
                        billing={billing}
                        cta="Contact sales"
                        features={features.team}
                        highlight={false}
                        secondary
                    />
                </section>

                {/* Comparison Table */}
                <section className={styles.compare}>
                    <h2 className={styles.h2}>Compare plans</h2>
                    <div className={styles.table} role="table" aria-label="Plan comparison">
                        <div className={`${styles.row} ${styles.header}`} role="row">
                            <div className={styles.cell} role="columnheader">Features</div>
                            <div className={styles.cell} role="columnheader">Starter</div>
                            <div className={styles.cell} role="columnheader">Pro</div>
                            <div className={styles.cell} role="columnheader">Team</div>
                        </div>
                        {rows.map(r => (
                            <div className={styles.row} role="row" key={r.key}>
                                <div className={`${styles.cell} ${styles.key}`} role="cell">{r.label}</div>
                                <div className={styles.cell} role="cell">{r.starter}</div>
                                <div className={styles.cell} role="cell">{r.pro}</div>
                                <div className={styles.cell} role="cell">{r.team}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ */}
                <section className={styles.faq}>
                    <h2 className={styles.h2}>Frequently asked questions</h2>
                    <div className={styles.faqGrid}>
                        <FaqItem q="Can I use the free plan forever?">
                            Yes. Starter is free for personal use with basic AI and limited saved sessions.
                        </FaqItem>
                        <FaqItem q="What’s included in Pro?">
                            Advanced AI tutor, unlimited sessions, projects & quizzes, export to PDF/MD and priority
                            support.
                        </FaqItem>
                        <FaqItem q="Do you offer student or non-profit discounts?">
                            Yes — email us and we’ll apply an educational or non-profit rate where eligible.
                        </FaqItem>
                        <FaqItem q="How does Team billing work?">
                            Team is billed per seat. It includes shared workspaces, SSO, admin controls and usage
                            analytics.
                        </FaqItem>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.cta}>
                    <div className={styles.ctaBox}>
                        <h3>Ready to learn with your Personal AI Tutor?</h3>
                        <p>Start free in under a minute. No credit card required.</p>
                        <div className={styles.ctaActions}>
                            <a className={styles.primaryBtn} href="/register">Create account</a>
                            <a className={styles.ghostBtn} href="/contact">Talk to sales</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

function PlanCard(props: {
    badge?: string;
    name: string;
    desc: string;
    price: number;
    billing: 'monthly' | 'yearly';
    cta: string;
    features: string[];
    highlight?: boolean;
    secondary?: boolean;
}) {
    const {badge, name, desc, price, billing, cta, features, highlight, secondary} = props;
    return (
        <div
            className={`${styles.card} ${highlight ? styles.cardHighlight : ''} ${secondary ? styles.cardSecondary : ''}`}>
            {badge && <div className={styles.badge}>{badge}</div>}
            <h3 className={styles.cardTitle}>{name}</h3>
            <p className={styles.cardDesc}>{desc}</p>

            <div className={styles.priceWrap}>
                <span className={styles.currency}>{price === 0 ? '' : '$'}</span>
                <span className={styles.price}>{price === 0 ? 'Free' : price}</span>
                <span className={styles.period}>{price === 0 ? '' : '/mo'}</span>
                {billing === 'yearly' && price !== 0 && <span className={styles.billingNote}>billed yearly</span>}
            </div>

            <a className={`${styles.cardBtn} ${highlight ? styles.cardBtnPrimary : ''}`}
               href={price === 0 ? '/register' : '#'}>
                {cta}
            </a>

            <ul className={styles.list}>
                {features.map((f, i) => (
                    <li key={i} className={styles.listItem}>
                        <span className={styles.check}>✓</span>
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FaqItem({q, children}: { q: string; children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`${styles.faqItem} ${open ? styles.open : ''}`}>
            <button className={styles.faqQ} onClick={() => setOpen(v => !v)} aria-expanded={open}>
                {q}
                <span className={styles.faqIcon}>{open ? '−' : '+'}</span>
            </button>
            <div className={styles.faqA} aria-hidden={!open}>
                {children}
            </div>
        </div>
    );
}
