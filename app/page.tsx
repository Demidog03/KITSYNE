import {Layout} from "antd";
import WelcomeQuizHeader from "@/modules/welcome-quiz/ui/WelcomeQuizHeader";

export default function HomePage() {
    console.log('main page')

    return (
        <Layout className="welcome-quiz">
            <WelcomeQuizHeader />
        </Layout>
    );
}
