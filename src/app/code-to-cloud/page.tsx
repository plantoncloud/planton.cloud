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
      <Box className="relative bg-black mt-5 md:mt-20">
        <Automate />
        <IdeaToLaunch />
        <Pricing />
      </Box>

      <WantToSeePlatform gradient={GRADIENT_COLOR.BLUE} />
    </>
  );
}
