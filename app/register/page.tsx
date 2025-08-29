"use client";

import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles.module.less";

const Register: React.FC = () => {
  const router = useRouter();
  const onFinish = (values: unknown) => {
    console.log("✅", values);
    router.push("/");
  };

  return (
      <div className={styles.authRoot}>
        <button className={styles.backLink} onClick={() => router.push("/")}>
          ← Back to Home
        </button>

        <div className={styles.authCard}>
          <div className={styles.side}>
            <img src="/login-image.jpg" alt="avatar" />
          </div>

          <div className={styles.formSide}>
            <div className={styles.switch}>
              <Link href="/login">
                <Button className={styles.ghostBtn}>Login</Button>
              </Link>
              <Button className={styles.primaryBtn}>Register</Button>
            </div>

            <Form name="register" onFinish={onFinish} layout="vertical">
              <Form.Item
                  label="Email"
                  name="email"
                  rules={[{ required: true, message: "Please input your E-mail!" }]}
              >
                <Input prefix={<MailOutlined />} type="email" placeholder="Enter your Email" />
              </Form.Item>

              <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: "Please input your Username!" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Enter your username" />
              </Form.Item>

              <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: "Please input your Password!" }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Create a password" />
              </Form.Item>

              <Button htmlType="submit" block className={styles.primaryBtnLg}>
                Create account
              </Button>
            </Form>
          </div>
        </div>
      </div>
  );
};

export default Register;
