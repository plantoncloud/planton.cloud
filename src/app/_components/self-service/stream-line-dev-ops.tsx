import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { East } from '@mui/icons-material';
import { ChipIacWorkflow, RoundBtn, StyledStreamLineContainer } from '@/app/_components';

export const StreamLineDevOps: FC = () => {
  return (
    <>
      <StyledStreamLineContainer className="w-full h-[50vh] md:h-screen absolute z-10 bg-cover bg-center" />
      <Stack className="md:hidden relative z-20 items-center pt-6">
        <ChipIacWorkflow className="z-20">Introducing Integrated IaC Workflows</ChipIacWorkflow>
      </Stack>
      <Stack className="h-[50vh] md:h-screen justify-center items-center flex-row">
        <Box className="relative z-10">
          <Box className="w-96 h-64 bg-fuchsia-950 rounded-full absolute top-44 blur-3xl bg-opacity-50 right-0" />
        </Box>
        <Stack className="w-11/12 md:w-9/12 justify-center items-center gap-6 z-10">
          <Typography className="text-center text-white text-2xl font-extrabold md:text-5xl md:font-black !leading-snug max-w-[920px]">
            Streamline DevOps: Fast, efficient, self-managed software deployment.
          </Typography>
          <Stack className="md:flex-row justify-start items-start gap-3.5">
            <RoundBtn endIcon={<East />} className="w-full md:w-auto bg-white text-black">
              Start Building Now
            </RoundBtn>
            <RoundBtn className="w-full md:w-auto border border-white text-white">
              Explore Features
            </RoundBtn>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
