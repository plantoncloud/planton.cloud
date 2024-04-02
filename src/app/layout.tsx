import type { Metadata } from 'next';
import './globals.css';
import { Layout, Providers } from '@/app/_components';

export const metadata: Metadata = {
  title: 'Planton Cloud',
  description: 'Internal Developer Plaftform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
