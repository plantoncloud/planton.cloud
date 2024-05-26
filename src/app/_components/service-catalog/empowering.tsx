import { FC } from 'react';
import Image from 'next/image';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { ChipLabel, PlusStickyIcon } from '@/app/_components';

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
    <Stack className="justify-between items-center gap-10 md:gap-20 h-full">
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
      <Stack className="gap-1.5 mt-auto">
        <Typography className="text-white text-2xl font-semibold">{title}</Typography>
        <Typography className=" text-white text-base font-medium leading-snug">
          {subTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};

export const Empowering: FC = () => {
  return (
    <Box className="relative">
      <Box className="relative">
        <Grid container columns={3}>
          {[...Array(3)].map((_, index) => (
            <Grid
              item
              key={index}
              xs={1}
              className={`${
                (index + 1) % 3 !== 0 ? 'md:border-r' : ''
              } border-b border-neutral-700`}
            >
              <Box className="pt-[200%] md:pt-[100%]" />
            </Grid>
          ))}
        </Grid>
        <Stack className="w-full absolute top-1/2 md:top-3/4 transform left-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-center gap-5">
          <ChipLabel>What is Auditable Automation?</ChipLabel>
          <Typography className="text-center text-white text-2xl md:text-5xl font-black">
            Empowering Transparency <br /> and Accountability
          </Typography>
        </Stack>
        <PlusStickyIcon className="md:hidden" xPosition="right" yPosition="bottom" />
      </Box>
      <Grid container columns={12}>
        <Grid
          item
          xs={12}
          md={4}
          className="p-2 md:px-12 md:py-6 border-r border-b border-zinc-800"
        >
          <Typography className="text-white text-xl md:text-3xl font-bold !leading-snug">
            Extensible Infrastructure as Code (IaC) Workflows
          </Typography>
        </Grid>
        <Grid item xs={12} md={8} className="p-2 md:p-6 border-r border-b border-zinc-800 bg-black">
          <Typography variant="caption" className="text-white text-base md:text-2xl font-semibold">
            Auditable Automation{' '}
            <Typography
              variant="caption"
              className="text-stone-500 text-base md:text-2xl font-semibold"
            >
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
            className={`${(index + 1) % 3 !== 0 ? 'md:border-r' : ''} border-b border-neutral-700`}
          >
            <Box className="pt-[10%] md:pt-[5%]" />
          </Grid>
        ))}
      </Grid>
      <Grid container columns={3}>
        {boxBlogs.map((blog, index) => (
          <Grid
            item
            xs={3}
            md={1}
            key={index}
            className="p-3 md:p-6 border-r border-b border-neutral-700 "
          >
            <BoxBlog {...blog} />
          </Grid>
        ))}
      </Grid>
      <Grid container columns={3}>
        <Grid item xs={1} className="relative md:border-r border-b border-neutral-700">
          <PlusStickyIcon className="hidden md:block" xPosition="left" yPosition="top" />
          <Box className="pt-[20%] md:pt-[5%]" />
        </Grid>
        <Grid item xs={1} className="md:border-r border-b border-neutral-700">
          <Box className="pt-[5%]" />
        </Grid>
        <Grid item xs={1} className="relative md:border-r border-b border-neutral-700">
          <PlusStickyIcon className="md:hidden" xPosition="right" yPosition="bottom" />
          <Box className="pt-[5%]" />
        </Grid>
      </Grid>
      <Stack className="relative items-center border-b border-neutral-700 gap-4 px-3 md:px-0 py-6 md:py-20">
        <Typography className="text-center text-white text-xl md:text-3xl font-bold max-w-2xl  px-6 py-2.5 md:p-0 bg-zinc-800 md:bg-inherit rounded-lg md:rounded-none">
          Historical Operations Insight for Enhanced Troubleshooting
        </Typography>
        <Typography className="text-center text-stone-500 text-base md:text-2xl font-semibold leading-snug max-w-5xl">
          Gain invaluable insights into your infrastructure&#39;s evolution with comprehensive
          access to historical operation logs.
        </Typography>
      </Stack>
      <Box className="relative border-b border-neutral-700">
        <PlusStickyIcon className="md:hidden" xPosition="left" yPosition="bottom" />
        <PlusStickyIcon
          className="hidden md:block right-1/3"
          xPosition="right"
          yPosition="bottom"
        />
        <Box className="pt-6 md:pt-8" />
      </Box>
    </Box>
  );
};
