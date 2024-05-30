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
            <Stack className="w-full justify-between items-start px-6 md:px-7 py-6 md:py-10 gap-10 md:gap-20 bg-gradient-to-br from-indigo-700 to-violet-500 rounded-3xl relative overflow-hidden">
              <Box className="w-full aspect-square origin-bottom-right bg-gradient-to-b from-emerald-500 from-30% via-violet-500 via-60% to-transparent to-85% rounded-full blur-sm opacity-60 absolute -top-10 left-[65%]" />
              <Typography className="text-white text-2xl md:text-5xl font-extrabold md:font-black !leading-snug z-10">
                From idea to launch, automate with <br />
                <Typography
                  className="text-white text-2xl md:text-5xl font-extrabold md:font-black !leading-snug whitespace-nowrap"
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
            <Stack className="justify-between items-start px-6 md:px-14 py-6 md:py-10 gap-5 md:gap-10 bg-blue-950 rounded-3xl">
              <RoundIcon src="/images/auditable-automation/EyeIcon.svg" className="w-14 md:w-20" />
              <Typography className="text-white text-2xl font-extrabold md:text-5xl md:font-black !leading-snug">
                Know who and when updated the resources along with status icon.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <StyledDeveloperFriendlyInterface className="relative px-6 md:px-14 py-6 md:py-10 rounded-3xl justify-start items-start gap-5 md:gap-10 overflow-hidden z-10">
              <Box className="w-[150%] md:w-1/2 aspect-square origin-top-right bg-gradient-to-b from-violet-900 to-gray-950 rounded-full blur-sm absolute opacity-60 -top-0 left-[60%] md:-top-20 md:left-[70%]" />
              <RoundIcon
                src="/images/auditable-automation/InterfaceIcon.svg"
                className="w-14 md:w-20"
              />
              <Grid container columns={12} spacing={{ xs: 3, md: 0 }}>
                <Grid item xs={12} md={6}>
                  <Stack className="justify-start items-start gap-2.5 md:gap-5">
                    <Typography className="self-stretch text-white text-2xl md:text-5xl font-extrabold md:font-black !leading-snug">
                      Developer-Friendly Interface
                    </Typography>
                    <Typography className="self-stretch text-stone-300 text-base md:text-xl font-semibold z-10">
                      By integrating Git diffs, our platform transforms intricate cloud management
                      into straightforward tasks, enhancing developer accessibility and simplifying
                      complexity.
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box className="h-56 md:h-auto">
                    <Image
                      src="/images/auditable-automation/diff-yaml.svg"
                      alt=""
                      width={0}
                      height={0}
                      className="absolute w-fit transform scale-150 origin-top-left md:transform-none  md:-bottom-11 md:-right-14 rounded-xl"
                    />
                  </Box>
                </Grid>
              </Grid>
            </StyledDeveloperFriendlyInterface>
          </Grid>
          <Grid item xs={12} className="relative">
            <Box className="hidden md:block w-[1476px] h-[591px] -left-9 top-[600px] absolute bg-black">
              <Box className="hidden md:block w-[520px] h-[520px] origin-top-left rotate-[-75deg] bg-gradient-to-bl from-slate-950 from-40% to-slate-500 to-90 rounded-[43px] left-5 absolute" />
              <StyledBgSquare className="hidden md:block w-[520px] h-[600px] origin-top-right rotate-[30deg] relative top-[250px] left-36" />
            </Box>
            <Box className="md:hidden w-[130%] aspect-square origin-top-left rotate-[30deg] bg-gradient-to-r from-purple-500 to-teal-600 rounded-3xl shadow-inner absolute -bottom-52" />
            <Stack className="px-6 md:px-14 py-6 md:py-10 rounded-3xl shadow border-2 border-neutral-700 justify-start items-start gap-5 md:gap-10 relative z-10 bg-slate-950 bg-opacity-60 backdrop-blur-md overflow-hidden">
              <RoundIcon
                src="/images/code-to-cloud/cloud-Infrastructure.svg"
                className="w-14 md:w-20"
              />
              <Stack className="md:w-8/12 justify-start items-start gap-2.5 md:gap-5">
                <Typography className="self-stretch text-white text-2xl md:text-5xl font-extrabold md:font-black !leading-snug">
                  Navigating Change with Confidence
                </Typography>
                <Typography className="self-stretch text-stone-300 text-base md:text-xl font-semibold ">
                  &#34;Version History&#34; provides a detailed, chronological log of modifications,
                  enabling better informed decision-making and enhancing transparency. This feature
                  aids in tracking progress, facilitates retrospectives, and ensures robust
                  auditability within projects.
                </Typography>
              </Stack>
              <Box className="h-60 md:h-96">
                <Image
                  src="/images/auditable-automation/version-list.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="absolute w-fit transform scale-150 origin-top-left md:transform-none md:bottom-0 md:right-0 md:w-3/4 bg-zinc-900 rounded-2xl"
                />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
