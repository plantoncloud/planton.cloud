import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { East } from '@mui/icons-material';
import { ChipIacWorkflow, RoundBtn } from '@/app/_components';
import { StyledLayoutContainer } from './styled';
import { RocketComponent, RocketComponentProps } from './rocket';

export const GetStarted: FC = () => {
  const rockets: RocketComponentProps[] = [
    { width: 700, top: '0%', left: '32%' },
    { width: 250, top: '0%', left: '25%' },
    { width: 450, top: '30%', left: '10%' },
    { width: 300, top: '45%', left: '75%' },
    { width: 200, top: '25%', left: '70%' },
    { width: 100, top: '20%', left: '85%' },
    { width: 400, top: '-20%', left: '75%' },
    { width: 400, top: '-20%', left: '5%' },
    { width: 200, top: '20%', left: '-5%' },
    { width: 250, top: '65%', left: '40%' },
    { width: 150, top: '75%', left: '4%' },
  ];

  return (
    <Stack className="h-[calc(50vh-100px)] md:h-[calc(100vh-150px)] px-6 md:px-0 justify-center md:items-center flex-row relative">
      <Box className="absolute w-full h-[50vh] md:h-screen">
        <StyledLayoutContainer className="absolute w-full h-full" />
        <Box className="w-screen h-24 bg-black bg-opacity-70 z-0 absolute -bottom-10 blur-xl" />
        {rockets.map(({ width, top, left }, idx) => (
          <RocketComponent key={idx} width={width} top={top} left={left} />
        ))}
      </Box>
      <Stack className="md:w-9/12 mt-4 md:mt-0 justify-start items-center gap-6 z-10">
        <ChipIacWorkflow labelProps={{ children: 'Introducing Integrated IaC Workflows' }} />
        <Typography className="text-center text-white text-3xl font-extrabold md:text-6xl md:font-black !leading-snug">
          Up to 4x faster <br />
          pipeline execution
        </Typography>
        <RoundBtn endIcon={<East />} className="bg-white text-black">
          Get Started
        </RoundBtn>
      </Stack>
    </Stack>
  );
};
