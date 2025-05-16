import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className={styles.hero}>
            <Link href="/" className={styles.brandmark}>
  The Foundry
</Link>

      <div className={styles.container}>
        <h1 className={styles.headline}>Solid websites start here.</h1>
        <p className={styles.subtext}>
          The Foundry by WebTriage helps bold brands bring their digital identity to life.
          Thoughtfully designed. Strategically built.
        </p>
        <button className={styles.ctaButton} onClick={onCTAClick}>
          Start My Build
        </button>
      </div>
    </section>
  );
}
