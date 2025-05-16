'use client';

import { useState } from 'react';
import Hero from '@/components/Hero';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import ContactForm from '@/components/ContactForm';

export default function HomePage() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Hero onCTAClick={() => setIsFormOpen(true)} />

      <Pricing
        onStartIntake={(pkgName) => {
          setSelectedPackage(pkgName);
          setIsFormOpen(true);
        }}
      />

      <CTA onCTAClick={() => setIsFormOpen(true)} />

      {isFormOpen && (
        <ContactForm
          onClose={() => setIsFormOpen(false)}
          selectedPackage={selectedPackage}
        />
      )}
    </>
  );
}
