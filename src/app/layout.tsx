import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Layout, Providers } from '@/app/_components';
import { GA_CODE } from './_utils/constants';
import './globals.css';

export const metadata: Metadata = {
  title: 'Planton Cloud',
  description: 'Internal Developer Plaftform',
};

function isLocalhost() {
  const headersList = headers();
  const hostname = headersList.get('host');
  const host = hostname.split(':')[0];
  return host === 'localhost' || host === '127.0.0.1';
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localhost = isLocalhost();

  return (
    <html lang="en">
      {!localhost && <>
        <GoogleAnalytics gaId={GA_CODE} />
        <meta name="google-site-verification" content="-Z5sYWOAPH3IBD0PQKmuJoQE7QvVAv0-FYutGR2unw0" />
        </>
      }
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
