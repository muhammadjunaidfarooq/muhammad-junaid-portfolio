import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
import Resume from '@/components/sections/Resume';

export const metadata: Metadata = {
  title: 'Resume — Muhammad Junaid Farooq',
  description: 'Education, professional experience, tech stack, and certifications for Muhammad Junaid Farooq, an AI/ML Engineer and Software Engineering graduate.',
};

export default function ResumePage() {
  return (
    <MainLayout>
      <Resume />
    </MainLayout>
  );
}