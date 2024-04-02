'use client';

import { FC, useEffect, useMemo, useState } from 'react';

import { Box, Stack, Typography, TypographyProps } from '@mui/material';

const PrimaryLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant="caption"
      className={`text-white text-5xl font-bold leading-10 ${props.className}`}
    >
      {props.children}
    </Typography>
  );
};

const SecondaryLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant="caption"
      className={`text-5xl font-bold leading-tight text-transparent ${props.className}`}
    >
      {props.children}
    </Typography>
  );
};

export interface ICarouselLabel {
  label: string;
  width: string;
}

export interface CarouselSectionProps {
  title: string;
  labels?: ICarouselLabel[];
}

export const CarouselSection: FC<CarouselSectionProps> = ({ title, labels }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const animWidth = useMemo(() => labels[currentIndex]?.width ?? '', [currentIndex]);

  return (
    <Stack className="flex-row justify-start items-center gap-5">
      <PrimaryLabel>{title}</PrimaryLabel>
      {labels.length > 0 && (
        <Box
          className={`word-carousel h-[70px] px-2.5 py-1.5 rounded-2xl border border-neutral-400 `}
          sx={{ width: animWidth, transition: 'width 0.5s ease-in-out'}}
        >
          <Box
            className="word-carousel-container bg-gradient-to-r from-indigo-700 from-5% via-purple-700 via-25$ to-red-700 to-90% bg-clip-text"
            style={{ marginTop: `-${60 * currentIndex + 5}px` }}
          >
            {labels.map(({ label }) => (
              <SecondaryLabel key={label} className="whitespace-nowrap">
                {label}
              </SecondaryLabel>
            ))}
          </Box>
        </Box>
      )}
    </Stack>
  );
};
