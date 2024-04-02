import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { StyledBgSquare, StyledDeveloperFriendlyInterface } from './styled';

interface RoundIconProps {
  src: string;
  width: number | `${number}`;
}

const RoundIcon: FC<RoundIconProps> = ({ src, width }) => {
  return (
    <Stack className="items-center justify-center p-4 rounded-full bg-[url('/images/code-to-cloud/cicle.svg')]">
      <Image src={src} width={width} height={0} alt="" />
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
      <Box className="max-w-7xl mx-auto mt-40 z-10">
        <Grid container columns={12} spacing={8}>
          <Grid item xs={6} className="flex">
            <Stack className="justify-between items-start px-[29px] py-[43px] bg-gradient-to-br from-indigo-700 to-violet-500 rounded-[19px] h-[412px] w-[575px] absolute overflow-hidden">
              <Box className="w-[547px] h-[565px] origin-bottom-right rotate-[20deg] bg-gradient-to-b from-emerald-500 from-30% via-violet-500 via-60% to-transparent to-85% rounded-full left-[275px] blur-[2px] opacity-60 absolute" />
              <Typography className="text-white text-[51px] font-black leading-[56px] z-10">
                From idea to launch, automate with
                <br /> Code{'->'} Cloud.
              </Typography>
              <Stack className="flex-row justify-start items-center gap-[8px]">
                <Typography className="text-white text-[19px] font-semibold ">
                  Get Started
                </Typography>
                <East />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack className="justify-between items-start gap-8 px-[51px] py-[43px] bg-blue-950 rounded-[19px]">
              <RoundIcon src="/images/auditable-automation/EyeIcon.svg" width="44" />
              <Typography className="text-white text-[51px] font-black leading-[56px]">
                Know who and when updated the resources along with status icon.
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <StyledDeveloperFriendlyInterface className="relative px-[51px] py-[43px] rounded-[19px] justify-start items-start gap-9 overflow-hidden">
              <Box className="w-[500px] h-[500px] origin-top-right rotate-[30deg] bg-gradient-to-b from-violet-900 to-gray-950 rounded-full blur-[3px] absolute top-20 -right-[240px] opacity-75" />
              <RoundIcon src="/images/auditable-automation/InterfaceIcon.svg" width="44" />
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
              <RoundIcon src="/images/code-to-cloud/cloud-Infrastructure.svg" width="44" />
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
