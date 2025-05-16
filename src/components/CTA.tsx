import styles from './CTA.module.css';

export default function CTA({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className={styles.cta}>
      <h2 className={styles.heading}>Ready to Forge Your Online Presence?</h2>
      <p className={styles.text}>
        Let’s build something clear, strategic, and beautifully aligned with your brand.
      </p>
      <button className={styles.ctaButton} onClick={onCTAClick}>
        Start My Build
      </button>
    </section>
  );
}
