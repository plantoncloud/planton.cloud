'use client';

import { Box, styled } from '@mui/material';

export const StyledDevOpsContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up(768)]: {
    borderRadius: 'var(--Measure-pixels-24, 24px)',
    background:
      'linear-gradient(133deg, #E57C00 -32.56%, rgba(67, 11, 159, 0.67) 21.82%, rgba(12, 0, 155, 0.40) 61.68%, rgba(0, 0, 0, 0.00) 100.63%)',
  },
}));
