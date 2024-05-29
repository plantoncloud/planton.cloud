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
  className?: string;
}

const LabelAndSubLabelSection: FC<LabelAndSubLabelSectionProps> = ({
  label,
  subLabel,
  className,
}) => {
  return (
    <Stack className={`${className} justify-start items-start gap-2.5`}>
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

      <Box className="relative md:border border-zinc-800 mt-5">
        <Box className="hidden md:block absolute left-[33.33%] w-px h-[calc(100%-175px)] border border-red-600 shadow-md z-0"></Box>
        <Box className="absolute left-[33%] w-3 h-60 top-[440px] bg-neutral-950 shadow-md blur-sm z-0"></Box>
        <Box className="absolute left-[33.30%] w-1 h-60 top-[440px] bg-red-600 blur-md shadow-md z-0"></Box>

        <Grid container className="bg-neutral-900 relative">
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
          <Box
            className="md:hidden h-20 w-px border transform absolute left-5 -bottom-16 -z-10"
            style={{
              borderImageSource:
                'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
              borderImageSlice: 1,
            }}
          />
        </Grid>

        <Grid container className="pb-14 md:p-0 pl-5 md:pl-0 mt-32 relative">
          <Box className="absolute h-full md:hidden">
            <Box className="relative h-full ">
              <Box
                className="h-full w-px border transform absolute -top-3"
                style={{
                  borderImageSource:
                    'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
                  borderImageSlice: 1,
                }}
              />
              <Box className="w-10 h-10 relative -left-1/2 top-6">
                <Box className="w-10 h-10 left-0 top-0 absolute bg-teal-500 rounded-full blur-xl" />
                <Image
                  src="/images/auditable-automation/NavigateIcon.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-5 h-5 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-20"
                />
              </Box>
              <Box className="w-10 h-10 relative -left-1/2 -bottom-3/4">
                <Image
                  src="/images/auditable-automation/InterfaceIcon.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-5 h-5 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-20"
                />
              </Box>
            </Box>
          </Box>
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
                <Box className="hidden md:block relative">
                  <Image
                    src="/images/auditable-automation/line-1.svg"
                    alt=""
                    width={0}
                    height={0}
                    className="w-fit absolute -left-[109px] -top-[120px]"
                  />
                  <RoundIcon
                    src="/images/auditable-automation/EyeIcon.svg"
                    className="hidden md:flex absolute -top-[8px] -left-[75px]"
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

        <Grid container className="pt-6 pb-16 md:p-0 md:mt-32">
          <Grid item xs={12} md={4} className="relative md:p-6">
            <LabelAndSubLabelSection
              label="Navigating Change with Confidence"
              subLabel="Chronological record of modifications with “Version History” for enhanced decision-making
          and auditability."
              className="ml-12 md:ml-0"
            />
            <Box className="md:hidden absolute left-0 top-0">
              <Box className="w-10 h-10 relative">
                <Box className="w-10 h-10 left-0 top-0 absolute bg-purple-500 rounded-full blur-xl" />
                <Box
                  className="h-36 w-px border transform left-1/2 -translate-x-1/2 -top-3 absolute"
                  style={{
                    borderImageSource:
                      'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
                    borderImageSlice: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} className="py-6 md:p-6">
            <Box className="relative w-fit bg-zinc-900 rounded-xl md:ml-11">
              <Image
                src="/images/auditable-automation/version-list.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <RoundIcon
                src="/images/auditable-automation/NavigateIcon.svg"
                className="hidden md:flex absolute -left-[88px] top-[80px]"
              />
              <Box
                className="md:hidden h-12 w-px border transform absolute left-5"
                style={{
                  borderImageSource:
                    'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
                  borderImageSlice: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container className="pt-6 pb-16 md:p-0 md:mt-44">
          <Grid item xs={12}>
            <Box className="relative">
              <RoundIcon
                src="/images/auditable-automation/InterfaceIcon.svg"
                className="hidden md:flex absolute left-[405px] -top-[60px]"
              />
              <Box className="relative max-w-[650px] md:h-96 md:p-6 md:ml-[23%] md:bg-zinc-900 rounded-lg md:border border-zinc-800">
                <LabelAndSubLabelSection
                  label="Developer-Friendly Interface"
                  subLabel="Leveraging familiar interfaces like Git diffs within our platform simplifies cloud
              management, making complex tasks more approachable for developers."
                  className="ml-12 md:ml-0"
                />
                <Box className="md:hidden absolute top-0">
                  <Box className="w-10 h-10 relative">
                    <Box className="w-10 h-10 left-0 top-0 absolute bg-green-500 rounded-full blur-xl" />
                    <Box
                      className="h-32 w-px border transform left-1/2 -translate-x-1/2 absolute"
                      style={{
                        borderImageSource:
                          'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
                        borderImageSlice: 1,
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <Box className="w-fit mt-6 md:mt-0 md:absolute md:top-[50%] md:left-[30%] bg-zinc-900 rounded-xl relative">
                <Image
                  src="/images/auditable-automation/diff-yaml.svg"
                  alt=""
                  width={0}
                  height={0}
                  className="w-fit"
                />
                <Box
                  className="md:hidden h-12 w-px border transform absolute left-7"
                  style={{
                    borderImageSource:
                      'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
                    borderImageSlice: 1,
                  }}
                />
              </Box>
              <Stack className="hidden md:flex flex-row absolute left-[110%] top-[45%] w-[1095px] h-[500px] origin-top-left rotate-[100deg] opacity-30 mix-blend-screen  blur-[200px] justify-center items-start gap-24 animate-pulse">
                <Box className="w-[500px] h-[500px] bg-purple-500 rounded-full" />
                <Box className="w-[500px] h-[500px] bg-orange-600 rounded-full" />
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <Grid container className="md:mt-72">
          <Grid item xs={12} md={4} className="relative p-6">
            <LabelAndSubLabelSection
              label="Fortifying Cloud Infrastructure"
              subLabel="Auditable Automation not only tracks changes but also enhances security by ensuring each
          action is accountable."
              className="ml-8 md:ml-0"
            />
            <Box className="md:hidden absolute left-2 top-6">
              <Box className="w-10 h-10 relative">
                <Box className="w-10 h-10 left-0 top-0 absolute bg-cyan-500 rounded-full blur-xl" />
                <Image
                  src="/images/code-to-cloud/cloud-Infrastructure.svg"
                  width={0}
                  height={0}
                  alt=""
                  className="w-5 h-5 transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute z-10"
                />
                <Box
                  className="h-36 w-px border transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 absolute"
                  style={{
                    borderImageSource:
                      'linear-gradient(133deg, #00BABA -23.75%, rgba(159, 11, 108, 0.67) 30.1%, rgba(0, 0, 0, 0.00) 97.94%)',
                    borderImageSlice: 1,
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8} className="px-3 pb-6 md:p-6">
            <Box className="relative w-fit bg-zinc-900 rounded-xl md:ml-11">
              <Image
                src="/images/auditable-automation/version-list.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <RoundIcon
                src="/images/auditable-automation/NavigateIcon.svg"
                className="hidden md:flex absolute -left-[88px] top-[80px]"
              />
            </Box>
          </Grid>
        </Grid>

        <FooterBanner varient="subFooter" />
      </Box>
    </Box>
  );
};
