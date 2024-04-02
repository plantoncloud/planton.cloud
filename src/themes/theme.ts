'use client';

import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import colors from './colors';

const { primaryLight } = colors;

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryLight[50],
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    allVariants: {
      letterSpacing: '0 !important',
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
