import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { StyledBorderGradient } from './styled';

interface IacCardProps {
  imgSrc: string;
  heading: string;
  subHeading: string;
  title: string;
  content: string | ReactNode;
}

const cardContents: IacCardProps[] = [
  {
    imgSrc: '/images/iac-workflow/card-animation/1.gif',
    heading: '01',
    subHeading: 'Unified APIs for Multi-Cloud',
    title: 'Seamless Cloud Resource Management',
    content:
      "Planton Cloud's Unified APIs simplify management across cloud providers, enhancing development efficiency and agility.",
  },
  {
    imgSrc: '/images/iac-workflow/card-animation/2.gif',
    heading: '02',
    subHeading: 'Developer-Centric Self-Service Options',
    title: 'Empowering Developer Independence',
    content:
      'Planton Cloud offers developers self-service options for quick and autonomous infrastructure setup, accelerating innovation.',
  },
  {
    imgSrc: '/images/iac-workflow/card-animation/3.gif',
    heading: '03',
    subHeading: 'Customization with Pulumi Blueprints',
    title: 'Tailored Infrastructure Automation',
    content:
      'Planton Cloud enables deep control through custom Pulumi blueprints, allowing precise infrastructure configurations.',
  },
  {
    imgSrc: '/images/iac-workflow/card-animation/4.gif',
    heading: '04',
    subHeading: 'Live Feedback for Infra Deployment',
    title: 'Real-Time Deployment Transparency',
    content:
      'Planton Cloud provides real-time updates on deployments, ensuring developers stay informed and confident.',
  },
  {
    imgSrc: '/images/iac-workflow/card-animation/5.gif',
    heading: '05',
    subHeading: 'Simplified Infrastructure Management',
    title: 'Streamlined Developer & DevOps Collaboration',
    content:
      'Bridges the gap between Devs and DevOps, simplifying infrastructure management and fostering collaboration.',
  },
  {
    imgSrc: '/images/iac-workflow/card-animation/6.gif',
    heading: '06',
    subHeading: 'Extensible Infrastructure as Code (IaC) Workflows',
    title: 'Flexible and Powerful Automation',
    content: 'Extensible IaC workflows, Customizable Automation for Tailored Cloud Environments.',
  },
];

const IacCard: FC<IacCardProps> = ({ imgSrc, heading, subHeading, title, content }) => {
  return (
    <Card className="h-full bg-zinc-600 bg-opacity-20 rounded-xl">
      <CardContent className="p-4 md:p-8">
        <Stack className="justify-start items-start gap-1.5">
          <Stack className="justify-center items-start gap-3">
            <Image alt="" width={0} height={0} className="w-16 h-16" src={imgSrc} />
            <Typography className="text-center text-white text-3xl md:text-5xl font-black ">
              {heading}
            </Typography>
            <Typography className="text-neutral-500 text-sm font-bold leading-[21px]">
              {subHeading}
            </Typography>
          </Stack>
          <Stack className="justify-start items-start gap-1.5">
            <Typography className="text-white text-2xl font-semibold leading-9">{title}</Typography>
            <Typography className="text-white text-sm md:text-base font-medium leading-snug">
              {content}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export const Extensible: FC = () => {
  return (
    <Box className="max-w-screen-xl mx-auto px-6 md:px-0 relative">
      <Box className="absolute top-[75px] -left-24 w-full">
        <Box className="hidden md:block relative w-full">
          <Image
            alt=""
            width={0}
            height={0}
            className="w-[140px] h-[140px] -left-[70px] -top-[70px]  absolute"
            src="/images/iac-workflow/circle-animation.gif"
          />
          <Box className="w-[21px] h-[21px] -left-[10px] -top-[6px]  absolute bg-white rounded-full blur-xl" />
          <Box className="w-[15px] h-[15px] -left-[6px] -top-[8px]  absolute bg-violet-800 rounded-full shadow z-10" />
          <Box className="w-0 h-[1355px] absolute  transform origin-top-left shadow-md border-2 rounded-bl-full border-purple-600" />
          <Box className="w-full h-0 absolute top-[1353px] transform origin-top-left shadow-md border-2 rounded-bl-full rounded-tr-full border-purple-600" />
          <Box className="w-[4px] h-56 top-[1355px] right-0 absolute  transform origin-top-left shadow-md  rounded-tr-full bg-purple-600 bg-gradient-to-b from-transparent  to-black" />
        </Box>
      </Box>
      <Stack className="md:flex-row justify-start items-start gap-4 md:gap-5">
        <Typography className="md:w-9/12 text-white text-xl md:text-3xl font-bold !leading-snug z-10">
          Extensible Infrastructure as Code (IaC) Workflows
        </Typography>
        <Typography className="text-white text-base md:text-2xl font-semibold z-10">
          Gain invaluable insights into your infrastructure&#39;s evolution with comprehensive
          access to historical operation logs. This feature simplifies error diagnosis, promotes
          learning from past executions, and supports continuous optimization of your infrastructure
          management practices.
        </Typography>
      </Stack>
      <Grid container columns={12} spacing={4} mt={1}>
        {cardContents.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <IacCard {...card} />
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent="center" alignContent="center" direction="row">
        <Stack className="md:w-9/12 md:mx-auto mt-10 md:mt-80 gap-4">
          <StyledBorderGradient
            className="md:w-7/12 mx-auto p-2.5 bg-stone-900 bg-opacity-70 border-opacity-50 backdrop-blur-[70px] rounded-2xl
            shadow border-4 border-transparent"
          >
            <Typography className="text-center text-white text-xl font-semibold md:text-[32px] md:font-bold md:leading-[48px]">
              Historical Operations Insight for Enhanced Troubleshooting
            </Typography>
          </StyledBorderGradient>
          <Typography className="text-center text-stone-500 text-base md:text-2xl font-semibold leading-snug">
            Gain invaluable insights into your infrastructure&#39;s evolution with comprehensive
            access to historical operation logs.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
