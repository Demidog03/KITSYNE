'use client';

import { Avatar, Card, Col, Layout, Row, Typography } from 'antd';
import AppHeader from '@components/app-header/AppHeader';
import styles from './AboutUs.module.less';

const { Title, Paragraph } = Typography;

const team = [
  { name: 'Nurgissa', role: 'Frontend Developer' },
  { name: 'Suleimen', role: 'Frontend Developer' },
  { name: 'Tomiris', role: 'Frontend Developer' },
  { name: 'Adiya', role: 'Frontend Developer' },
  { name: 'Riza', role: 'Frontend Developer' },
  { name: 'Moldir', role: 'Frontend Developer' },
  { name: 'Ainagul', role: 'Frontend Developer' },
  { name: 'Nartai', role: 'Frontend Developer' },
  { name: 'Indira', role: 'Frontend Developer' },
  { name: 'Guzel', role: 'Frontend Developer' },
];

export default function AboutUs() {
  return (
    <div>
      <AppHeader />
      <Layout className={styles.aboutSection}>
        <div className={styles.container}>
          <Title className={styles.title}>About Us</Title>
          <Paragraph className={styles.description}>
            We are a passionate team of frontend developers, building an AI-powered learning
            platform that makes education more accessible, engaging, and effective. Our mission is
            to help students learn through practice, community support, and personal AI tutor
            guidance.
          </Paragraph>

          <Title level={3} className={styles.subTitle}>
            Our Mission
          </Title>
          <Paragraph className={styles.text}>
            To empower learners worldwide with interactive courses, hands-on projects, and
            mentorship. We believe education should be practical, collaborative, and tailored to
            each individual.
          </Paragraph>

          <Title level={3} className={styles.subTitle}>
            Meet the Team
          </Title>
          <Row gutter={[24, 24]} justify="center">
            {team.map((member, idx) => (
              <Col xs={24} sm={12} md={8} lg={6} key={idx}>
                <Card className={styles.card} variant="borderless">
                  <Avatar
                    size={90}
                    style={{
                      backgroundColor: '#104d41',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: 20,
                    }}
                  >
                    {member.name[0]}
                  </Avatar>
                  <Title level={4} className={styles.memberName}>
                    {member.name}
                  </Title>
                  <Paragraph className={styles.memberRole}>{member.role}</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Layout>
    </div>
  );
}
