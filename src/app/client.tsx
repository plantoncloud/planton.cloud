'use client';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Box } from '@mui/material';
import {
  AuditableSection,
  CodeCloudSection,
  DevOpsSection,
  DidYouKnowSection,
  InternalDeveloperSection,
  WantToSeePlatform,
} from '@/app/_components';

export default function Client() {
  return (
    <>
      <Box className="container">
        <SpeedInsights />
        <InternalDeveloperSection />
        <CodeCloudSection />
        <DevOpsSection />
        <DidYouKnowSection />
        <AuditableSection />
      </Box>

      <WantToSeePlatform />
    </>
  );
}
