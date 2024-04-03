import { Metadata } from 'next';

import { Box } from '@mui/material';
import {
  FromZeroToHero,
  GRADIENT_COLOR,
  PlayList,
  StreamLineDevOps,
  WantToSeePlatform,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'Self-Service DevOps',
  description: 'Self-Service DevOps',
};

export default function SelfServiceDevOps() {
  return (
    <>
      <Box className="bg-gray-800 bg-opacity-40">
        <StreamLineDevOps />
        <FromZeroToHero />
        <PlayList />
      </Box>

      <WantToSeePlatform gradient={GRADIENT_COLOR.BLUE} />
    </>
  );
}
