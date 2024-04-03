import { FC } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';

export const FromZeroToHero: FC = () => {
  return (
    <Stack className="justify-center items-center flex-row relative bg-gray-95 0 bg-blend-overlay">
      <Box className="w-screen h-48 bg-black bg-opacity-70 absolute z-10 top-10 blur-xl" />
      <Box className="w-[700px] h-[600px] rotate-45 bg-fuchsia-950 bg-opacity-60 blur-3xl rounded-full absolute z-0 top-[300px] left-44" />
      <Stack className="w-8/12 justify-start z-10">
        <Stack className="justify-start items-center gap-3 mb-4">
          <Typography className="text-center text-white text-4xl font-extrabold z-10">
            From Zero to Kubernetes Hero
          </Typography>
          <Typography className="text-center text-white text-opacity-50 text-2xl font-semibold">
            Full-Fledged Clusters with No Setup Hassle. Enjoy a seamless start with our
            all-inclusive Kubernetes Clusters, designed for instant provisioning. No additional
            configuration required.
          </Typography>
        </Stack>
        <Stack className="flex-row w-7/12">
          <Image
            src="images/self-service/create-kubernetes.svg"
            width={0}
            height={0}
            className="w-fit "
            alt=""
          />
          <Image
            src="images/self-service/pulumi.svg"
            width={0}
            height={0}
            className="w-fit -ml-48 mt-44"
            alt=""
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
