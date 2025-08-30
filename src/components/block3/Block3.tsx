import styles from './Block3.module.css';

export default function Block3() {
  return (
    <section className={styles.section} aria-labelledby="journey-title">
      <div className={styles.container}>
        <h2 id="journey-title" className={styles.title}>
          Be ready for incredible journey
        </h2>

        {/* семантически корректный список преимуществ */}
        <ul className={styles.cards} role="list">
          <li className={`${styles.card} ${styles.card1}`}>
            <div className={styles.header}>
              <span className={styles.icon} aria-hidden>
                🧠
              </span>
              <h3 className={styles.subtitle}>Learn by Doing</h3>
            </div>
            <p className={styles.text}>
              Engage with hands-on challenges and real projects that make learning fun and
              practical. Build, create, and grow.
            </p>
          </li>

          <li className={`${styles.card} ${styles.card2}`}>
            <div className={styles.header}>
              <span className={styles.icon} aria-hidden>
                🚀
              </span>
              <h3 className={styles.subtitle}>Launch Your Career</h3>
            </div>
            <p className={styles.text}>
              Master core software development skills and gain real-world experience through
              teamwork and applied learning.
            </p>
          </li>

          <li className={`${styles.card} ${styles.card3}`}>
            <div className={styles.header}>
              <span className={styles.icon} aria-hidden>
                🤝
              </span>
              <h3 className={styles.subtitle}>Community Support</h3>
            </div>
            <p className={styles.text}>
              You’re not alone — get guidance from mentors and collaborate with peers. Feedback and
              teamwork drive your progress.
            </p>
          </li>
        </ul>

        <div className={styles.ctaWrap}>
          <a href="/course" className={`${styles.btn} ${styles.primary}`}>
            <img src="/vector.svg" alt="" aria-hidden className={styles.btnVector} />
            <span>Start Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
}
