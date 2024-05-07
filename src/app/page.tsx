import { Metadata } from 'next';
import { Box } from '@mui/material';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {
  AuditableSection,
  CodeCloudSection,
  DevOpsSection,
  DidYouKnowSection,
  InternalDeveloperSection,
  WantToSeePlatform,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'Planton Cloud',
  description: 'Developer Portal',
};

export default function Home() {
  return (
    <>
      <Box className="md:container">
        <SpeedInsights />
        <InternalDeveloperSection />
        <CodeCloudSection />
        <DevOpsSection />
        <DidYouKnowSection />
        <AuditableSection />
      </Box>
      <Box className="mt-10 md:mt-0">
        <WantToSeePlatform />
      </Box>
    </>
  );
}
