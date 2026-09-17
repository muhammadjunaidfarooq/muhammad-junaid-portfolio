import type { Metadata } from 'next';
import { MainLayout } from '@/components/layout/MainLayout';
import Portfolio from '@/components/sections/Portfolio';

export const metadata: Metadata = {
  title: 'Portfolio — Muhammad Junaid Farooq',
  description: 'Selected software engineering and AI/ML projects by Muhammad Junaid Farooq.',
};

export default function PortfolioPage() {
  return (
    <MainLayout>
      <Portfolio />
    </MainLayout>
  );
}