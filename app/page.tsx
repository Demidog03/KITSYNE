import { Layout } from 'antd';
import WelcomeQuizHeader from '@/modules/welcome-quiz/ui/WelcomeQuizHeader';
import WelcomeQuizMain from '@/modules/welcome-quiz/ui/WelcomeQuizMain';

export default function HomePage() {
  console.log('main page');

  return (
    <Layout className="welcome-quiz">
      <WelcomeQuizHeader />
      <WelcomeQuizMain />
    </Layout>
  );
}

// типа меняю задний фон