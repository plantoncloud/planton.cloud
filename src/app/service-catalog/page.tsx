import { Metadata } from 'next';
import { Box } from '@mui/material';
import { DecodeAndOptimize, Elevate, Empowering } from '@/app/_components';

export const metadata: Metadata = {
  title: 'Service Catalog',
  description: 'Service Catalog',
};

export default function ServiceCatalog() {
  return (
    <Box className="w-10/12 mx-auto my-20 relative border-t border-t-neutral-700 border-l border-l-neutral-700 bg-black bg-opacity-40">
      <Elevate />
      <Empowering />
      <DecodeAndOptimize />
    </Box>
  );
}
