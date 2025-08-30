import { Layout } from 'antd';
import WelcomeQuizHeader from '@/modules/welcome-quiz/ui/WelcomeQuizHeader';
import WelcomeQuizMain from '@/modules/welcome-quiz/ui/WelcomeQuizMain';
import Block3 from '@components/block3/Block3';
import CtaSection from '@components/cta-section/CtaSection';
import PricingSection from '@components/pricing-section/PricingSection';

export default function HomePage() {
  console.log('main page');

  return (
    <Layout className="welcome-quiz">
      <WelcomeQuizHeader />
      <WelcomeQuizMain />
      <Block3 />
      <CtaSection />
      <PricingSection />
    </Layout>
  );
}
