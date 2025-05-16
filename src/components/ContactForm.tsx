'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    package: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Submission failed');
      setSubmitted(true);
    } catch (err) {
      alert('There was a problem submitting your form.');
      console.error(err);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.close}>✕</button>

        {!submitted ? (
          <>
            <h2 className={styles.heading}>Start Your Build</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label>Name<span>*</span></label>
                <input name="name" required value={formData.name} onChange={handleChange} />
              </div>

              <div className={styles.field}>
                <label>Email<span>*</span></label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} />
              </div>

              <div className={styles.field}>
                <label>Business / Project Name</label>
                <input name="business" value={formData.business} onChange={handleChange} />
              </div>

              <div className={styles.field}>
                <label>Which Package?</label>
                <select name="package" value={formData.package} onChange={handleChange}>
                  <option value="">Select a package</option>
                  <option value="The Spark Site">$499 – The Spark Site</option>
                  <option value="The Foundation Site">$999 – The Foundation Site</option>
                  <option value="The Signature Site">$1499 – The Signature Site</option>
                  <option value="The Scalable Site">$1999 – The Scalable Site</option>
                </select>
              </div>

              <div className={styles.field}>
                <label>Project Details<span>*</span></label>
                <textarea name="message" required rows={4} value={formData.message} onChange={handleChange} />
              </div>

              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </>
        ) : (
          <div className={styles.thankyou}>
            <h2>Thank You!</h2>
            <p>We’ll be in touch shortly to begin planning your build.</p>
            <button className={styles.submitButton} onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
