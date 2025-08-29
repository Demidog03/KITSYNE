'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    Row,
    Col,
    Card,
    Button,
    Tag,
    Avatar,
    Typography,
    Space,
} from 'antd';
import {
    ArrowRightOutlined,
    CalendarOutlined,
    ReadOutlined,
} from '@ant-design/icons';
import styles from './blogs.module.less';
import AppHeader from "@components/app-header/AppHeader";

const { Title, Text, Paragraph } = Typography;

// ---- demo data (замени API при готовности)
const featured = {
    title: 'Why Swift UI Should Be on the Radar of Every Mobile Developer',
    desc:
        'Learn what makes SwiftUI a joy to work with: declarative UI, state-driven rendering, and native performance — all in one toolkit.',
    author: 'Themotombana',
    category: 'Inspiration',
    cover:
        'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
};

const categories = [
    { name: 'UX/UI', cover: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop' },
    { name: 'React', cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop' },
    { name: 'PHP', cover: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600&auto=format&fit=crop' },
    { name: 'Javascript', cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop' },
];

const related = [
    {
        id: 1,
        title:
            'Class adds $30 million to its balance sheet for a Zoom-friendly education app',
        cover:
            'https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=1600&auto=format&fit=crop',
        excerpt:
            'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates seamlessly…',
        author: 'Lisa',
        date: '29.12.23',
    },
    {
        id: 2,
        title:
            'Class adds $30 million to its balance sheet for a Zoom-friendly education app',
        cover:
            'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
        excerpt:
            'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates seamlessly…',
        author: 'Elli',
        date: '29.12.23',
    },
];

const marketing = [
    {
        id: 11,
        title: 'AWS Certified solutions Architect',
        cover:
            'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=900&auto=format&fit=crop',
        author: 'Lisa',
        price: 80,
    },
    {
        id: 12,
        title: 'AWS Certified solutions Architect',
        cover:
            'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop',
        author: 'Lira',
        price: 80,
    },
    {
        id: 13,
        title: 'AWS Certified solutions Architect',
        cover:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=900&auto=format&fit=crop',
        author: 'Elli',
        price: 80,
    },
    {
        id: 14,
        title: 'AWS Certified solutions Architect',
        cover:
            'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        author: 'Lira',
        price: 80,
    },
];

export default function BlogsPage() {
    return (
        <div className={styles.page}>
            <AppHeader />
            <div className={styles.container}>
                {/* Featured / Hero */}
                <Card className={styles.hero} variant="borderless">
                    <Row gutter={[24, 24]} align="middle">
                        <Col xs={24} md={12}>
                            <Space size={8} className={styles.meta} wrap>
                                <Text type="secondary">By {featured.author}</Text>
                                <span>in</span>
                                <Tag color="geekblue">{featured.category}</Tag>
                            </Space>
                            <Title level={3} className={styles.heroTitle}>
                                {featured.title}
                            </Title>
                            <Paragraph type="secondary" className={styles.heroDesc}>
                                {featured.desc}
                            </Paragraph>

                            <Link href="/blog/featured">
                                <Button type="primary" size="large" icon={<ReadOutlined />}>
                                    Start Reading
                                </Button>
                            </Link>
                        </Col>

                        <Col xs={24} md={12}>
                            <div className={styles.coverWrap}>
                                <Image
                                    src={featured.cover}
                                    alt="Featured"
                                    fill
                                    className={styles.cover}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </Col>
                    </Row>
                </Card>

                {/* Categories */}
                <div className={styles.sectionHeader}>
                    <Title level={5}>Reading blog list</Title>
                </div>
                <Row gutter={[16, 16]}>
                    {categories.map((c) => (
                        <Col key={c.name} xs={12} md={6}>
                            <Card
                                hoverable
                                className={styles.category}
                                cover={
                                    <div className={styles.catThumb}>
                                        <Image
                                            src={c.cover}
                                            alt={c.name}
                                            fill
                                            className={styles.catImage}
                                            sizes="(max-width: 768px) 50vw, 20vw"
                                        />
                                    </div>
                                }
                            >
                                <div className={styles.catLabel}>{c.name}</div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Related Blog */}
                <div className={styles.sectionHeader}>
                    <Title level={5}>Related Blog</Title>
                    <Link className={styles.seeAll} href="/blog?tab=related">
                        See all <ArrowRightOutlined />
                    </Link>
                </div>
                <Row gutter={[16, 16]}>
                    {related.map((p) => (
                        <Col key={p.id} xs={24} md={12}>
                            <Card className={styles.relatedCard} hoverable>
                                <div className={styles.relatedThumb}>
                                    <Image
                                        src={p.cover}
                                        alt={p.title}
                                        fill
                                        className={styles.relatedImage}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div className={styles.relatedBody}>
                                    <Title level={5} className={styles.cardTitle}>
                                        {p.title}
                                    </Title>
                                    <Paragraph type="secondary" className={styles.cardText}>
                                        {p.excerpt}
                                    </Paragraph>
                                    <Space size={16} className={styles.cardMeta}>
                                        <Space>
                                            <Avatar size={24}>{p.author[0]}</Avatar>
                                            <Text>{p.author}</Text>
                                        </Space>
                                        <Space>
                                            <CalendarOutlined />
                                            <Text type="secondary">{p.date}</Text>
                                        </Space>
                                    </Space>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Marketing Articles */}
                <div className={styles.sectionHeader}>
                    <Title level={5}>Marketing Articles</Title>
                    <Link className={styles.seeAll} href="/blog?tab=marketing">
                        See all <ArrowRightOutlined />
                    </Link>
                </div>

                <Row gutter={[16, 16]}>
                    {marketing.map((m) => (
                        <Col key={m.id} xs={24} sm={12} md={6}>
                            <Card className={styles.marketingCard} hoverable>
                                <div className={styles.marketingThumb}>
                                    <Image
                                        src={m.cover}
                                        alt={m.title}
                                        fill
                                        className={styles.marketingImage}
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                </div>
                                <div className={styles.marketingBody}>
                                    <Space size={8} className={styles.miniMeta}>
                                        <Avatar size={22}>{m.author[0]}</Avatar>
                                        <Text type="secondary">{m.author}</Text>
                                    </Space>
                                    <Title level={5} className={styles.cardTitle}>
                                        {m.title}
                                    </Title>
                                    <Space className={styles.priceRow}>
                                        <Tag color="green">NEW</Tag>
                                        <Text strong>${m.price}</Text>
                                    </Space>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    );
}
