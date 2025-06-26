import Image from 'next/image';
import styles from './Footer.module.css'

export default function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footerContent}>
            <div className={styles.footerTop}>
               <p>Kitsyne</p>
               <Image 
                  className={styles.footerLogo}
                  src="/kitsyne-footer-logo.svg"
                  alt="kitsyne-logo"
                  width={14}
                  height={14}
                  priority
                  />
               <p>Kitsyne 2025</p>
            </div>
            <p className={styles.footerCopyright}>
               Copyright ©2025 Produced by Kitsyne Team
            </p>
         </div>
      </footer>
);
}
