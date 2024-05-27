import { FC } from 'react';
import { Box, Grid } from '@mui/material';

const ElevateBox: FC = () => {
  return (
    <Grid item xs={1} className="border-l md:border-r border-b border-neutral-700">
      <Box className="pt-[120%] md:pt-[100%]" />
    </Grid>
  );
};

export const ElevateBoxes: FC = () => {
  return (
    <>
      <Box className="hidden md:block">
        <Grid container columns={{ xs: 12 }}>
          {[...Array(72)].map((_, index) => (
            <ElevateBox key={index} />
          ))}
        </Grid>
      </Box>
      <Box className="md:hidden">
        <Grid container columns={{ xs: 6 }}>
          {[...Array(30)].map((_, index) => (
            <ElevateBox key={index} />
          ))}
        </Grid>
      </Box>
    </>
  );
};
