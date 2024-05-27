import { FC } from 'react';
import { Box, Stack } from '@mui/material';
import { CarouselSection, CarouselSectionProps } from './client/carousel-section';

const carouselData: CarouselSectionProps[] = [
  {
    title: 'Reliable automation',
    labels: [],
  },
  {
    title: 'For',
    labels: [
      { label: 'Every Deployment', width: { desktop: '455px', mobile: '240px' } },
      { label: 'Every Update', width: { desktop: '340px', mobile: '180px' } },
      { label: 'DevOps Teams', width: { desktop: '375px', mobile: '200px' } },
    ],
  },
  {
    title: 'But not for',
    labels: [
      { label: 'Untracked Changes', width: { desktop: '495px', mobile: '255px' } },
      { label: 'Undocumented Modifications', width: { desktop: '725px', mobile: '370px' } },
      { label: 'Opaque Operations', width: { desktop: '485px', mobile: '250px' } },
      { label: 'Disorganized Workflows', width: { desktop: '600px', mobile: '310px' } },
    ],
  },
];

export const Automation: FC = () => {
  return (
    <Box className="md:w-10/12 md:mx-auto p-4 md:p-0">
      <Stack className="gap-3 md:gap-1.5 md:h-[calc(100vh-150px)] md:justify-center relative">
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
