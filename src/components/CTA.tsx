'use client';

import { motion } from 'framer-motion';
import styles from './CTA.module.css';

export default function CTA({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <motion.section
      className={styles.cta}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Your brand deserves more than a placeholder.
      </motion.h2>

      <motion.p
        className={styles.text}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Let’s bring your website to life—with care and clarity.
      </motion.p>

      <motion.button
        className={styles.ctaButton}
        onClick={onCTAClick}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
        Start My Build
      </motion.button>
    </motion.section>
  );
}
