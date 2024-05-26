import { Metadata } from 'next';
import { Box } from '@mui/material';
import {
  GRADIENT_COLOR,
  GetStarted,
  WantToSeePlatform,
  Extensible,
  IacWorkFlowPlayList,
} from '@/app/_components';

export const metadata: Metadata = {
  title: 'Integrated IaC Workflow',
  description: 'Integrated IaC Workflow',
};

export default function IacWorkFlow() {
  return (
    <Box className="relative bg-zinc-800 bg-opacity-40">
      <GetStarted />
      <Extensible />
      <IacWorkFlowPlayList />
      <WantToSeePlatform gradient={GRADIENT_COLOR.STONE} />
    </Box>
  );
}
