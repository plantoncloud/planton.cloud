'use client';

import { Box, styled } from '@mui/material';

export const StyledLayoutContainer = styled(Box)(() => ({
  backgroundImage:
    'linear-gradient(20deg, rgba(0,0,0,1) 0%, transparent 75%, rgba(0,0,0,0) 100%), linear-gradient(90deg, rgba(0,0,0,1) 0%, transparent 20%, rgba(0,0,0,0) 100%), url(/images/home/home-bg.png)',
  backgroundPosition: 'top',
  left: 0,
}));
