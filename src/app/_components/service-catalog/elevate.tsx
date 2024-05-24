import { FC } from 'react';
import Image from 'next/image';
import { Box, Stack, Typography } from '@mui/material';
import { Add, East } from '@mui/icons-material';
import { ChipIacWorkflow, ElevateAnimLabel, ElevateBoxes, RoundBtn } from '@/app/_components';

export const Elevate: FC = () => {
  return (
    <Box className="relative">
      <Box className="absolute right-0 md:left-0 top-0">
        <Box className="relative w-fit">
          <Add className="absolute transform right-[50%] translate-x-1/2 md:-translate-x-1/2 -translate-y-1/2 md:left-[50%] top-[50%] text-3xl md:text-4xl" />
        </Box>
      </Box>
      <ElevateBoxes />
      <Stack className="absolute top-[18%] right-0 md:right-28 flex-row justify-end">
        <ElevateAnimLabel>
          Elevate your AI frontend with Planton Cloud
          <span className="block w-[2px] h-full bg-black relative bottom-[40px] left-[5px] animate-blink" />
        </ElevateAnimLabel>
        <Image
          src="/images/service-catalog/polygon-1.svg"
          alt=""
          width={0}
          height={0}
          className="w-fit -ml-1 transform scale-50 origin-left md:transform-none"
        />
      </Stack>

      <Stack className="flex-row items-center justify-center left-24 bottom-[30%] absolute">
        <Image
          src="/images/service-catalog/polygon-2.svg"
          alt=""
          width={0}
          height={0}
          className="w-[54px] h-[64px]"
        />
        <Box className="justify-start items-center gap-2.5 flex bg-zinc-900 rounded-[32px] border-2 border-neutral-600 px-[34px] py-[26px]">
          <Typography className="min-w-[500px] grow shrink basis-0 text-zinc-100 text-4xl font-bold">
            Up to 4x faster
            <br />
            pipeline execution
          </Typography>
          <ChipIacWorkflow>Introducing Integrated IaC Workflows</ChipIacWorkflow>
          <RoundBtn endIcon={<East />} className="bg-white text-black">
            Get Started
          </RoundBtn>
        </Box>
      </Stack>
      <Add className="absolute -right-[18px] -bottom-[18px]" fontSize="large" />
    </Box>
  );
};
