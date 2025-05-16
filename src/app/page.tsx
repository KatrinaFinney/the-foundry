'use client';

import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';
import { useState } from 'react';

export default function HomePage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Hero onCTAClick={() => setShowForm(true)} />
      <Pricing onCTAClick={() => setShowForm(true)} />
      <CTA onCTAClick={() => setShowForm(true)} />
      {showForm && <ContactForm onClose={() => setShowForm(false)} />}
    </>
  );
}
