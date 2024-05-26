import { FC, ReactNode } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

interface AuditableDiscoverBoxProps {
  children: ReactNode;
}

const AuditableDiscoverBox: FC<AuditableDiscoverBoxProps> = ({ children }) => {
  return (
    <Box
      className="w-full md:w-1/2 max-w-[555px] relative bg-stone-900 bg-opacity-70 rounded-xl border-2 border-neutral-800
      border-opacity-50 backdrop-blur-3xl overflow-hidden"
    >
      {children}
    </Box>
  );
};

export const AuditableSection: FC = () => {
  return (
    <Box className="mx-5 relative md:mx-0 ">
      <Box className="container relative mb-10 md:mb-20">
        <Typography className="text-center text-white text-2xl font-extrabold mb-8 md:text-[2rem]">
          Auditable Automation
        </Typography>
        <Stack className="gap-7 justify-center md:flex-row md:gap-12">
          <AuditableDiscoverBox>
            <Box className="mx-8 mt-8">
              <Typography
                variant="caption"
                className="text-white text-sm font-semibold md:text-2xl"
              >
                Git Diffs for every update{' '}
              </Typography>
              <Typography
                variant="caption"
                className="text-zinc-600 text-sm font-semibold md:text-2xl"
              >
                automates your build, test, and deployment workflow with simple and secure CI/CD.
              </Typography>
            </Box>
            <Stack className="flex-row justify-start items-center gap-1 mx-8 mt-5">
              <Typography className="text-white text-sm font-semibold md:text-2xl">
                Discover Diffs
              </Typography>
              <East />
            </Stack>
            <Stack>
              <Image
                width={0}
                height={0}
                src="images/home/discover-diff.svg"
                alt=""
                className="w-full z-10"
              />
              <Image
                width={0}
                height={0}
                className="w-full rounded-xl ml-8 -mt-14 md:-mt-16"
                src="images/home/git-diff.svg"
                alt=""
              />
            </Stack>
          </AuditableDiscoverBox>

          <AuditableDiscoverBox>
            <Stack className="mx-8 mt-8">
              <Box>
                <Typography
                  variant="caption"
                  className="text-white text-sm font-semibold md:text-2xl"
                >
                  Stack Jobs History{' '}
                </Typography>
                <Typography
                  variant="caption"
                  className="text-zinc-600 text-sm font-semibold md:text-2xl"
                >
                  for Infrastructure Changes(how changes effected the infra)
                </Typography>
                <Stack className="flex-row justify-start items-center gap-1 mt-4 md:mt-12">
                  <Typography className="text-white text-sm font-semibold md:text-2xl">
                    Discover Stack Job History
                  </Typography>
                  <East />
                </Stack>
              </Box>
              <Image
                width={0}
                height={0}
                className="w-fit z-10 mt-6 md:mt-12"
                src="images/home/latest-stack-job.svg"
                alt=""
              />
            </Stack>
            <Box className="w-full h-96 absolute top-44 mix-blend-lighten bg-indigo-900 bg-opacity-60 rounded-full blur-3xl" />
          </AuditableDiscoverBox>
        </Stack>
      </Box>

      <Box className="m-auto max-w-[1170px] px-5 pt-10  bg-stone-900 bg-opacity-70 rounded-xl border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl md:w-10/12 md:pb-10">
        <Stack className="self-stretch justify-center gap-5 md:items-center">
          <Typography className="text-white text-xl font-extrabold md:text-3xl">
            Know Who & When(sys-audit)
          </Typography>
          <Box className="w-10/12 md:text-center">
            <Typography variant="caption" className="text-white text-sm font-semibold md:text-2xl">
              Some sample description about{' '}
            </Typography>
            <Typography
              variant="caption"
              className="text-zinc-600 text-sm font-semibold md:text-2xl"
            >
              sys-audit. Some sample description about sys-auditSome sample description about
              sys-audit. Some sample description about sys-auditSome sample description about
              sys-audit.
            </Typography>
          </Box>
          <Box className="md:hidden h-20">
            <Image
              width={0}
              height={0}
              src="images/home/resource-header-mob.svg"
              alt=""
              className="absolute w-full -ml-5 -mt-6"
            />
          </Box>
        </Stack>
      </Box>

      <Box className="hidden w-full -mt-20 relative z-10 md:block">
        <Image
          width={0}
          height={0}
          src="images/home/resource-header.svg"
          alt=""
          className="mx-auto w-full"
        />
      </Box>
    </Box>
  );
};
