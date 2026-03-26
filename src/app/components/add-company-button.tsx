'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';
import { CompanyFieldValues } from '@/app/components/company-form';

const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: CompanyFieldValues) => {
    await fetch('/api/companies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    setShow(false);
    router.refresh();
  };

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        onSubmit={handleSubmit}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
