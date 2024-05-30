import { Metadata } from 'next';

import { Box } from '@mui/material';
import {
  Automate,
  GRADIENT_COLOR,
  IdeaToLaunch,
  Pricing,
  WantToSeePlatform,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'Code to Cloud',
  description: 'Code to Cloud',
};

export default function CodeToCloud() {
  return (
    <>
      <Box className="relative bg-black pt-5 md:pt-20 overflow-x-hidden">
        <Automate />
        <IdeaToLaunch />
        <Pricing />
      </Box>

      <WantToSeePlatform gradient={GRADIENT_COLOR.BLUE} />
    </>
  );
}
