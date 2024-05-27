import { FC } from 'react';
import Image from 'next/image';

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
      className={`w-[400%] md:w-[150%] aspect-square p-20 rounded-[117px] border-4 border-teal-600 blur-3xl ${parentBoxProps?.className}`}
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
    <Box className="pb-12 md:pb-36">
      <Box className="relative">
        <SquareRadient
          parentBoxProps={{
            className:
              'absolute -bottom-[150px] md:-bottom-[450px] left-1/2 transform -translate-x-1/2 rotate-45 origin-center',
          }}
        />
      </Box>
      <Stack className="mx-5 md:mx-auto items-center gap-6 md:gap-8">
        <Box className="z-10">
          <ChipIacWorkflow
            labelProps={{
              children: 'Introducing Integrated IaC Workflows',
              className: '!text-base',
            }}
          />
        </Box>
        <Stack className="self-stretch items-center gap-5 md:gap-10 relative">
          <Typography className="w-full md:w-10/12 lg:w-8/12 xl:w-4/12 text-center text-white text-[28px] !leading-snug md:text-5xl font-extrabold z-10">
            Automate your workflow from idea to production with {'Code->Cloud'}
          </Typography>
          <RoundBtn className="bg-white text-black px-8 py-4 text-base md:text-xl">
            Get Started with Code {`->`} Cloud
          </RoundBtn>
        </Stack>
        <Image
          src="images/home/dashboard.svg"
          alt=""
          width={0}
          height={0}
          className="w-fit z-20 md:w-6/12 md:mt-10"
        />
        <Typography className="text-center text-white text-sm font-medium leading-6 z-20 md:mt-20">
          Poised to Serve World-Class Organizations Like
        </Typography>
      </Stack>
      <OrganizationCarousel
        className="!mx-5 md:mx-auto mt-3 md:mt-16"
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 5 } }}
      />
      <Box className="w-full relative">
        <Box className="w-full md:w-[250%] aspect-square bg-gradient-to-br from-indigo-950 from-65% via-indigo-800 to-transparent to-70%  rounded-[200px] blur-3xl absolute -top-64 md:-top-10 rotate-45 left-1/2 transform -translate-x-1/2" />
      </Box>
      <Box className="relative mx-auto">
        <Stack className="hidden md:block absolute -top-28 w-full flex-row inset-0 items-center justify-between">
          <BlurRound />
          <BlurRound />
        </Stack>
      </Box>
    </Box>
  );
};
