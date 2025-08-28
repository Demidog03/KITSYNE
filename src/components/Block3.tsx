import styles from './Block3.module.css';

export default function Block3() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Be ready for incredible journey</h2>

      <div className={styles.cards}>
          {/* Card 1 */}
  <div className={`${styles.card} ${styles.card1}`}>
    <div className={styles.header}>
      <div className={styles.icon}>🧠</div>
      <h3 className={styles.subtitle}>Learn by Doing</h3>
    </div>
    <p className={styles.text}>
      Engage with hands-on challenges and real projects that make learning fun
      and practical. Build, create, and grow.
    </p>
  </div>

  {/* Card 2 */}
  <div className={`${styles.card} ${styles.card2}`}>
    <div className={styles.header}>
      <div className={styles.icon}>🚀</div>
      <h3 className={styles.subtitle}>Launch Your Career</h3>
    </div>
    <p className={styles.text}>
      Master core software development skills and gain real-world experience
      through teamwork and applied learning.
    </p>
  </div>

  {/* Card 3 */}
  <div className={`${styles.card} ${styles.card3}`}>
    <div className={styles.header}>
      <div className={styles.icon}>🤝</div>
      <h3 className={styles.subtitle}>Community Support</h3>
    </div>
    <p className={styles.text}>
      You’re not alone — get guidance from mentors and collaborate with peers.
      Feedback and teamwork drive your progress.
    </p>
  </div>
</div>

      <div className={styles.buttonWrap}>
        <a href="#" className={styles.btn}>
          <img src="/vector.svg" alt="Vector" className={styles.btnVector} />
          Start Journey
        </a>
      </div>
    </section>
  );
}
