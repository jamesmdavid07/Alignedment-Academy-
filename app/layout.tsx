import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from '@/components/site';

export const metadata: Metadata = { title: 'Alignment Academy | From Transaction to Transformation', description: 'Fundamentals of Transformational Coaching from the Aligned4Life Project.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><SiteHeader />{children}<SiteFooter /></body></html>;
}
