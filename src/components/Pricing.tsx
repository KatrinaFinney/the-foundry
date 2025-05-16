'use client';

import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const packages = [
  {
    name: "The Spark",
    price: "$499",
    summary: "A confident digital debut that gives your brand a professional presence—perfect for launching bold ideas with clarity and speed.",
    features: [
      "Up to 3 responsive sections or pages",
      "Your logo, brand colors & message",
      "Mobile-optimized layout",
      "Delivered ready to launch"
    ],
  },
  {
    name: "The Foundation",
    price: "$999",
    summary: "A strategic site with room to grow—designed to build trust, guide users, and elevate your brand above the noise.",
    features: [
      "Up to 6 pages (Home, About, Services, Contact, etc.)",
      "Fully responsive & SEO-ready",
      "Contact or inquiry form setup",
      "One revision round included"
    ],
  },
  {
    name: "The Signature",
    price: "$1,499",
    summary: "Your business deserves more than a template—this premium build balances beauty, strategy, and performance to help you scale.",
    features: [
      "Up to 10 custom pages + simple blog setup",
      "Lead capture or newsletter integration",
      "On-brand animations & CTAs",
      "Walkthrough video or training call"
    ],
  },
  {
    name: "The Scaffold",
    price: "$1,999",
    summary: "An adaptable, scalable, conversion-ready system for growing brands—ideal for scheduling, eCommerce, and launching your next big move.",
    features: [
      "Everything in Signature",
      "Booking system or eCommerce (1–5 products)",
      "Custom email setup (with domain)",
      "3 months of light support"
    ],
  },
];

export default function Pricing({
  onStartIntake,
}: {
  onStartIntake: (pkgName: string) => void;
}) {
  return (
    <section className={styles.pricing}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Choose Your Build
      </motion.h2>

      <div className={styles.grid}>
        {packages.map((pkg, i) => (
          <motion.div
            key={pkg.name}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className={styles.title}>{pkg.name}</h3>
            <p className={styles.summary}>{pkg.summary}</p>
            <div className={styles.price}>{pkg.price}</div>
            <ul className={styles.features}>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button
              className={styles.selectButton}
              onClick={() => onStartIntake(pkg.name)}
            >
              Start with {pkg.name}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
