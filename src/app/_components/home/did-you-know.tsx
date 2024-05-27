import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { StyledCloudNativeContainer } from '@/app/_components';

export const DidYouKnowSection: FC = () => {
  return (
    <Box className="container px-5 relative bg-black min-h-[1350px] md:min-h-[2000px]">
      <Box className="hidden absolute left-72 -top-20 md:block">
        <Image width={509} height={292} src="images/home/curv2.svg" alt="" />
        <Image
          width={82}
          height={442}
          src="images/home/curv3.svg"
          className="relative bottom-[68px] left-[1px]"
          alt=""
        />
        <Box className="w-0.5 h-[440px] border-[1.5px] border-solid border-red-600 relative -top-[450px] left-[1px]" />
        <Image
          width={111}
          height={708}
          src="images/home/curv4.svg"
          alt=""
          className="relative -top-[450px]"
        />
      </Box>
      <Box className="relative -left-4 md:h-96">
        <Box className="w-96 left-0 top-10 absolute md:left-80 md:top-80">
          <Box className="w-1 h-48 absolute -top-40 left-10 origin-top-left  bg-gradient-to-b from-black via-orange-600 to-black rounded md:hidden" />
          <Box className="w-24 h-24 left-0 top-0 absolute mix-blend-lighten bg-red-600 rounded-full blur-3xl" />
          <Image
            width={96}
            height={96}
            className="w-24 h-24 left-0 top-0 absolute shadow"
            src="images/home/did-you-know.svg"
            alt=""
          />
          <Stack className="left-24 -top-4 absolute justify-start items-start gap-1 md:max-w-lg md:w-[440px]">
            <Typography className="opacity-50 text-white text-base font-semibold md:text-2xl">
              Did you Know?
            </Typography>
            <Typography className="text-red-600 text-2xl font-extrabold leading-10 md:text-4xl">
              6% Time Wasted
            </Typography>
            <Typography className="text-white text-sm font-normal md:text-lg">
              Waiting for the infrastructure pipelines to initiate on traditional CI/CD systems.
            </Typography>
          </Stack>
        </Box>
      </Box>

      <Box className="relative top-48 bg-stone-900 bg-opacity-70 rounded-xl border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl px-5 pt-10 overflow-hidden md:mx-0 md:px-10 md:top-[390px]">
        <Box className="hidden w-96 h-96 left-[-108px] bottom-[300px] absolute mix-blend-lighten bg-red-900 rounded-full blur-3xl z-0 md:block" />
        <Stack className="container md:flex-row">
          <Box className="md:w-7/12">
            <Typography
              variant="caption"
              className="text-white text-base font-semibold md:text-2xl"
            >
              Planton Cloud{' '}
            </Typography>
            <Typography
              variant="caption"
              className="text-teal-600 text-base font-semibold md:text-2xl"
            >
              Integrated IaC Workflows{' '}
            </Typography>
            <Typography
              variant="caption"
              className="text-zinc-600 text-base font-semibold md:text-2xl"
            >
              redefine cloud operations. Instantly manage Pulumi Stacks for resources from
              Kubernetes clusters to workloads on kubernates. Update attributes and see real-time
              Stack executions, surpassing traditional CI/CD wait times.
            </Typography>

            <Stack className="mt-4 flex-row items-center md:mt-7">
              <Typography className="text-white text-base md:text-2xl font-semibold">
                Discover IaC Workflows
              </Typography>
              <East />
            </Stack>
          </Box>

          <Box className="md:w-5/12">
            <Image
              width={0}
              height={0}
              src="images/home/pulumi-workflow.svg"
              alt=""
              className="w-fit relative rounded-md shadow top-5 left-5 md:top-10 md:left-10"
            />
          </Box>
        </Stack>
      </Box>

      <StyledCloudNativeContainer className="p-5 h-96 relative top-[240px] rounded-3xl md:top-[700px] md:mx-0 md:p-0">
        <Image
          width={0}
          height={0}
          className="w-fit absolute left-0 md:-left-12 top-48 md:-top-20"
          src="images/home/resources-count.svg"
          alt=""
        />
        <Box className="h-40 absolute md:left-[487px] md:top-24 w-10/12 md:w-6/12">
          <Typography className="text-white text-xl font-extrabold md:text-3xl">
            Cloud Native Resources Catalog
          </Typography>
          <Typography className="mt-3 text-white text-base font-semibold md:text-2xl">
            Gain unparalleled viability into Every Workload:
          </Typography>
          <Typography className="text-white text-opacity-50 text-base font-semibold md:text-2xl">
            From Microservices to Open-Source Workloads on Kubernetes and Cloud Assets. Enhance
            Transparency and Boost Productivity with Clear Insights.
          </Typography>
        </Box>
      </StyledCloudNativeContainer>
    </Box>
  );
};
