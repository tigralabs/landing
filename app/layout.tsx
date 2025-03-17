import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TigraLabs - IT Services & Digital Transformation',
  description: 'TigraLabs specializes in IT services, outsourcing, digital transformation, and automation to boost your business operations.',
  keywords: 'IT services, outsourcing, digital transformation, automation, staff augmentation, TigraLabs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tigralabs.com',
    title: 'TigraLabs - IT Services & Digital Transformation',
    description: 'TigraLabs specializes in IT services, outsourcing, digital transformation, and automation to boost your business operations.',
    siteName: 'TigraLabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TigraLabs - IT Services & Digital Transformation',
    description: 'TigraLabs specializes in IT services, outsourcing, digital transformation, and automation to boost your business operations.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}