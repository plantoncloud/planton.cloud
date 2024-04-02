'use client';

import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Link, Stack, Typography } from '@mui/material';

import { styled } from '@mui/system';

interface CodeCloudLabelProps {
  label: string;
}

const CodeCloudLabel: FC<CodeCloudLabelProps> = ({ label }) => {
  return (
    <Typography variant="caption" className="text-yellow-400 text-[32px] font-extrabold">
      {label}
    </Typography>
  );
};

interface DevOpsChipProps {
  label: string;
  link: string;
}

const DevOpsChip: FC<DevOpsChipProps> = ({ label, link }) => {
  return (
    <Link
      href={link}
      className="px-6 py-4 bg-white bg-opacity-5 hover:bg-opacity-15 rounded-lg text-center text-white text-sm font-medium leading-tight"
    >
      {label}
    </Link>
  );
};

const DevOpsRealm: FC = () => {
  return (
    <Stack className="flex-row justify-center items-center gap-4">
      {/* <div className="w-[244px] h-[244px] left-0 top-[137px] absolute mix-blend-lighten bg-yellow-400 rounded-full blur-[134px]" /> */}
      <Typography className="text-center text-white text-xl font-extrabold leading-7">
        Ignite Developer Success With
      </Typography>
      <Stack className="flex-row justify-center items-center gap-6 ">
        <DevOpsChip label="Self-Service DevOps" link="/self-service" />
        <DevOpsChip label="Instant IaC Workflows" link="/iac-workflow" />
        <DevOpsChip label="Service Catalog" link="/service-catalog" />
        <DevOpsChip label="Auditable Automation" link="/auditable-automation" />
      </Stack>
    </Stack>
  );
};

const StyledDashboardImg = styled(Box)(() => ({
  backgroundImage:
    'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.95) 100%), url(/images/home/dashboard.svg)',
}));

export const CodeCloudSection: FC = () => {
  return (
    <Stack className="items-center mt-40">
      <Stack className="p-4 w-fit flex-row gap-4 bg-primary-50 bg-opacity-5 rounded-xl border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl z-10">
        <DevOpsRealm />
      </Stack>
      <Box className="w-full relative bg-gradient-to-b from-black via-black to-black h-[1270px]">
        <Box className="w-0.5 h-96 left-[254px] top-[-155px] absolute bg-gradient-to-b from-white via-orange-200 to-black rounded" />
        <Box className="w-0.5 h-96 left-[257px] top-[600px] absolute origin-top-left -rotate-180 bg-gradient-to-b from-black via-orange-200 to-black rounded z-10" />
        <Box className="w-0.5 h-96 left-[254px] top-[-180px] absolute bg-gradient-to-b from-black via-orange-200 to-black rounded" />
        <Box className="left-[304px] top-[150px] absolute">
          <Stack className="flex-row items-center">
            <CodeCloudLabel label="Code" />
            <East />
            <CodeCloudLabel label="Cloud" />
          </Stack>
        </Box>
        <Box className="w-10 h-10 left-[236px] top-[176px] absolute bg-orange-300 rounded-full blur-2xl" />
        <Image
          width={0}
          height={0}
          className="w-auto h-28 left-[298px] top-[245px] absolute origin-top-left -rotate-180"
          src="/images/home/rocket.gif"
          alt=""
        />
        <Box className="w-8/12 left-[304px] top-[200px] absolute bg-gradient-to-r from-yellow-200 via-white to-white text-transparent bg-clip-text">
          <Typography
            variant="caption"
            className="text-teal-600 text-2xl font-semibold tracking-[-1px]"
          >
            Transition from codebase to cloud with elegance
          </Typography>
          <Typography variant="caption" className="text-2xl font-semibold tracking-[-1px]">
            . The Developer Self-Service Platform deftly optimize Microservice rollouts and core
            Open-Source Deployments of Kubernates, melding agility and innovation within a framework
            of crystal-clear Transparency.
          </Typography>
        </Box>
        <Box className="absolute left-64 top-[675px] z-10">
          <Image width={473} height={650} src="images/home/curv1.svg" alt="" />
        </Box>
        <Box className="w-8/12 left-[304px] top-[300px] absolute flex-col justify-start items-start inline-flex">
          <Box className="w-20 h-20 origin-top-left rotate-90 bg-yellow-400 rounded-full blur-3xl absolute top-[-240px]" />
          <StyledDashboardImg className="w-full h-[700px] bg-no-repeat bg-cover top-[40px] relative" />
          {/* <Box className="w-96 h-96 bg-gradient-to-br from-black via-black to-black" /> */}
          {/* <Box className="w-96 h-96 bg-gradient-to-b from-black via-black to-black" /> */}
        </Box>
      </Box>
    </Stack>
  );
};
