'use client';

import { FC, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

export const RolesComponent: FC = () => {
  const words = [
    'Platform',
    'Portal',
    'Toolkit',
    'Sidekick',
    'Wingman',
    'Companion',
    'Partner',
    'Helper',
    'Assistant',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1250);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="word-carousel h-10">
      <Box className="word-carousel-container" style={{ marginTop: `-${60 * currentIndex + 7}px` }}>
        {words.map((word, index) => (
          <Typography
            key={index}
            className={`text-teal-600 leading-[59.61px] text-4xl font-extrabold word ${
              currentIndex === index ? 'visible' : ''
            }`}
          >
            {word}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
