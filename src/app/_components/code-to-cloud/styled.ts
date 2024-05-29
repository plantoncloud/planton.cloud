'use client';

import { Box, Stack, styled } from '@mui/material';

export const StyledDeveloperFriendlyInterface = styled(Stack)(() => ({
  borderRadius: 20,
  background: 'radial-gradient(119.67% 95.88% at 15.34% 20.19%, #1D1D56 0%, #020108 100%)',
}));

export const StyledBgSquare = styled(Box)(() => ({
  borderRadius: 43,
  background: 'linear-gradient(111deg, #9747FF -16.73%, #03A587 73.7%)',
  boxShadow: '6px 39px 65.7px -26px #FFF inset',
}));
