'use client';

import { FC } from 'react';
import { Box, Grid } from '@mui/material';
import { useIsMobile } from '@/app/_utils/hooks';

export const ElevateBoxes: FC = () => {
  const mobile = useIsMobile();
  return (
    <Grid container columns={{ xs: 6, md: 12 }}>
      {[...Array(mobile ? 30 : 72)].map((_, index) => (
        <Grid item key={index} xs={1} className="border-l md:border-r border-b border-neutral-700">
          <Box className="pt-[100%]" />
        </Grid>
      ))}
    </Grid>
  );
};
