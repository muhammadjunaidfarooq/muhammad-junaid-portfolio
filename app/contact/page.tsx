import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
import Contact from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact — Muhammad Junaid Farooq',
  description: 'Get in touch with Muhammad Junaid Farooq about job opportunities, internships, freelance projects, or collaboration.',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <Contact />
    </MainLayout>
  );
}