import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, BoxProps, Stack, Typography } from '@mui/material';
import { ChipIacWorkflow, RoundBtn, OrganizationCarousel } from '@/app/_components';

const BlurRound: FC<BoxProps> = (props) => {
  return (
    <Box
      {...props}
      className={`w-[250px] h-[300px] bg-gradient-to-b from-indigo-950 to-blue-950 to-50% rounded-3xl z-10 blur-3xl ${props.className}`}
    />
  );
};

interface SquareRadientProps {
  parentBoxProps?: BoxProps;
  childBoxProps?: BoxProps;
}

const SquareRadient: FC<SquareRadientProps> = ({ parentBoxProps, childBoxProps }) => {
  return (
    <Box
      {...parentBoxProps}
      className={` w-[2800px] h-[2800px] p-20 rounded-[117px] border-4 border-teal-600 blur-3xl ${parentBoxProps?.className}`}
    >
      <Box
        {...childBoxProps}
        className={`w-full h-full bg-gradient-to-br from-slate-950 from-65% via-indigo-800 to-indigo-900 rounded-[32px] border-4 border-teal-600 ${childBoxProps?.className}`}
      />
    </Box>
  );
};

export const Automate: FC = () => {
  return (
    <>
      <Box className="relative">
        <SquareRadient
          parentBoxProps={{
            className:
              'absolute -top-[2400px] left-1/2 transform -translate-x-1/2 rotate-45 origin-center',
          }}
        />
      </Box>
      <Stack className="mx-auto items-center gap-8">
        <Box className="z-10">
          <ChipIacWorkflow>Introducing Integrated IaC Workflows</ChipIacWorkflow>
        </Box>
        <Stack className="self-stretch items-center gap-10 relative">
          <Typography className="w-4/12 text-center text-white text-5xl font-extrabold leading-snug z-10">
            Automate your workflow <br /> from idea to production with Code{'->'} Cloud
          </Typography>
          <RoundBtn
            endIcon={
              <Stack className="flex-row gap-1">
                Get Started with Code
                <East />
                Cloud
              </Stack>
            }
            className="bg-white text-black"
          />
        </Stack>
        <Image
          src="images/home/dashboard.svg"
          alt=""
          width={0}
          height={0}
          className="w-6/12 mt-10 z-10"
        />

        <Box className="w-[150vh] h-[150vh] bg-gradient-to-br from-indigo-950 from-65% via-indigo-800 to-transparent to-70% top-[650px] rotate-45 rounded-[200px] blur-3xl absolute" />
        <Typography className="text-center text-white text-sm font-medium leading-6 mt-20 z-10">
          Poised to Serve World-Class Organizations Like
        </Typography>
      </Stack>
      <Box className="relative mx-auto mt-10">
        <Stack className="absolute -top-28 w-full flex-row inset-0 items-center justify-between">
          <BlurRound />
          <BlurRound />
        </Stack>
        <OrganizationCarousel />
      </Box>
    </>
  );
};
