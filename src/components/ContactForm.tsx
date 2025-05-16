'use client';

import { useEffect, useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm({
  onClose,
  selectedPackage,
}: {
  onClose: () => void;
  selectedPackage: string | null;
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    package: selectedPackage || '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please complete all required fields.');
      return;
    }
  
    if (!formData.email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }
  
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
  

  // Lock scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close contact form"
        >
          ×
        </button>

        {!submitted ? (
          <>
            <h2 className={styles.heading}>Start Your Build</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Your Name<span>*</span></label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email Address<span>*</span></label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@yourdomain.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="business">Business or Project Name</label>
                <input
                  id="business"
                  name="business"
                  type="text"
                  placeholder="Studio Evergreen"
                  value={formData.business}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="package">Select a Package</label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                >
                  <option value="">Choose a package</option>
                  <option value="The Spark Site">The Spark Site – $499</option>
                  <option value="The Foundation Site">The Foundation Site – $999</option>
                  <option value="The Signature Site">The Signature Site – $1499</option>
                  <option value="The Scaffold">The Scaffold – $1999</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Tell us what you&rsquo;re building<span>*</span></label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Share a bit about your vision, timeline, or any questions."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className={styles.submitButton}>
                Send My Request
              </button>

              <p className={styles.postSubmitNote}>
                Once you submit your request, we’ll review your details and follow up within 2 business days.
                From there, we’ll guide you through next steps — whether that’s scheduling a discovery call or preparing your project roadmap.
                We believe every build starts with clear communication and thoughtful planning.
              </p>
            </form>
          </>
        ) : (
          <div className={styles.thankyou}>
            <h2>Thank You!</h2>
            <p>We’ll be in touch shortly to begin planning your build.</p>
            <button className={styles.submitButton} onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
