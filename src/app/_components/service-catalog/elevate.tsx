import { FC } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { East } from '@mui/icons-material';
import {
  ChipIacWorkflow,
  ElevateAnimLabel,
  ElevateBoxes,
  PlusStickyIcon,
  RoundBtn,
} from '@/app/_components';

export const Elevate: FC = () => {
  return (
    <Box className="relative">
      <PlusStickyIcon className="hidden md:block" xPosition="left" yPosition="top" />
      <PlusStickyIcon className="md:hidden" xPosition="right" yPosition="top" />
      <ElevateBoxes />
      <Stack className="absolute top-[18%] right-0 md:right-28 flex-row justify-end items-center md:items-stretch">
        <ElevateAnimLabel>
          Elevate your AI frontend with Planton Cloud
          <span className="hidden md:block w-[2px] h-full bg-black relative bottom-[40px] left-[5px] animate-blink" />
        </ElevateAnimLabel>
        <Image
          src="/images/service-catalog/polygon-1.svg"
          alt=""
          width={0}
          height={0}
          className="w-8 md:w-fit -ml-1 transform scale-50 origin-left md:transform-none"
        />
      </Stack>

      <Stack className="md:min-w-9/12 flex-row items-center justify-center left-[5%] md:left-24 bottom-[21%] md:bottom-[30%] absolute">
        <Image
          src="/images/service-catalog/polygon-2.svg"
          alt=""
          width={0}
          height={0}
          className="w-[27px] h-[32px] md:w-[54px] md:h-[64px]"
        />
        <Stack className="md:flex-row grow justify-start md:items-center gap-3 md:gap-2.5 bg-zinc-900 rounded-xl md:rounded-3xl border-2 border-neutral-600 p-2 md:px-6 md:py-4">
          <Typography className="grow text-zinc-100 text-base md:text-4xl font-bold">
            Up to 4x faster pipeline execution
          </Typography>
          <ChipIacWorkflow
            labelProps={{
              className: 'text-[8px]',
              children: 'Introducing Integrated IaC Workflows',
            }}
            chipProps={{
              className: '!px-2.5 !py-1.5 md:!px-6 md:!py-4',
            }}
            iconclassName="w-4 md:w-7"
          />
          <RoundBtn endIcon={<East />} className="w-fit bg-white text-black text-xs md:text-sm">
            Get Started
          </RoundBtn>
        </Stack>
      </Stack>
      <PlusStickyIcon className="md:hidden" xPosition="left" yPosition="bottom" />
      <PlusStickyIcon className="hidden md:block" xPosition="right" yPosition="bottom" />
    </Box>
  );
};
