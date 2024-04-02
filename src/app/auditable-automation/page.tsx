import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  Automation,
  ImportanceOfAuditableTrails,
  WhatIsAuditableAutomation,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'Auditable Automation',
  description: 'Auditable Automation',
};

export default function AuditableAutomation() {
  return (
    <Box className="relative bg-black bg-opacity-40 overflow-hidden">
      <Automation />
      <WhatIsAuditableAutomation />
      <ImportanceOfAuditableTrails />
    </Box>
  );
}
