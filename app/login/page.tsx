"use client";

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Flex, Checkbox } from 'antd';
import styles from "./styles.module.less";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

const Login: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log('✅ Form values:', values);
    alert("Login success! Redirecting...");
    router.push('/');
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <img alt="avatar" src="/login-image.jpg" className={styles.loginImage} />

        <div className={styles.mainForm}>
          <Form name="login" requiredMark={false} onFinish={onFinish}>
            <div className={styles.switchButtons}>
              <Button type="primary">Login</Button>
              <Link href="/register"><Button type="primary">Register</Button></Link>
            </div>

            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Enter your username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input prefix={<LockOutlined />} type="password" placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
               <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
               </Form.Item>
               <a href="">Forgot password</a>
              </Flex>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

