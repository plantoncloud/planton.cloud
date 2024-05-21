import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { StyledBgSquare, StyledDeveloperFriendlyInterface } from './styled';

interface RoundIconProps {
  src: string;
  className?: string;
}

const RoundIcon: FC<RoundIconProps> = ({ src, className }) => {
  return (
    <Stack
      className={`${className} items-center justify-center p-4 rounded-full bg-[url('/images/code-to-cloud/circle.svg')] bg-cover`}
    >
      <Image src={src} width={0} height={0} alt="" className="w-full" />
    </Stack>
  );
};

export const IdeaToLaunch: FC = () => {
  return (
    <Box className="w-full bg-black relative">
      <Box className="relative animate-pulse">
        <Box className="w-[696px] h-[400px] bg-indigo-700 rounded-full absolute -left-44 top-[200px] blur-3xl opacity-20" />
        <Box className="w-[696px] h-[656px] bg-orange-700 rounded-full absolute -left-44 top-[400px] blur-3xl opacity-20" />
      </Box>
      <Box className="max-w-7xl mx-5 md:mx-auto z-10">
        <Grid container columns={12} spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={6} className="flex">
            <Stack className="justify-between items-start px-7 py-6 md:py-10 gap-10 md:gap-20 bg-gradient-to-br from-indigo-700 to-violet-500 rounded-3xl relative overflow-hidden">
              <Box className="w-full aspect-square origin-bottom-right bg-gradient-to-b from-emerald-500 from-30% via-violet-500 via-60% to-transparent to-85% rounded-full blur-[2px] opacity-60 absolute -top-10 left-[65%]" />
              <Typography className="text-white text-2xl md:text-5xl font-extrabold md:font-black !leading-snug z-10">
                From idea to launch, automate with {''}
                <Typography
                  className="text-white text-2xl md:text-5xl font-black !leading-snug whitespace-nowrap"
                  variant="caption"
                >
                  {'Code->Cloud'}
                </Typography>
              </Typography>
              <Stack className="flex-row justify-start items-center gap-2">
                <Typography className="text-white text-lg font-semibold ">Get Started</Typography>
                <East />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack className="justify-between items-start px-7 py-6 md:py-10 gap-5 md:gap-10 bg-blue-950 rounded-3xl">
              <RoundIcon src="/images/auditable-automation/EyeIcon.svg" className="w-14 md:w-20" />
              <Typography className="text-white text-2xl font-extrabold md:text-5xl md:font-black !leading-snug">
                Know who and when updated the resources along with status icon.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <StyledDeveloperFriendlyInterface className="relative px-[51px] py-[43px] rounded-[19px] justify-start items-start gap-9 overflow-hidden">
              <Box className="w-[500px] h-[500px] origin-top-right rotate-[30deg] bg-gradient-to-b from-violet-900 to-gray-950 rounded-full blur-[3px] absolute top-20 -right-[240px] opacity-75" />
              <RoundIcon
                src="/images/auditable-automation/InterfaceIcon.svg"
                className="w-14 md:w-20"
              />
              <Box className="w-6/12 justify-start items-start gap-[19px]">
                <Typography className="self-stretch text-white text-[51px] font-black leading-[56px]">
                  Developer-Friendly Interface
                </Typography>
                <Typography className="self-stretch text-stone-300 text-xl font-semibold leading-[30px]">
                  By integrating Git diffs, our platform transforms intricate cloud management into
                  straightforward tasks, enhancing developer accessibility and simplifying
                  complexity.
                </Typography>
              </Box>
              <Image
                src="/images/auditable-automation/diff-yaml.svg"
                alt=""
                width={0}
                height={0}
                className="absolute top-44 -right-10 w-fit rounded-[11px]"
              />
            </StyledDeveloperFriendlyInterface>
          </Grid>
          <Grid item xs={12} className="relative">
            <Box className="w-[1476px] h-[591px] px-[50px] left-[-36px] top-[600px] absolute bg-black flex-col justify-center items-start inline-flex">
              <Box className="w-[520px] h-[520px] origin-top-left rotate-[-75deg] bg-gradient-to-bl from-slate-950 from-40% to-slate-500 to-90 rounded-[43px] left-5 absolute" />
              <StyledBgSquare className="w-[520px] h-[600px] origin-top-right rotate-[30deg] relative top-[250px] left-36" />
            </Box>
            <Stack className="px-[51px] py-[43px] rounded-[20px] shadow border-2 border-neutral-700 justify-start items-start gap-9 relative z-10 bg-slate-950 bg-opacity-60 backdrop-blur-md">
              <RoundIcon
                src="/images/code-to-cloud/cloud-Infrastructure.svg"
                className="w-14 md:w-20"
              />
              <Stack className="w-8/12 justify-start items-start gap-[19px]">
                <Typography className="self-stretch text-white text-[51px] font-black leading-[56px]">
                  Navigating Change with Confidence
                </Typography>
                <Typography className="self-stretch text-stone-300 text-xl font-semibold leading-[30px]">
                  &#34;Version History&#34; provides a detailed, chronological log of modifications,
                  enabling better informed decision-making and enhancing transparency. This feature
                  aids in tracking progress, facilitates retrospectives, and ensures robust
                  auditability within projects.
                </Typography>
              </Stack>
              <Box className="relative w-[927px] h-[435px] ml-auto">
                <Image
                  src="/images/auditable-automation/version-list.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="absolute top-0 -right-[51px] w-full  bg-zinc-900 rounded-[18px]"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
