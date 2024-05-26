'use client';

import { FC } from 'react';

import { Typography, TypographyProps } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  growingBar: {
    animation: '$grow 3s linear',
  },
  '@keyframes grow': {
    '0%': { width: '1%' },
    '100%': { width: '100%' },
  },
});

export const ElevateAnimLabel: FC<TypographyProps> = (props) => {
  const classes = useStyles();

  return (
    <Typography
      sx={{ direction: 'rtl' }}
      className={`${classes.growingBar} p-2 md:px-8 md:py-6 bg-white rounded-xl md:rounded-[32px] text-zinc-800 text-xs md:text-4xl font-bold whitespace-nowrap overflow-hidden ${props.className}`}
    >
      {props.children}
    </Typography>
  );
};
