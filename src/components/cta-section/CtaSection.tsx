import styles from './CtaSection.module.css';

export default function CtaSection() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <span className={styles.badge}>READY TO LEARN?</span>
                <h2 className={styles.title}>
                    Start your journey with your <span className={styles.highlight}>Personal AI Tutor</span>
                </h2>
                <p className={styles.subtitle}>
                    Practice, community support, and real skill-building — everything in one place.
                </p>

                <div className={styles.features}>
                    <p>✅ Learn by solving tasks & mini-projects</p>
                    <p>✅ Personalized hints from your AI tutor</p>
                    <p>✅ Mentors & peers always ready to help</p>
                </div>

                <div className={styles.actions}>
                    <a href="#" className={`${styles.btn} ${styles.primary}`}>Start for free</a>
                    <a href="#" className={`${styles.btn} ${styles.secondary}`}>Talk to mentor</a>
                </div>

                <p className={styles.note}>No credit card required. Start in just 2 minutes.</p>
            </div>
        </section>
    );
}
