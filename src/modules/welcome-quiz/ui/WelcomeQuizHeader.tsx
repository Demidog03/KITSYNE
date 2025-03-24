'use client'

import React from 'react';
import {Layout} from "antd";
import Title from "antd/es/typography/Title";
import styles from './Styles.module.less';

const { Header } = Layout

const WelcomeQuizHeader = () => {
    return (
        <Header>
            <Title className={styles.title}>KITSYNE</Title>
        </Header>
    );
};

export default WelcomeQuizHeader;