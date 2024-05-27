'use client';

import { FC, useEffect, useMemo, useState } from 'react';

import { Box, Stack, Typography, TypographyProps } from '@mui/material';

const PrimaryLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant="caption"
      className={`text-white text-2xl font-extrabold md:text-5xl md:font-bold leading-10 ${props.className}`}
    >
      {props.children}
    </Typography>
  );
};

const SecondaryLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      variant="caption"
      className={`text-2xl md:text-5xl font-bold !leading-tight text-transparent ${props.className}`}
    >
      {props.children}
    </Typography>
  );
};

export interface ICarouselLabel {
  label: string;
  width: { mobile: string; desktop: string };
}

export interface CarouselSectionProps {
  title: string;
  labels?: ICarouselLabel[];
}

interface ICarouselItem {
  labels?: ICarouselLabel[];
  isMobile?: boolean;
}

export const CarouselItem: FC<ICarouselItem> = ({ labels, isMobile }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const animWidth = useMemo(
    () =>
      isMobile ? labels[currentIndex]?.width?.mobile : labels[currentIndex]?.width?.desktop ?? '',
    [currentIndex]
  );

  return (
    <Box
      className={`word-carousel h-[38px] md:h-[72px] px-2.5 py-1.5 rounded-lg md:rounded-2xl border border-neutral-400 `}
      sx={{ width: animWidth, transition: 'width 0.5s ease-in-out' }}
    >
      <Box
        className="word-carousel-container bg-gradient-to-r from-indigo-700 from-5% via-purple-700 via-25$ to-red-700 to-90% bg-clip-text"
        style={{ marginTop: `-${(isMobile ? 30 : 60) * currentIndex + 5}px` }}
      >
        {labels.map(({ label }) => (
          <SecondaryLabel key={label} className="whitespace-nowrap">
            {label}
          </SecondaryLabel>
        ))}
      </Box>
    </Box>
  );
};

export const CarouselSection: FC<CarouselSectionProps> = ({ title, labels }) => {
  return (
    <Stack className="md:flex-row justify-start md:items-center gap-3 md:gap-5">
      <PrimaryLabel>{title}</PrimaryLabel>
      {labels.length > 0 && (
        <>
          <Box className="hidden md:block">
            <CarouselItem labels={labels} />
          </Box>
          <Box className="md:hidden">
            <CarouselItem labels={labels} isMobile={true} />
          </Box>
        </>
      )}
    </Stack>
  );
};
