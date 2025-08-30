'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Flex, Layout } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import kitsyne2dFullHeight from '@assets/images/kitsyne-2d-full-height.png';
import kitsynefox2d from '@assets/images/kitsyne-fox-2d.png';
import { questions } from '@modules/welcome-quiz/ui/welcomeFormQuestions';
import classes from './WelcomeQuiz.module.less';

const { Content } = Layout;

const WelcomeQuizMain = () => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[current];

  const handleChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      // Submit or send answers to API here
      console.log('Final Answers:', answers);
    }
  };

  return (
    <Content className={classes.main} id="welcome-main-section">
      <Flex className={classes.container} gap="large" vertical>
        <Title className={classes.title} level={2}>
          Lets start with some questions!
        </Title>
        <div className={classes.chatBox}>
          <Text className={classes.chatBoxTitle}>{currentQuestion.question}</Text>

          {currentQuestion.type === 'text' && (
            <TextArea
              className={classes.input}
              onChange={(e) => handleChange(e.target.value)}
              value={answers[currentQuestion.id] || ''}
              placeholder={currentQuestion?.placeholder || 'Type your answer'}
            />
          )}

          {currentQuestion.type === 'select' && (
            <Flex vertical gap="small">
              {currentQuestion.options?.map((option) => (
                <Button
                  key={option}
                  onClick={() => handleChange(option)}
                  type={answers[currentQuestion.id] === option ? 'primary' : 'default'}
                >
                  {option}
                </Button>
              ))}
            </Flex>
          )}

          <Button
            onClick={handleNext}
            className={classes.nextBtn}
            disabled={!answers[currentQuestion.id]}
            variant="solid"
          >
            {current < questions.length - 1 ? 'Next' : 'Finish'}
          </Button>
        </div>
        <Image
          className={classes.mainImage}
          priority
          src={kitsyne2dFullHeight}
          alt="kitsyne 2d full height"
        />
        <Image className={classes.mainImage2} priority src={kitsynefox2d} alt="kitsyne fox 2d" />
      </Flex>
    </Content>
  );
};

export default WelcomeQuizMain;
