import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { StyledDevOpsContainer } from '@/app/_components';

export const DevOpsSection: FC = () => {
  return (
    <Stack className="w-full bg-black justify-start items-start relative px-3 md:px-0 md:h-[1000px]">
      <StyledDevOpsContainer className="w-full relative rounded-3xl">
        <Box className="hidden w-4/12 h-96 right-[88px] top-[250px] absolute bg-teal-600 bg-opacity-30 rounded-full blur-3xl md:block" />
        <Box className="hidden w-52 h-52 left-[406px] top-[-14px] absolute bg-teal-600 bg-opacity-30 rounded-full blur-3xl md:block" />
        <Box className="top-[115px] my-24">
          <Box className="absolute top-80 left-3 w-1 h-80 origin-top-left -rotate-180 bg-gradient-to-b from-black via-teal-500 to-black rounded md:hidden" />
          <Box className="px-4 ml-4 md:ml-0 md:px-0">
            <Typography className="text-white text-xl font-extrabold mb-2 md:text-3xl md:text-center">
              DevOps: The Self-Service Way
            </Typography>
            <Typography className=" text-white text-opacity-50 text-base font-semibold md:text-2xl md:text-center md:max-w-2xl md:mx-auto">
              Revolutionize software deployment <br/> Our platform swiftly transforms software deployment,
              boosting efficiency and fostering innovation
            </Typography>
            <Stack className="flex-row items-center justify-start my-4 md:justify-center">
              <Typography className="text-center text-white text-sm font-semibold md:text-2xl">
                Explore Self-Service DevOps
              </Typography>
              <East />
            </Stack>
          </Box>
          <Stack className="relative bg-neutral-900 rounded-lg border border-zinc-800 z-10 w-full flex-row justify-center items-center md:bg-transparent md:rounded-none md:border-0 ">
            <Image
              width={0}
              height={0}
              className="w-4/6 md:w-fit"
              src="images/home/create-kubernet.svg"
              alt=""
            />
            <Image
              width={0}
              height={0}
              className="w-4/6 -mt-11 -ml-32 md:-mt-8 md:-ml-44 md:w-fit"
              src="images/home/pulumi-stack.svg"
              alt=""
            />
          </Stack>
        </Box>
      </StyledDevOpsContainer>
    </Stack>
  );
};
