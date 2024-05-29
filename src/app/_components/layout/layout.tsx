import { FC } from 'react';
import { Box } from '@mui/material';
import Footer from './client/footer';
import { Header } from './client/header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box className="h-screen bg-cover bg-center overflow-x-hidden">
      <Header />
      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};
