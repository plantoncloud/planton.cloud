import { FC } from 'react';
import Image from 'next/image';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Chip, RoundBtnSmall } from '@/app/_components';
import { StyledPricingBorderGradient } from './styled';

interface IPlan {
  imgSrc: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const plans: IPlan[] = [
  {
    imgSrc: '/images/code-to-cloud/plane.svg',
    name: 'LITE',
    price: '$29',
    period: 'per month',
    features: [
      'Unlimited Environments',
      'More Functions (Serverless, Edge)',
      'More Databases (KV, Postgres)',
    ],
  },
  {
    imgSrc: '/images/code-to-cloud/plane2.svg',
    name: 'STANDARD',
    price: '$89',
    period: 'per month',
    features: [
      'Unlimited Environments',
      'More Functions (Serverless, Edge)',
      'More Databases (KV, Postgres)',
      'More Web Analytics Events',
      'More Experimentation (Edge Config, Middleware)',
    ],
    isPopular: true,
  },
  {
    imgSrc: '/images/code-to-cloud/rocket.svg',
    name: 'ENTERPRISE',
    price: '$159',
    period: 'per month',
    features: [
      'Unlimited Environments',
      'More Functions (Serverless, Edge)',
      'More Databases (KV, Postgres)',
      'More Databases (KV, Postgres)',
      'More Databases (KV, Postgres)',
      'More Databases (KV, Postgres)',
    ],
  },
];

const Plan: FC<IPlan> = ({ imgSrc, name, price, period, features, isPopular }) => {
  return (
    <StyledPricingBorderGradient
      className={`relative px-8 pt-8 pb-4 bg-black rounded-2xl gap-8 z-10 w-[340px] ${
        isPopular ? 'border-4 border-slate-900 yellow-border-gradient' : ''
      }`}
    >
      {isPopular && (
        <Stack className="absolute -top-[18px] inset-0 flex items-center">
          <Typography className="px-3 py-1.5 text-white text-[15px] font-medium leading-snug bg-yellow-600 rounded-lg z-10">
            🔥 MOST POPULAR
          </Typography>
        </Stack>
      )}

      <Stack className="self-stretch justify-start items-start gap-2.5 flex-grow">
        <Stack className="justify-center items-start gap-2.5">
          <Image src={imgSrc} alt="" width={0} height={0} className="w-fit" />
          <Typography className="px-3 py-1.5 bg-neutral-800 rounded-lg text-white text-[15px] font-medium leading-snug">
            {name}
          </Typography>
        </Stack>
        <Stack className="justify-start items-start gap-3.5">
          <Stack className="flex-row justify-start items-center gap-[7px]">
            <Typography className="text-center text-white text-4xl font-bold leading-[54px]">
              {price}
            </Typography>
            <Typography
              variant="caption"
              className="text-center text-zinc-600 text-[15px] font-normal leading-snug"
            >
              {period}
            </Typography>
          </Stack>

          {features.map((feature, index) => (
            <Stack key={index} className="flex-row justify-start items-center gap-1">
              <Image
                src="/images/code-to-cloud/check.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <Typography className="text-white text-[15px] font-medium leading-snug">
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <RoundBtnSmall className="self-stretch bg-teal-600 border-none">Choose Plan</RoundBtnSmall>
    </StyledPricingBorderGradient>
  );
};

export const Pricing: FC = () => {
  return (
    <Stack className="mx-auto mt-20 pb-96 bg-slate-950 relative p-36 items-center">
      <Box className="max-w-7xl mx-auto">
        <Chip className="px-8">Pricing</Chip>
        <Stack className="justify-center items-center gap-[21px] mt-20">
          <Typography className="text-center text-white text-[51px] font-black leading-[56px]">
            Step Up Your Game: Pricing Plans to Propel You
          </Typography>
          <Typography className="self-stretch text-center text-white text-xl font-medium leading-[30px]">
            No Contracts, No Surprise Fees.
          </Typography>
        </Stack>
        <Grid container columns={12} spacing={4} className="mt-40">
          {plans.map((plan, index) => (
            <Grid item xs={4} key={index} className="flex">
              <Plan {...plan} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box className="w-[1600px] h-[1600px] origin-top-left opacity-10 mix-blend-screen bg-gradient-to-b from-transparent from-50% to-indigo-950 to-90% rounded-full blur-sm absolute mx-auto -top-[700px]" />
      <Box className="w-[1800px] h-[1800px] origin-top-left opacity-20 mix-blend-screen bg-gradient-to-b from-transparent from-50% to-indigo-800 to-90% rounded-full blur-sm absolute mx-auto -top-[650px]" />
      <Box className="w-[2000px] h-[2000px] origin-top-left opacity-40 mix-blend-screen bg-gradient-to-b from-transparent from-50% to-purple-600 to-90% rounded-full blur-sm absolute mx-auto -top-[600px]" />
      <Box className="w-[696px] h-[696px] bg-orange-800 rounded-full absolute -right-44 top-92 blur-3xl opacity-20" />
    </Stack>
  );
};
