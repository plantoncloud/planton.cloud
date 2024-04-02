'use client';

import { FC, useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Box } from '@mui/material';
import rocketData from 'public/images/iac-workflow/rocket.json';

export interface RocketComponentProps {
  width: number;
  top: string;
  left: string;
}

export const RocketComponent: FC<RocketComponentProps> = ({ width, top, left }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: rocketData,
    });
  }, []);

  return (
    <Box
      className="absolute rotate-45 opacity-20"
      width={width}
      top={top}
      left={left}
      sx={{
        '& svg:nth-child(2)': {
          display: 'none !important',
        },
      }}
      ref={animationContainer}
    />
  );
};