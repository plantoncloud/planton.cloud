import { FC } from 'react';
import { Grid, Stack, Typography, TypographyProps } from '@mui/material';

export const ChipLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      className={`px-6 py-2.5 bg-zinc-800 rounded-3xl text-center text-white text-base font-medium leading-snug ${props.className}`}
    >
      {props.children}
    </Typography>
  );
};

export const BoldLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      className={`${props.className} text-white text-3xl font-bold leading-10`}
    >
      {props.children}
    </Typography>
  );
};

export const WhatIsAuditableAutomation: FC = () => {
  return (
    <Stack className="max-w-7xl mx-auto justify-start items-center gap-5">
      <ChipLabel>What is Auditable Automation?</ChipLabel>
      <Typography className="max-w-2xl text-center text-white text-5xl font-black leading-tight">
        Empowering Transparency and Accountability
      </Typography>
      <Grid container columns={12} className="">
        <Grid
          item
          xs={4}
          className="self-stretch p-6 border border-zinc-800 justify-start items-start gap-2.5 flex"
        >
          <BoldLabel>From configuration update to deployment.</BoldLabel>
        </Grid>
        <Grid
          item
          xs={8}
          className="self-stretch p-6 bg-black border border-zinc-800 justify-start items-start gap-2.5 flex"
        >
          <Typography
            variant="caption"
            className="text-stone-500 text-2xl font-semibold  leading-9"
          >
            <Typography variant="caption" className="text-white text-2xl font-semibold  leading-9">
              Auditable Automation{' '}
            </Typography>
            revolutionizes how changes to cloud infrastructure are tracked, offering unparalleled
            transparency and accountability. Every action is recorded, from configuration update to
            deployment.
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};
