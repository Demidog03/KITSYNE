'use client';

import Image from 'next/image';
import { Button, Flex, Layout } from 'antd';
import Text from 'antd/es/typography/Text';
import Title from 'antd/es/typography/Title';
import { motion } from 'motion/react';
import kitsyneFox from '@assets/images/kitsyne-fox-3d.png';
import kitsyneMain from '@assets/images/kitsyne-main-3d.png';
import {
  delayedDialogFade,
  fadeScaleIn,
  fadeSlideLeft,
  fadeSlideRight,
} from '@lib/animations/motionPresets';
import DialogBubble from '@shared/dialog-bubble/DialogBubble';
import classes from './WelcomeQuiz.module.less';
import Link from 'next/link';




const { Header } = Layout;
const MotionImage = motion(Image);
const MotionButton = motion(Button);

  
const WelcomeQuizHeader = () => {
  const handleClick = () => {
    document.getElementById('welcome-main-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Header className={classes.header}>
      <Flex className={classes.container} gap="middle" align="center" justify="center" vertical>
        <motion.div {...fadeScaleIn(1, 0)}>
          <Title className={classes.title}>KITSYNE</Title>
        </motion.div>

        <motion.div {...fadeScaleIn(1.4, 1)}>
          <Title level={2} className={classes.subTitle}>
            Your Personal AI Tutor
          </Title>
        </motion.div>

        <MotionButton
          {...fadeScaleIn(1, 2)}
          size="large"
          className={classes.kitsyneBtn}
          color="default"
          variant="solid"
          onClick={handleClick}
        >
          START
        </MotionButton>

        <div className={classes.imageWrapper}>
          <motion.div {...delayedDialogFade(1.2, 2)} style={{ position: 'relative', zIndex: 10 }}>
            <DialogBubble variant="dark">
              <Text className={classes.bubbleText}>I am here to help you! 🌸</Text>
            </DialogBubble>
          </motion.div>

          <div className={classes.imageContainer}>
            <MotionImage
              {...fadeSlideRight(1.2, 1.5)}
              className={classes.mainImage}
              src={kitsyneMain}
              alt="kitsyne"
            />
          </div>
        </div>

        <div className={classes.foxContainer}>
          <MotionImage
            {...fadeSlideLeft(1.2, 2.5)}
            className={classes.foxImage}
            src={kitsyneFox}
            alt="kitsyne-fox"
          />
        </div>
      </Flex>
    </Header>
  );
};

export default WelcomeQuizHeader;
