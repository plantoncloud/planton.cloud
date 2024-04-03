import { FC } from 'react';
import { Box, Stack, Typography, styled } from '@mui/material';
import { East } from '@mui/icons-material';
import { RoundBtn, StyledStreamLineContainer } from '@/app/_components';

export const StreamLineDevOps: FC = () => {
  return (
    <>
      <StyledStreamLineContainer className="w-full h-screen absolute z-10 bg-cover bg-center" />

      <Stack className="h-[calc(100vh-150px)] justify-center items-center flex-row">
        <Box className="relative z-10">
          <Box className="w-96 h-64 bg-fuchsia-950 rounded-full absolute top-44 blur-3xl bg-opacity-50 right-0" />
        </Box>

        <Stack className="w-9/12 justify-center items-center gap-6 z-10">
          <Typography className="w-11/12 text-center text-white text-5xl font-black leading-[75px] max-w-[920px]">
            Streamline DevOps: Fast, efficient, self-managed software deployment.
          </Typography>
          <Stack className="flex-row justify-start items-start gap-3.5">
            <RoundBtn endIcon={<East />} className="bg-white  text-black">
              Start Building Now
            </RoundBtn>
            <RoundBtn className="border border-white text-white">Explore Features</RoundBtn>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
