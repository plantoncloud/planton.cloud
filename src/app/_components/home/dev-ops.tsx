import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { StyledDevOpsContainer } from '@/app/_components';

export const DevOpsSection: FC = () => {
  return (
    <Box className="w-full h-[1000px] bg-black flex-col justify-start items-start gap-2.5 inline-flex relative text-center">
      <StyledDevOpsContainer className="w-full h-full relative rounded-3xl">
        <Box className="w-4/12 h-96 right-[88px] top-[250px] absolute bg-teal-600 bg-opacity-30 rounded-full blur-3xl" />
        <Box className="top-[115px] my-24">
          <Typography className="text-white text-3xl font-extrabold mb-2">
            DevOps: The Self-Service Way
          </Typography>

          <Typography className="w-[700px] m-auto text-white text-opacity-50 text-2xl font-semibold ">
            Revolutionize software deployment <br /> Our platform swiftly transforms software
            deployment, boosting efficiency and fostering innovation
          </Typography>

          <Stack className="flex-row items-center justify-center my-4">
            <Typography className="text-center text-white text-2xl font-semibold ">
              Explore Self-Service DevOps
            </Typography>
            <East />
          </Stack>
          <Stack className="w-full flex-row justify-center items-center">
            <Image
              width={0}
              height={0}
              className="w-fit"
              src="images/home/create-kubernet.svg"
              alt=""
            />
            <Image
              width={0}
              height={0}
              className="w-fit -mt-[30px] -ml-[180px]"
              src="images/home/pulumi-stack.svg"
              alt=""
            />
          </Stack>
        </Box>
        <Box className="w-52 h-52 left-[406px] top-[-14px] absolute bg-teal-600 bg-opacity-30 rounded-full blur-3xl" />
      </StyledDevOpsContainer>
    </Box>
  );
};
