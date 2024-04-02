"use client";

import { FC, ReactNode } from "react";
import Image from "next/image";

import { East } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

interface AuditableDiscoverBoxProps {
  children: ReactNode;
}

const AuditableDiscoverBox: FC<AuditableDiscoverBoxProps> = ({ children }) => {
  return (
    <Box
      className="min-w-[455px] max-w-[555px] min-h-[560px] relative bg-stone-900 bg-opacity-70 rounded-xl border-2 border-neutral-800
      border-opacity-50 backdrop-blur-3xl overflow-hidden"
    >
      {children}
    </Box>
  );
};

export const AuditableSection: FC = () => {
  return (
    <Box className="relative h-[2500px]">
      <Box className="container top-[1300px] relative mb-32">
        <Typography className="text-center text-white text-[2rem] font-extrabold mb-8">
          Auditable Automation
        </Typography>

        <Stack className="flex-row gap-12 justify-center">
          <AuditableDiscoverBox>
            <Box className="mx-8 mt-8 min-h-[96px]">
              <Typography variant="caption" className="text-white text-2xl font-semibold">
                Git Diffs for every update{' '}
              </Typography>
              <Typography variant="caption" className="text-zinc-600 text-2xl font-semibold ">
                automates your build, test, and deployment workflow with simple and secure CI/CD.
              </Typography>
            </Box>
            <Box className="justify-start items-center gap-1 inline-flex mx-8 mt-5">
              <Typography className="text-white text-2xl font-semibold ">Discover Diffs</Typography>
              <East />
            </Box>
            <Stack direction="column" className="relative">
              <Image
                width={0}
                height={0}
                src="images/home/discover-diff.svg"
                alt=""
                className="w-full top-[-30px] absolute left-0"
              />
              <Image
                width={0}
                height={0}
                className="w-full left-[30px] top-[105px] absolute rounded-xl ml-2"
                src="images/home/git-diff.svg"
                alt=""
              />
            </Stack>
          </AuditableDiscoverBox>

          <AuditableDiscoverBox>
            <Box className="mx-8 mt-8 min-h-[96px]">
              <Typography variant="caption" className="text-white text-2xl font-semibold">
                Stack Jobs History{' '}
              </Typography>
              <Typography variant="caption" className="text-zinc-600 text-2xl font-semibold ">
                for Infrastructure Changes(how changes effected the infra)
              </Typography>
            </Box>
            <Box className="justify-start items-center gap-1 inline-flex mx-8 mt-5">
              <Typography className="text-white text-2xl font-semibold z-20">
                Discover Stack Job History
              </Typography>
              <East />
            </Box>
            <Image
              width={0}
              height={0}
              className="w-fit left-[30px] top-[200px] absolute z-10"
              src="images/home/latest-stack-job.svg"
              alt=""
            />
            <Box className="w-full h-96 absolute mix-blend-lighten bg-indigo-900 bg-opacity-60 rounded-full blur-3xl" />
          </AuditableDiscoverBox>
        </Stack>
      </Box>

      <Box className="w-10/12 flex-col justify-start items-start gap-2.5 flex relative top-[1250px] m-auto max-w-[1170px]">
        <Stack className="w-full py-10 bg-stone-900 bg-opacity-70 rounded-xl border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl items-center gap-10">
          <Stack className="self-stretch justify-center items-center gap-5">
            <Typography className="text-center text-white text-3xl font-extrabold ">
              Know Who & When(sys-audit)
            </Typography>
            <Box className="w-10/12 text-center">
              <Typography variant="caption" className="text-white text-2xl font-semibold ">
                Some sample description about{' '}
              </Typography>
              <Typography variant="caption" className="text-zinc-600 text-2xl font-semibold ">
                sys-audit. Some sample description about sys-auditSome sample description about
                sys-audit. Some sample description about sys-auditSome sample description about
                sys-audit.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>

      <Box className="w-full top-[2175px] absolute">
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
