import { FC } from 'react';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { East, Email } from '@mui/icons-material';
import { RolesComponent, StyledLayoutContainer, ChipIacWorkflow } from '@/app/_components';

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
      <Stack className="pl-64 pt-28 gap-14">
        <Stack className="gap-7 z-10">
          <ChipIacWorkflow>Introducing Integrated IaC Workflows</ChipIacWorkflow>

          <Stack className="justify-start items-start gap-3">
            <Stack className="flex-col justify-start items-start">
              <Typography className="text-white text-base font-extrabold leading-normal">
                CloudNative
              </Typography>
              <Stack className="flex-col justify-start items-start gap-2.5">
                <Stack className="flex-row justify-start items-center gap-2">
                  <Typography
                    variant="caption"
                    className="text-white text-4xl font-extrabold leading-10"
                  >
                    Internal Developer
                  </Typography>
                  <RolesComponent />
                </Stack>
              </Stack>
            </Stack>
            <Stack className="p-3 bg-neutral-800 rounded-lg gap-3.5">
              <Typography className="text-white text-base font-medium leading-snug ">
                Hop on board, its free!
              </Typography>
              <Stack className="justify-start items-center gap-3 flex-row ">
                <Stack className="flex-row items-center bg-black rounded-lg border border-zinc-800 p-2.5">
                  <Email />
                  <Box className="w-5 h-px rotate-90 border border-zinc-600"></Box>
                  <Box className="text-zinc-600 text-xs font-medium w-56">
                    <TextField
                      fullWidth
                      placeholder="Your Company Name"
                      inputProps={{ className: 'text-white' }}
                    />
                  </Box>
                </Stack>
                <Button
                  endIcon={<East />}
                  variant="contained"
                  className="bg-primary-50 p-[10px] rounded-full text-white text-xs font-medium  px-4"
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
          <OrgList />
        </Stack>
      </Stack>
    </>
  );
};
