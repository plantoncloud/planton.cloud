import { FC } from 'react';
import Image from 'next/image';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { ChipLabel } from '@/app/_components';

interface BoxBlogProps {
  title: string;
  subTitle: string;
  imgSrc?: string;
  vidSrc?: string;
  showGradient?: boolean;
}

const boxBlogs: BoxBlogProps[] = [
  {
    vidSrc: '/images/service-catalog/seamless.mp4',
    title: 'Seamless Cloud Resource Management',
    subTitle:
      'Planton Cloud`s Unified APIs simplify management across cloud providers, enhancing development efficiency and agility.',
  },
  {
    vidSrc: '/images/service-catalog/earth.mp4',
    title: 'Empowering Developer Independence',
    subTitle:
      'Planton Cloud offers developers self-service options for quick and autonomous infrastructure setup, accelerating innovation.',
    showGradient: true,
  },
  {
    imgSrc: '/images/service-catalog/function.gif',
    title: 'Tailored Infrastructure Automation',
    subTitle:
      'Planton Cloud enables deep control through custom Pulumi blueprints, allowing precise infrastructure configurations.',
  },
];

const BoxBlog: FC<BoxBlogProps> = ({ title, subTitle, imgSrc, vidSrc, showGradient }) => {
  return (
    <Stack className="justify-between items-center h-[655px] gap-1.5 mb-10">
      <Box className="relative">
        {showGradient && (
          <Box className="w-full h-full absolute mix-blend-lighten bg-cyan-400 bg-opacity-10 rounded-full blur-3xl" />
        )}
        {imgSrc && <Image src={imgSrc} alt="" width={0} height={0} className="w-fit" />}
        {vidSrc && (
          <video autoPlay={true} loop={true} muted playsInline>
            <source src={vidSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </Box>
      <Stack className="gap-1.5">
        <Typography className="text-white text-2xl font-semibold">{title}</Typography>
        <Typography className=" text-white text-[15px] font-medium leading-snug">
          {subTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const Empowering: FC = () => {
  return (
    <Box className="relative">
      <Grid container columns={3}>
        {[...Array(3)].map((_, index) => (
          <Grid
            item
            key={index}
            xs={1}
            className={`${(index + 1) % 3 !== 0 ? 'border-r' : ''} border-b border-neutral-700`}
          >
            <Box className="pt-[100%]" />
          </Grid>
        ))}
      </Grid>
      <Box className="absolute top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col justify-start items-center gap-5 inline-flex">
        <ChipLabel>What is Auditable Automation?</ChipLabel>
        <Typography className="text-center text-white text-5xl font-black">
          Empowering Transparency <br /> and Accountability
        </Typography>
      </Box>
      <Grid container columns={12}>
        <Grid item xs={4} className="px-[49px] py-6 border-r border-b border-zinc-800">
          <Typography className="text-white text-[32px] font-bold">
            Extensible <br /> Infrastructure as Code (IaC) Workflows
          </Typography>
        </Grid>
        <Grid item xs={8} className="p-6 border-r border-b border-zinc-800 bg-black">
          <Typography variant="caption" className="text-white text-2xl font-semibold">
            Auditable Automation{' '}
            <Typography variant="caption" className="text-stone-500 text-2xl font-semibold">
              revolutionizes how changes to cloud infrastructure are tracked, offering unparalleled
              transparency and accountability. Every action is recorded, from configuration update
              to deployment.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
      <Grid container columns={3}>
        {[...Array(3)].map((_, index) => (
          <Grid
            item
            key={index}
            xs={1}
            className={`${(index + 1) % 3 !== 0 ? 'border-r' : ''} border-b border-neutral-700`}
          >
            <Box className="pt-[5%]" />
          </Grid>
        ))}
      </Grid>
      <Grid container columns={3}>
        {boxBlogs.map((blog, index) => (
          <Grid item xs={1} key={index} className="p-6 border-r border-b border-neutral-700 ">
            <BoxBlog {...blog} />
          </Grid>
        ))}
      </Grid>
      <Grid container columns={3}>
        <Grid item xs={1} className="relative border-r border-b border-neutral-700">
          <Add className="absolute -left-[18px] -top-[18px]" fontSize="large" />
          <Box className="pt-[5%]" />
        </Grid>
        <Grid item xs={1} className="border-r border-b border-neutral-700">
          <Box className="pt-[5%]" />
        </Grid>
        <Grid item xs={1} className="border-r border-b border-neutral-700">
          <Box className="pt-[5%]" />
        </Grid>
      </Grid>
      <Stack className="relative items-center border-b border-neutral-700 gap-4 py-20">
        <Typography className="text-center text-white text-[32px] font-bold max-w-2xl">
          Historical Operations Insight for Enhanced Troubleshooting
        </Typography>
        <Typography className="text-center text-stone-500 text-2xl font-semibold leading-9 max-w-5xl">
          Gain invaluable insights into your infrastructure&#39;s evolution with comprehensive
          access to historical operation logs.
        </Typography>
        <Add className="absolute -bottom-[18px] right-[35%]" fontSize="large" />
      </Stack>
    </Box>
  );
};
