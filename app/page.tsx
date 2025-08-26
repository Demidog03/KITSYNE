import { Layout } from 'antd';
import WelcomeQuizHeader from '@/modules/welcome-quiz/ui/WelcomeQuizHeader';
import WelcomeQuizMain from '@/modules/welcome-quiz/ui/WelcomeQuizMain';
import Block3 from '@/components/Block3';

export default function HomePage() {
  console.log('main page');

  return (
    <Layout className="welcome-quiz">
      <WelcomeQuizHeader />
      <WelcomeQuizMain />
      <Block3 />
    </Layout>
  );
}

// типа меняю задний фон
// че то подправил