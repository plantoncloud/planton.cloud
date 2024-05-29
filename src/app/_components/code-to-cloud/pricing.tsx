import { FC } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Chip, Plan, PricingCarousel } from '@/app/_components';
import { plans } from '@/app/_utils/constants';

export const Pricing: FC = () => {
  return (
    <Box className="mt-2 md:mt-20 pt-16 md:pt-36 pb-40 md:pb-96 bg-slate-950 relative z-10">
      <Stack className="mx-auto px-5 items-center">
        <Box className="md:max-w-7xl md:mx-auto">
          <Chip className="hidden md:block px-6">Pricing</Chip>
          <Stack className="justify-center items-center gap-2 md:gap-5 md:mt-20">
            <Typography className="text-center text-white text-2xl md:text-5xl font-semibold md:font-black !leading-snug">
              Step Up Your Game: Pricing Plans to Propel You
            </Typography>
            <Typography className="self-stretch text-center text-white text-base md:text-xl font-semibold md:font-medium leading-[30px]">
              No Contracts, No Surprise Fees.
            </Typography>
          </Stack>
          <Box className="hidden md:block md:mt-40">
            <Grid container columns={12} spacing={4}>
              {plans.map((plan, index) => (
                <Grid item xs={4} key={index} className="flex">
                  <Plan {...plan} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
        <Box className="w-[120%] md:[85%] aspect-square origin-top-left opacity-10 mix-blend-screen bg-gradient-to-b from-transparent from-50% to-indigo-950 to-90% rounded-full blur-sm absolute mx-auto bottom-60 md:bottom-[500px]" />
        <Box className="w-[125%] md:[95%] aspect-square origin-top-left opacity-20 mix-blend-screen bg-gradient-to-b from-transparent from-50% to-indigo-800 to-90% rounded-full blur-sm absolute mx-auto bottom-32 md:bottom-72" />
        <Box className="w-[130%] md:[105%] aspect-square origin-top-left opacity-40 mix-blend-screen bg-gradient-to-b from-transparent from-50% to-purple-600 to-90% rounded-full blur-sm absolute mx-auto bottom-4 md:bottom-20" />
        <Box className="w-[696px] h-[696px] bg-orange-800 rounded-full absolute -right-44 top-92 blur-3xl opacity-20" />
      </Stack>
      <Box className="mt-6 md:hidden">
        <PricingCarousel />
      </Box>
    </Box>
  );
};
