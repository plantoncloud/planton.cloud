import { FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { East, Email } from '@mui/icons-material';
import {
  RolesComponent,
  StyledLayoutContainer,
  ChipIacWorkflow,
  OrganizationCarousel,
} from '@/app/_components';

interface OrgLogoProps {
  width: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  src: string | StaticImport;
  alt?: string;
  className?: string;
}

const OrgLogo: FC<OrgLogoProps> = ({ width, height = 42, src, alt = '', className }) => {
  return (
    <Image
      width={width}
      height={height}
      alt={alt}
      className={`bg-transparent ${className}`}
      src={src}
    />
  );
};

const OrgList: FC = () => {
  return (
    <Stack className="flex-row justify-start items-center gap-5 ">
      <OrgLogo width={91} alt="Ghost" src="images/home/ghost.svg" />
      <OrgLogo width={107} alt="Buffer" src="images/home/buffer.svg" className="opacity-40" />
      <OrgLogo width={107} alt="Balsamiq" src="images/home/balsamiq.svg" />
      <OrgLogo width={111} alt="Basecamp" src="images/home/basecamp.svg" />
      <OrgLogo width={82} alt="Trelo" src="images/home/trello.svg" />
    </Stack>
  );
};

export const InternalDeveloperSection: FC = () => {
  return (
    <>
      <StyledLayoutContainer className="w-full h-[796px] absolute z-0 bg-cover" />
      <Stack className="gap-5 pt-5 px-5 md:gap-16 md:px-0 md:ml-[15%] md:pt-48">
        <Stack className="gap-7 z-10">
          <ChipIacWorkflow
            labelProps={{
              children: 'Introducing Integrated IaC Workflows',
            }}
            chipProps={{ className: 'w-full md:w-fit' }}
          />
          <Stack className="justify-start items-start gap-3">
            <Stack className="justify-start items-start">
              <Typography className="text-white text-base font-extrabold leading-normal">
                CloudNative
              </Typography>
              <Stack className="gap-2 md:flex-row">
                <Typography
                  variant="caption"
                  className="text-white text-4xl font-extrabold leading-10"
                >
                  Internal Developer
                </Typography>
                <RolesComponent />
              </Stack>
            </Stack>
            <Stack className="w-full p-3 bg-neutral-800 rounded-lg gap-3.5 md:w-auto">
              <Typography className="text-white text-base font-medium leading-snug ">
                Hop on board, its free!
              </Typography>
              <Stack className="justify-start gap-3 md:flex-row md:items-center">
                <Stack className="flex-row items-center bg-black rounded-lg border border-zinc-800 p-2.5">
                  <Email />
                  <Box className="w-5 h-px rotate-90 border border-zinc-600"></Box>
                  <Box className="text-zinc-600 text-xs font-medium w-56">
                    <TextField
                      fullWidth
                      placeholder="Your Company Name"
                      inputProps={{ className: 'text-white text-xs font-medium' }}
                    />
                  </Box>
                </Stack>
                <Button
                  endIcon={<East />}
                  variant="contained"
                  className="w-fit bg-primary-50 p-[10px] rounded-full text-white text-xs font-medium px-4"
                >
                  Get Started
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack className="justify-start items-start gap-3.5 z-10">
          <Typography className="text-center text-white text-sm font-medium leading-tight">
            Poised to Serve World-Class Organizations Like
          </Typography>
          <Box className="hidden md:block">
            <OrgList />
          </Box>
        </Stack>
        <Box className="md:hidden">
          <OrganizationCarousel spaceBetween={50} />
        </Box>
      </Stack>
    </>
  );
};
