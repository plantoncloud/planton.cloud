import { FC } from 'react';
import { Box } from '@mui/material';
import Header from './client/header';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="h-screen bg-cover bg-center">
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
