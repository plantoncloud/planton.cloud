import { Metadata } from 'next';
import { Box } from '@mui/material';
import { DecodeAndOptimize, Elevate, Empowering } from '@/app/_components';

export const metadata: Metadata = {
  title: 'Service Catalog',
  description: 'Service Catalog',
};

export default function ServiceCatalog() {
  return (
    <Box className="mx-6 md:w-10/12 md:mx-auto my-10 md:my-20 relative border-t border-t-neutral-700 border-l border-l-neutral-700 border-r border-r-neutral-700 md:border-r-0 bg-black bg-opacity-40">
      <Elevate />
      <Empowering />
      <DecodeAndOptimize />
    </Box>
  );
}
