"use client";

import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import styles from "./styles.module.less";
import Link from 'next/link';
import { useRouter } from 'next/navigation'; 

const Register: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: unknown) => {
    console.log('✅ Form values:', values);
    alert("You have successfully registered! Redirecting...");
    router.push('/'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
       <Button type="link" onClick={() => router.push("/")}>
        ← Back to Home
       </Button>
      </div>

      <div className={styles.formWrapper}>
        <img alt="avatar" src="/login-image.jpg" className={styles.loginImage} />

        <div className={styles.mainForm}>
          <Form name="login" onFinish={onFinish}>
            <div className={styles.switchButtons}>
              <Link href="/login"><Button type="primary">Login</Button></Link>
              <Button type="primary">Register</Button>
            </div>
            
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your E-mail!' }]}
            >
              <Input type="email" placeholder="Enter your Email Address" />
            </Form.Item>

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
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
