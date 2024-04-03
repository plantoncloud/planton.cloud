import { FC } from 'react';
import Image from 'next/image';

import { East } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { StyledCloudNativeContainer } from '@/app/_components';

export const DidYouKnowSection: FC = () => {
  return (
    <Box className="container relative bg-black">
      <Box className="absolute left-72 top-[-80px]">
        <Image width={509} height={292} src="images/home/curv2.svg" alt="" />
        <Image
          width={82}
          height={442}
          src="images/home/curv3.svg"
          className="relative bottom-[68px] left-[1px]"
          alt=""
        />
      </Box>
      <Box className="w-96 h-96 relative">
        <Box className="w-32 h-96 left-0 top-0 absolute">
          <Box className="w-24 h-24 left-[300px] top-[300px] absolute mix-blend-lighten bg-red-600 rounded-full blur-3xl" />
          <Box className="w-0.5 h-[440px] border-[1.5px] border-solid border-red-600 relative left-[288.5px] top-[210px]" />
          <Image
            width={96}
            height={96}
            className="w-24 h-24 left-[300px] top-[320px] absolute shadow"
            src="images/home/did-you-know.svg"
            alt=""
          />
          <Image
            width={111}
            height={708}
            src="images/home/curv4.svg"
            alt=""
            className="left-[288px] top-[600px] absolute"
          />
        </Box>
        <Stack className="w-96 h-32 left-[400px] top-[310px] absolute justify-start items-start gap-1 ">
          <Box className="opacity-50 text-white text-2xl font-semibold ">Did you Know?</Box>
          <Box className="text-red-600 text-4xl font-extrabold  leading-10">6% Time Wasted</Box>
          <Box className="w-[500px] text-white text-lg font-normal ">
            Waiting for the infrastructure pipelines to initiate on traditional CI/CD systems.
          </Box>
        </Stack>
      </Box>

      <Box className="w-full h-80 relative bg-stone-900 bg-opacity-70 rounded-xl border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl top-[390px] p-10 overflow-hidden">
        <Box className="w-96 h-96 left-[-108px] bottom-[300px] absolute mix-blend-lighten bg-red-900 rounded-full blur-3xl z-0" />
        <Stack direction="row" className="container h-44 top-[34px]">
          <Box className="w-7/12">
            <Typography variant="caption" className="text-white text-2xl font-semibold ">
              Planton Cloud{' '}
            </Typography>
            <Typography variant="caption" className="text-teal-600 text-2xl font-semibold ">
              Instant IaC Workflows
            </Typography>
            <Typography variant="caption" className="text-white text-2xl font-semibold ">
              {' '}
            </Typography>
            <Typography variant="caption" className="text-zinc-600 text-2xl font-semibold ">
              redefine cloud operations. Instantly manage Pulumi Stacks for resources from
              Kubernetes clusters to workloads on kubernates. Update attributes and see real-time
              Stack executions, surpassing traditional CI/CD wait times.
            </Typography>

            <Stack className="top-[230px] absolute flex-row items-center">
              <Typography className="text-white text-2xl font-semibold ">
                Discover IaC Workflows
              </Typography>
              <East />
            </Stack>
          </Box>

          <Box className="w-5/12">
            <Image
              width={0}
              height={0}
              src="images/home/pulumi-workflow.svg"
              alt=""
              className="w-fit relative rounded-md shadow top-10 left-10"
            />
          </Box>
        </Stack>
      </Box>

      <Box className="w-full h-96 top-[1350px] absolute">
        <Box className="w-full h-96 left-[48px] top-[87px] absolute">
          <StyledCloudNativeContainer className="w-full h-96 left-0 top-0 absolute rounded-3xl" />
          <Box className="w-6/12 h-40 left-[487px] top-[97px] absolute">
            <Typography className="left-0 top-0 absolute text-white text-[2rem] font-extrabold ">
              Cloud Native Resources Catalog
            </Typography>
            <Box className="left-0 top-[52px] absolute">
              <Typography className="text-white text-2xl font-semibold ">
                Gain unparalleled viability into Every Workload: <br />
              </Typography>
              <Typography className="text-white text-opacity-50 text-2xl font-semibold">
                From Microservices to Open-Source Workloads on Kubernetes and Cloud Assets. Enhance
                Transparency and Boost Productivity with Clear Insights.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Image
          width={0}
          height={0}
          className="w-fit left-0 top-0 absolute"
          src="images/home/resources-count.svg"
          alt=""
        />
      </Box>
    </Box>
  );
};
