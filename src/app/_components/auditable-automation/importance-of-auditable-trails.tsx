import { FC, ReactNode } from 'react';
import Image from 'next/image';

import { Box, Divider, Grid, Link, Stack, Typography, TypographyProps } from '@mui/material';
import { BoldLabel, ChipLabel } from './what-is-auditable-automation';
import { FooterBanner, RoundBtnSmall } from '@/app/_components';
import { REQUEST_DEMO_URL } from '@/app/_utils/constants';

const SemiboldLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      className={`${props.className} text-white text-xl md:text-3xl font-semibold !leading-snug`}
    >
      {props.children}
    </Typography>
  );
};

export const MediumLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      className={`${props.className} text-white text-base md:text-xl font-medium !leading-snug`}
    >
      {props.children}
    </Typography>
  );
};

const MediumGrayLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      className={`${props.className} text-stone-500 text-base md:text-xl font-medium !leading-snug`}
    >
      {props.children}
    </Typography>
  );
};

interface LabelAndSubLabelSectionProps {
  label: string;
  subLabel: string;
}

const LabelAndSubLabelSection: FC<LabelAndSubLabelSectionProps> = ({ label, subLabel }) => {
  return (
    <Stack className="justify-start items-start gap-2.5">
      <SemiboldLabel>{label}</SemiboldLabel>
      <MediumGrayLabel>{subLabel}</MediumGrayLabel>
    </Stack>
  );
};

interface RoundIconProps {
  src: string;
  className?: string;
}

const RoundIcon: FC<RoundIconProps> = ({ src, className }) => {
  return (
    <Stack
      className={`items-center justify-center w-10 h-10 bg-zinc-800 rounded-full border border-zinc-700 ${className}`}
    >
      <Image src={src} alt="" width={0} height={0} className="w-fit" />
    </Stack>
  );
};

interface CenteredDividerrProps {
  children: ReactNode;
}

const CenteredDivider: FC<CenteredDividerrProps> = ({ children }) => {
  return (
    <Stack className="flex-row items-center gap-1">
      <Divider className="flex-grow border-zinc-800" />
      {children}
      <Divider className="flex-grow border-zinc-800" />
    </Stack>
  );
};

export const ImportanceOfAuditableTrails: FC = () => {
  return (
    <Box className="max-w-7xl px-4 md:px-0 mx-auto my-10">
      <CenteredDivider>
        <ChipLabel>The Importance of Auditable Trails</ChipLabel>
      </CenteredDivider>

      <Box className="relative border border-zinc-800 mt-5">
        <Box className="absolute left-[33.33%] w-px h-[calc(100%-175px)] border border-red-600 shadow-md z-0"></Box>
        <Box className="absolute left-[33%] w-3 h-60 top-[440px] bg-neutral-950 shadow-md blur-sm z-0"></Box>
        <Box className="absolute left-[33.30%] w-1 h-60 top-[440px] bg-red-600 blur-md shadow-md z-0"></Box>

        <Grid container className="bg-neutral-900">
          <Grid
            item
            xs={12}
            md={4}
            className="p-6 bg-gradient-to-tl from-black from-70% to-yellow-950 to-90% border border-zinc-800 "
          >
            <BoldLabel>Why Auditable Trails Matter?</BoldLabel>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            className="p-6 bg-gradient-to-r from-purple-950 via-blue-950 to-gray-950 border border-zinc-800 "
          >
            <Stack className="justify-center items-start gap-2.5">
              <MediumLabel>
                Trial Plantoncloud Enterprise to see our customizable platform, security, and
                performance in action.
              </MediumLabel>
              <RoundBtnSmall className="px-4 py-2.5 ">
                <Link target="_blank" href={REQUEST_DEMO_URL}>
                  Request For Demo Today!
                </Link>
              </RoundBtnSmall>
            </Stack>
          </Grid>
        </Grid>

        <Grid container className="mt-8 md:mt-32">
          <Grid item xs={12} md={4} className="p-6">
            <LabelAndSubLabelSection
              label="Seamless Change Integration."
              subLabel="Changes captured in a unified format, akin to Git diffs. Easy for teams to review &
                understand modifications."
            />
          </Grid>
          <Grid item xs={12} md={8} className="p-6">
            <Stack className="gap-3 md:gap-9">
              <Typography
                variant="caption"
                className="text-white text-base md:text-xl font-medium !leading-snug"
              >
                Develop.{' '}
                <Typography
                  variant="caption"
                  className="text-stone-500 text-base md:text-xl font-medium !leading-snug"
                >
                  GitHub, Bitbucket, GitLab, Azure DevOps or our CLI.
                </Typography>
              </Typography>
              <Image
                src="/images/auditable-automation/stackjob-row.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <Box className="p-4 md:p-6 bg-black rounded-lg border border-dashed border-white relative md:ml-12 md:mt-10">
                <Box className="relative">
                  <Image
                    src="/images/auditable-automation/line-1.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-fit absolute -left-[109px] -top-[120px]"
                  />
                  <RoundIcon
                    src="/images/auditable-automation/EyeIcon.svg"
                    className="absolute -top-[8px] -left-[75px]"
                  />
                </Box>
                <Typography
                  variant="caption"
                  className="text-stone-500 text-sm md:text-base font-medium leading-snug"
                >
                  Know{' '}
                  <Typography
                    variant="caption"
                    className="text-white text-sm md:text-base font-medium leading-snug"
                  >
                    who{' '}
                  </Typography>
                  and{' '}
                  <Typography
                    variant="caption"
                    className="text-white text-sm md:text-base font-medium leading-snug"
                  >
                    when{' '}
                  </Typography>
                  updated the resources along with status icon.
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container className="mt-32">
          <Grid item xs={12} md={4} className="p-6">
            <LabelAndSubLabelSection
              label="Navigating Change with Confidence"
              subLabel="Chronological record of modifications with “Version History” for enhanced decision-making
          and auditability."
            />
          </Grid>
          <Grid item xs={12} md={8} className="p-6">
            <Box className="relative w-fit bg-zinc-900 rounded-xl ml-11">
              <Image
                src="/images/auditable-automation/version-list.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <RoundIcon
                src="/images/auditable-automation/NavigateIcon.svg"
                className="absolute -left-[88px] top-[80px]"
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container className="mt-44">
          <Grid item xs={12}>
            <Box className="relative">
              <RoundIcon
                src="/images/auditable-automation/InterfaceIcon.svg"
                className="absolute left-[405px] -top-[60px]"
              />
              <Box className="ml-[23%] max-w-[650px] h-96 p-6 bg-zinc-900 rounded-lg border border-zinc-800">
                <LabelAndSubLabelSection
                  label="Developer-Friendly Interface"
                  subLabel="Leveraging familiar interfaces like Git diffs within our platform simplifies cloud
              management, making complex tasks more approachable for developers."
                />
              </Box>
              <Box className="absolute top-[50%] left-[30%] w-fit bg-zinc-900 rounded-xl">
                <Image
                  src="/images/auditable-automation/diff-yaml.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-fit"
                />
              </Box>
              <Box className="absolute left-[110%] top-[45%] w-[1095px] h-[500px] origin-top-left rotate-[100deg] opacity-30 mix-blend-screen  blur-[200px] justify-center items-start gap-24 inline-flex animate-pulse">
                <Box className="w-[500px] h-[500px] bg-purple-500 rounded-full" />
                <Box className="w-[500px] h-[500px] bg-orange-600 rounded-full" />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container className="mt-72">
          <Grid item xs={12} md={4} className="p-6">
            <LabelAndSubLabelSection
              label="Fortifying Cloud Infrastructure"
              subLabel="Auditable Automation not only tracks changes but also enhances security by ensuring each
          action is accountable."
            />
          </Grid>
          <Grid item xs={12} md={8} className="p-6">
            <Box className="relative w-fit bg-zinc-900 rounded-xl ml-11">
              <Image
                src="/images/auditable-automation/version-list.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <RoundIcon
                src="/images/auditable-automation/NavigateIcon.svg"
                className="absolute -left-[88px] top-[80px]"
              />
            </Box>
          </Grid>
        </Grid>

        <FooterBanner varient="subFooter" />
      </Box>
    </Box>
  );
};
