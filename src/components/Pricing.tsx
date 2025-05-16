import styles from './Pricing.module.css';

const packages = [
  {
    name: "The Spark Site",
    price: "$499",
    summary: "A clean, confident starter site for solo founders or side projects.",
    features: [
      "1–3 responsive pages",
      "Mobile-first design",
      "Basic SEO setup",
      "Launch-ready on your domain"
    ],
  },
  {
    name: "The Foundation Site",
    price: "$999",
    summary: "A strategic build with more space to tell your story.",
    features: [
      "Up to 6 custom pages",
      "Contact/intake form",
      "Starter SEO & analytics",
      "Flexible platform options"
    ],
  },
  {
    name: "The Signature Site",
    price: "$1,499",
    summary: "Built to convert — with blog, lead capture & polish.",
    features: [
      "Up to 10 pages + blog",
      "Lead capture integration",
      "Performance optimization",
      "Training call or handoff video"
    ],
  },
  {
    name: "The Scalable Site",
    price: "$1,999",
    summary: "Booking, ecom, or gated content — ready to grow with you.",
    features: [
      "Everything in Signature",
      "Ecommerce or scheduling features",
      "3-month support buffer",
      "Custom domain email setup"
    ],
  },
];

export default function Pricing({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className={styles.pricing}>
      <h2 className={styles.heading}>Packages & Pricing</h2>
      <div className={styles.grid}>
        {packages.map((pkg, idx) => (
          <div key={idx} className={styles.card}>
            <h3 className={styles.name}>{pkg.name}</h3>
            <p className={styles.price}>{pkg.price}</p>
            <p className={styles.summary}>{pkg.summary}</p>
            <ul className={styles.features}>
              {pkg.features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>
            <button className={styles.selectButton} onClick={onCTAClick}>
              Start with {pkg.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
