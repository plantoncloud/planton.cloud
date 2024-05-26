import { FC } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

export const FromZeroToHero: FC = () => {
  return (
    <Stack className="px-6 justify-center items-center flex-row relative bg-gray-95 0 bg-blend-overlay md:-mt-20">
      <Box className="hidden md:block w-screen h-48 bg-black bg-opacity-70 absolute z-10 top-10 blur-xl" />
      <Box className="hidden md:block w-[700px] h-[600px] bg-fuchsia-950 bg-opacity-60 blur-3xl rounded-full absolute z-0 top-[300px] left-44" />
      <Stack className="md:w-8/12 justify-start z-10">
        <Stack className="justify-start md:items-center gap-2 md:gap-3 mb-4">
          <Typography className="md:text-center text-white text-xl md:text-4xl font-extrabold z-10">
            From Zero to Kubernetes Hero
          </Typography>
          <Typography className="md:text-center text-white text-opacity-50 text-base md:text-2xl font-semibold">
            Full-Fledged Clusters with No Setup Hassle. Enjoy a seamless start with our
            all-inclusive Kubernetes Clusters, designed for instant provisioning. No additional
            configuration required.
          </Typography>
          <Typography className="md:hidden text-white text-sm font-semibold z-10">
            Explore Self-Service DevOps {'->'}
          </Typography>
        </Stack>
        <Stack className="flex-row md:w-7/12">
          <Image
            src="images/self-service/create-kubernetes.svg"
            width={0}
            height={0}
            className="w-3/4 md:w-fit -ml-5 md:ml-0 -mt-5 md:mt-0"
            alt=""
          />
          <Image
            src="images/self-service/pulumi.svg"
            width={0}
            height={0}
            className="w-3/4 md:w-fit -ml-36 md:-ml-48 mt-8 md:mt-44"
            alt=""
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
