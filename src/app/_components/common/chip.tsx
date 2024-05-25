import { FC } from 'react';
import { Box, BoxProps } from '@mui/material';

export const Chip: FC<BoxProps> = (props) => {
  return (
    <Box
      {...props}
      className={`w-fit px-3 py-2 md:px-6 md:py-4 bg-white bg-opacity-5 rounded-full border-2 border-white border-opacity-20 ${props.className}`}
    >
      {props.children}
    </Box>
  );
};
