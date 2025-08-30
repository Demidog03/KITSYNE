'use client';

import React from 'react';
import AppHeader from '@components/app-header/AppHeader';
import styles from './CoursePage.module.less';

type Lesson = {
  id: string;
  title: string;
  duration: string;
  type?: 'lesson' | 'quiz';
};

const lessonsA: Lesson[] = [
  { id: 'l1', title: 'Lesson 01: Introduction about XD', duration: '30 mins' },
  { id: 'l2', title: 'Lesson 02: Introduction about XD', duration: '30 mins' },
  { id: 'l3', title: 'Lesson 03: Introduction about XD', duration: '30 mins' },
  { id: 'l4', title: 'Lesson 04: Introduction about XD', duration: '30 mins' },
  { id: 'l5', title: 'Lesson 05: Introduction about XD', duration: '30 mins' },
  { id: 'l6', title: 'Lesson 06: Introduction about XD', duration: '30 mins' },
  { id: 'l7', title: 'Lesson 07: Introduction about XD', duration: '30 mins' },
];

const quizA: Lesson[] = [
  { id: 'q1', title: 'Practice Quiz 1', duration: '15 mins', type: 'quiz' },
  { id: 'q2', title: 'Practice Quiz 2', duration: '15 mins', type: 'quiz' },
  { id: 'q3', title: 'Practice Quiz 3', duration: '15 mins', type: 'quiz' },
  { id: 'q4', title: 'Final Quiz', duration: '20 mins', type: 'quiz' },
];

const alsoBought = [
  {
    id: 'c1',
    tag: 'Design',
    title: 'AWS Certified solutions Architect',
    author: 'Lira',
    time: '3 Month',
    price: 80,
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'c2',
    tag: 'Design',
    title: 'AWS Certified solutions Architect',
    author: 'Lira',
    time: '2 Month',
    price: 80,
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'c3',
    tag: 'Design',
    title: 'AWS Certified solutions Architect',
    author: 'Lira',
    time: '1.5 Month',
    price: 80,
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function CoursePage() {
  return (
    <div>
      <AppHeader />
      <div className={styles.wrap}>
        {/* LEFT SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarGroup}>
            <div className={styles.sidebarTitle}>Change Simplification</div>
            <ul className={styles.list}>
              {lessonsA.map((l) => (
                <li key={l.id} className={styles.item}>
                  <span className={styles.dot} />
                  <span className={styles.itemText}>{l.title}</span>
                  <span className={styles.time}>{l.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarGroup}>
            <div className={styles.sidebarTitle}>PRACTICE QUIZ</div>
            <ul className={styles.list}>
              {quizA.map((q) => (
                <li key={q.id} className={`${styles.item} ${styles.quiz}`}>
                  <span className={styles.dot} />
                  <span className={styles.itemText}>{q.title}</span>
                  <span className={styles.time}>{q.duration}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.sidebarGroup}>
            <div className={styles.sidebarTitle}>PRACTICE QUIZ</div>
            <ul className={styles.list}>
              {lessonsA.slice(0, 6).map((l) => (
                <li key={`b-${l.id}`} className={styles.item}>
                  <span className={styles.dot} />
                  <span className={styles.itemText}>{l.title}</span>
                  <span className={styles.time}>{l.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className={styles.main}>
          <header className={styles.header}>
            <div>
              <h1 className={styles.title}>Learn about Adobe XD & Prototyping</h1>
              <div className={styles.subtitle}>Introduction about XD</div>
            </div>
            <div className={styles.badge}>⏱ 1 hour</div>
          </header>

          <section className={styles.playerCard}>
            <iframe
              width="100%"
              height="500px"
              src="https://www.youtube.com/embed/C-_pr1Hzlvg?si=M3E9ZxFns2nAaC-1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>06 Super Coins on the way</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Sed do eiusmod…
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Who this course is for?</h3>
            <p className={styles.text}>
              Beginners who want to dive into UI/UX design and create interactive prototypes without
              coding. You’ll learn wireframes, design UIs and build interactive prototypes
              step-by-step.
            </p>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Achievable</h3>
            <p className={styles.text}>
              By the end you will create a clickable prototype, understand design handoff and
              prepare assets for development.
            </p>
          </section>

          {/* Review */}
          <section className={styles.review}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewer}>
                <div className={styles.avatar}>B</div>
                <div>
                  <div className={styles.name}>Bulkin Simons</div>
                  <div className={styles.stars}>★★★★★</div>
                </div>
              </div>
              <button className={styles.moreBtn} aria-label="more">
                ⋯
              </button>
            </div>
            <p className={styles.reviewText}>
              Great introduction to XD! The examples were practical and easy to follow.
            </p>
          </section>

          {/* Also bought */}
          <section className={styles.sectionHead}>
            <h3 className={styles.sectionTitle}>Student also bought</h3>
            <div className={styles.controls}>
              <button className={styles.ctrlBtn} aria-label="prev">
                ‹
              </button>
              <button className={styles.ctrlBtn} aria-label="next">
                ›
              </button>
            </div>
          </section>

          <section className={styles.cardsGrid}>
            {alsoBought.map((c) => (
              <article key={c.id} className={styles.card}>
                <div className={styles.thumbWrap}>
                  {/* используем <img>, чтобы не настраивать next/image для внешних доменов */}
                  <img src={c.img} alt={c.title} className={styles.thumb} />
                  <span className={styles.tag}>{c.tag}</span>
                  <span className={styles.timePill}>{c.time}</span>
                </div>
                <div className={styles.cardBody}>
                  <h4 className={styles.cardTitle}>{c.title}</h4>
                  <div className={styles.metaRow}>
                    <div className={styles.metaLeft}>
                      <div className={styles.metaAvatar}>L</div>
                      <span className={styles.metaText}>{c.author}</span>
                    </div>
                    <div className={styles.price}>${c.price}</div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
