import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { CarouselSection, CarouselSectionProps } from './client/carousel-section';

const carouselData: CarouselSectionProps[] = [
  {
    title: 'Reliable automation for',
    labels: [],
  },
  {
    title: 'For',
    labels: [
      { label: 'Every Deployment', width: '455px' },
      { label: 'Every Update', width: '340px' },
      { label: 'DevOps Teams', width: '375px' },
    ],
  },
  {
    title: 'But not for',
    labels: [
      { label: 'Untracked Changes', width: '495px' },
      { label: 'Undocumented Modifications', width: '725px' },
      { label: 'Opaque Operations', width: '485px' },
      { label: 'Disorganized Workflows', width: '600px' },
    ],
  },
];

export const Automation: FC = () => {
  return (
    <Box className="w-10/12 m-auto">
      <Stack className="gap-1.5 h-[calc(100vh-150px)] justify-center relative">
        {carouselData.map((carousel, idx) => (
          <CarouselSection {...carousel} key={idx} />
        ))}
      </Stack>
      <Box className="-z-10 absolute right-0 top-0 -mt-36 -mr-40 overflow-hidden">
        <video width="800" height="800" autoPlay={true} loop={true} muted playsInline>
          <source src="images/auditable-automation/animation-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
      <Box className="w-[1095px] h-[500px] absolute origin-top-left rotate-[60deg] blur-[200px] opacity-30 mix-blend-screen justify-center items-start inline-flex top-36 left-[200px] animate-pulse">
        <Box className="w-[500px] h-[500px] bg-purple-500 rounded-full" />
        <Box className="w-[500px] h-[500px] bg-orange-600 rounded-full" />
      </Box>
    </Box>
  );
};
