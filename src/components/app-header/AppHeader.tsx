'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Drawer, Flex, Input } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styles from './AppHeader.module.less';

const NAV = [
  { href: '/course', label: 'Course' },
  { href: '/blog', label: 'Blog' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/help', label: 'Help' },
];

export default function AppHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // простая подсветка активного пункта
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href));

  // (опционально) фиксируем хидер при скролле - добавляем тень
  const [elevated, setElevated] = useState(false);
  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${elevated ? styles.headerShadow : ''}`}>
      <div className={styles.inner}>
        {/* ЛОГО */}
        <Link className={styles.brand} href="/">
          {/* Замените на свой логотип */}
          <span className={styles.brandText}>Kitsyne</span>
        </Link>

        {/* НАВИГАЦИЯ (desktop) */}
        <nav className={styles.nav}>
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`${styles.navLink} ${isActive(i.href) ? styles.active : ''}`}
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* ПОИСК + AUTH (desktop) */}
        <Flex align="center" gap={12} className={styles.actions}>
          <Input.Search placeholder="Search…" className={styles.search} allowClear />
          <Link href="/login">
            <Button>Login</Button>
          </Link>
          <Link href="/register">
            <Button type="primary">Register</Button>
          </Link>

          {/* Бургер (mobile) */}
          <Button
            className={styles.burger}
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setOpen(true)}
          />
        </Flex>
      </div>

      {/* Мобильное меню */}
      <Drawer title="Menu" placement="right" width={280} onClose={() => setOpen(false)} open={open}>
        <Flex vertical gap={8}>
          {NAV.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className={`${styles.mobileLink} ${isActive(i.href) ? styles.activeMobile : ''}`}
              onClick={() => setOpen(false)}
            >
              {i.label}
            </Link>
          ))}
          <Input.Search placeholder="Search…" allowClear />
          <Link href="/login">
            <Button block>Login</Button>
          </Link>
          <Link href="/register">
            <Button block type="primary">
              Register
            </Button>
          </Link>
        </Flex>
      </Drawer>
    </header>
  );
}
