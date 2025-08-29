"use client";

import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex, Checkbox } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./styles.module.less";

const Login: React.FC = () => {
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
                        <Button className={styles.primaryBtn}>Login</Button>
                        <Link href="/register">
                            <Button className={styles.ghostBtn}>Register</Button>
                        </Link>
                    </div>

                    <Form name="login" requiredMark={false} onFinish={onFinish} layout="vertical">
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
                            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
                        </Form.Item>

                        <Flex justify="space-between" align="center" className={styles.rowSm}>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <a className={styles.mutedLink}>Forgot password</a>
                        </Flex>

                        <Button htmlType="submit" block className={styles.primaryBtnLg}>
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Login;
