import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Link, Stack, Typography } from '@mui/material';

import { StyledDashboardImg } from '@/app/_components';

interface CodeCloudLabelProps {
  label: string;
}

const CodeCloudLabel: FC<CodeCloudLabelProps> = ({ label }) => {
  return (
    <Typography variant="caption" className="text-yellow-400 text-xl md:text-[32px] font-extrabold">
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
      className="px-6 py-4 bg-white bg-opacity-5 hover:bg-opacity-15 rounded-lg text-center text-white text-sm font-medium leading-tight inline-block whitespace-nowrap"
    >
      {label}
    </Link>
  );
};

const devOps: DevOpsChipProps[] = [
  { label: 'Self-Service DevOps', link: '/self-service' },
  { label: 'Integrated IaC Workflows', link: '/iac-workflow' },
  { label: 'Service Catalog', link: '/service-catalog' },
  { label: 'Auditable Automation', link: '/auditable-automation' },
];

const DevOpsRealm: FC = () => {
  return (
    <Stack className="gap-4 md:flex-row md:justify-center md:items-center">
      {/* <div className="w-[244px] h-[244px] left-0 top-[137px] absolute mix-blend-lighten bg-yellow-400 rounded-full blur-[134px]" /> */}
      <Typography className="text-white text-xl font-extrabold leading-7">
        Ignite Developer Success With
      </Typography>
      <Stack className="flex-row justify-center items-center gap-6 overflow-x-scroll w-[calc(100vw-10px)] md:w-auto">
        {devOps.map((devOp) => (
          <DevOpsChip {...devOp} />
        ))}
      </Stack>
    </Stack>
  );
};

export const CodeCloudSection: FC = () => {
  return (
    <Stack className="mt-16 md:items-center md:mt-40 px-5">
      <Box className="p-4 w-fit bg-primary-50 bg-opacity-5 rounded-xl border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl z-10">
        <DevOpsRealm />
      </Box>
      <Box className="w-full relative bg-gradient-to-b from-black via-black to-black h-[1270px]">
        <Box className="w-full md:w-9/12 absolute left-4 md:left-56">
          <Box className="w-0.5 h-96 top-[-155px] absolute bg-gradient-to-b from-white via-orange-200 to-black rounded" />
          <Box className="w-0.5 h-96 top-[600px] absolute origin-top-left -rotate-180 bg-gradient-to-b from-black via-orange-200 to-black rounded z-10" />
          <Box className="w-0.5 h-96 top-[-180px] absolute bg-gradient-to-b from-black via-orange-200 to-black rounded" />
          <Box className="w-10 h-10 left-[236px] top-[176px] absolute bg-orange-300 rounded-full blur-2xl" />
          <Box className="w-20 h-24 top-20 left-10 origin-top-left rotate-90 bg-yellow-400 rounded-full absolute blur-3xl" />
          <Image
            width={0}
            height={0}
            className="w-auto h-28 relative left-10 top-[245px] origin-top-left -rotate-180"
            src="/images/home/rocket.gif"
            alt=""
          />

          <Box className="left-8 md:left-20 top-[150px] absolute">
            <Stack className="flex-row items-center">
              <CodeCloudLabel label="Code" />
              <East />
              <CodeCloudLabel label="Cloud" />
            </Stack>
          </Box>

          <Box className="left-8 md:left-20 top-48 absolute bg-gradient-to-r from-yellow-200 via-white to-white text-transparent bg-clip-text">
            <Typography
              variant="caption"
              className="text-teal-600 text-base md:text-2xl font-semibold tracking-[-1px]"
            >
              Transition from codebase to cloud with elegance
            </Typography>
            <Typography variant="caption" className="text-base md:text-2xl font-semibold tracking-[-1px]">
              . The Developer Self-Service Platform deftly optimize Microservice rollouts and core
              Open-Source Deployments of Kubernates, melding agility and innovation within a
              framework of crystal-clear Transparency.
            </Typography>
          </Box>

          <Box className="absolute top-[675px] z-10">
            <Image width={473} height={650} src="images/home/curv1.svg" alt="" />
          </Box>

          <Box className="w-full -left-4 md:left-20 top-72 absolute pr-4 flex-col justify-start items-start inline-flex z-10">
            <StyledDashboardImg className="w-full h-96 md:h-[700px] bg-no-repeat bg-cover top-[40px] relative" />
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
