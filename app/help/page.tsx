'use client';

import { useMemo, useState } from 'react';
import { Button, Card, Collapse, Empty, Flex, Input, Space, Tag, Typography } from 'antd';
import {
  CustomerServiceOutlined,
  QuestionCircleOutlined,
  ReadOutlined,
  SafetyOutlined,
  SearchOutlined,
  WalletOutlined,
} from '@ant-design/icons';
import AppHeader from '@components/app-header/AppHeader';
import styles from './Help.module.less';

type Cat = 'Account' | 'Learning' | 'UI/UX' | 'Billing' | 'Security' | 'Other';
type FAQ = { q: string; a: string; cat: Cat };

const CATS: Cat[] = ['Account', 'Learning', 'UI/UX', 'Billing', 'Security', 'Other'];

/** Kitsyne-specific FAQs */
const FAQS: FAQ[] = [
  // Learning
  {
    q: 'How does the AI Tutor help me learn?',
    a: 'Kitsyne’s AI Tutor explains concepts, reviews your answers, gives hints on tasks, and adapts the next steps to your learning pace.',
    cat: 'Learning',
  },
  {
    q: 'Where can I see my learning path and progress?',
    a: 'On any course page, the left sidebar shows modules/lessons and your progress. The dashboard highlights what to learn next.',
    cat: 'Learning',
  },
  {
    q: 'Do quizzes affect my certificate?',
    a: 'Yes. Quizzes + final project form your score. You can retry quizzes; the best score is counted for certification.',
    cat: 'Learning',
  },
  {
    q: 'Will my progress sync across devices?',
    a: 'Absolutely. Progress is stored in the cloud and synced whenever you are online under the same account.',
    cat: 'Learning',
  },
  {
    q: 'Images or videos don’t load. What can I do?',
    a: 'Check your network, disable aggressive ad-blockers for kitsyne.app, and try again. Media uses lazy-load on slow connections.',
    cat: 'UI/UX',
  },

  // Billing
  {
    q: 'What plans does Kitsyne offer?',
    a: 'Free (limited), Pro (full catalog + AI Tutor), Teams (collaboration & analytics). See Pricing for details.',
    cat: 'Billing',
  },
  {
    q: 'How do refunds work?',
    a: 'We provide a 7-day money-back guarantee for first-time Pro purchases. Contact support with your order ID to request a refund.',
    cat: 'Billing',
  },

  // Security
  {
    q: 'How is my data protected?',
    a: 'We encrypt data in transit (TLS) and at rest. Access is strictly limited and logged. See our Privacy Policy for details.',
    cat: 'Security',
  },
  {
    q: 'How do I report a vulnerability?',
    a: 'Email security@kitsyne.app with details. Please avoid sharing publicly until we confirm and patch the issue.',
    cat: 'Security',
  },

  // Other
  {
    q: 'How do I report content or a user?',
    a: 'Use the ⋯ menu on a post/lesson → “Report”. Moderation will review and respond.',
    cat: 'Other',
  },
];

export default function HelpPage() {
  const [query, setQuery] = useState('');
  const [activeCat, setActiveCat] = useState<Cat | 'All'>('All');

  const filtered = useMemo(() => {
    const s = query.trim().toLowerCase();
    return FAQS.filter((item) => {
      const byCat = activeCat === 'All' || item.cat === activeCat;
      const byText = !s || item.q.toLowerCase().includes(s) || item.a.toLowerCase().includes(s);
      return byCat && byText;
    });
  }, [query, activeCat]);

  return (
    <div>
      <AppHeader />
      <div className={styles.wrap}>
        {/* Header */}
        <div className={styles.header}>
          <QuestionCircleOutlined className={styles.headerIcon} />
          <Typography.Title level={2} className={styles.title}>
            Kitsyne Help Center
          </Typography.Title>
          <Typography.Paragraph type="secondary" className={styles.subtitle}>
            Find quick answers about accounts, learning flow, billing, security, and more.
          </Typography.Paragraph>
        </div>

        {/* Search */}
        <div className={styles.searchBar}>
          <Input
            allowClear
            size="large"
            prefix={<SearchOutlined />}
            placeholder="Search in Kitsyne help…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className={styles.tagsScroll}>
          <Space size={8} wrap={false}>
            <Tag.CheckableTag
              className={styles.tag}
              checked={activeCat === 'All'}
              onChange={() => setActiveCat('All')}
            >
              All
            </Tag.CheckableTag>
            {CATS.map((c) => (
              <Tag.CheckableTag
                key={c}
                className={styles.tag}
                checked={activeCat === c}
                onChange={() => setActiveCat(c)}
              >
                {c}
              </Tag.CheckableTag>
            ))}
          </Space>
        </div>

        {/* FAQ List */}
        <div className={styles.content}>
          {filtered.length === 0 ? (
            <Empty
              description="No results. Try different keywords or switch category."
              style={{ margin: '48px 0' }}
            />
          ) : (
            <Collapse
              className={styles.collapse}
              accordion
              items={filtered.map((f, i) => ({
                key: `${i}-${f.q}`,
                label: (
                  <Flex align="center" gap={8}>
                    {f.cat === 'Security' ? (
                      <SafetyOutlined />
                    ) : f.cat === 'Billing' ? (
                      <WalletOutlined />
                    ) : (
                      <ReadOutlined />
                    )}
                    <Typography.Text strong>{f.q}</Typography.Text>
                    <Tag className={styles.rowTag}>{f.cat}</Tag>
                  </Flex>
                ),
                children: <Typography.Paragraph>{f.a}</Typography.Paragraph>,
              }))}
            />
          )}
        </div>

        {/* Support & Tips */}
        <div className={styles.grid}>
          <Card className={styles.supportCard} variant="borderless">
            <Flex vertical gap={8}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Need help from a human?
              </Typography.Title>
              <Typography.Text type="secondary">
                Our team replies within 24 hours on business days.
              </Typography.Text>
              <Space>
                <Button
                  type="primary"
                  size="large"
                  icon={<CustomerServiceOutlined />}
                  href="mailto:support@kitsyne.app"
                >
                  Contact Support
                </Button>
                <Button size="large" href="/pricing">
                  View Pricing
                </Button>
              </Space>
            </Flex>
          </Card>

          <Card className={styles.tipsCard} variant="borderless">
            <Typography.Title level={5}>Search tips</Typography.Title>
            <ul className={styles.ul}>
              <li>Use keywords like “AI Tutor”, “quiz”, “certificate”, “refund”.</li>
              <li>Filter by category (Learning, Billing, Security…).</li>
              <li>Attach screenshots when reporting an issue for faster help.</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
