import { FC } from 'react';
import { Box, Stack, Typography } from '@mui/material';

export interface PlayListBoxProps {
  title: string;
  subTitle: string;
  src: string;
  isReverse?: boolean;
}

export const PlayListBox: FC<PlayListBoxProps> = ({ title, subTitle, src, isReverse }) => {
  return (
    <Stack
      className={`w-full justify-center items-center gap-6 md:gap-16 ${
        isReverse ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <Box className="w-full md:w-5/12 aspect-video">
        <iframe src={src} allowFullScreen className="w-full h-full rounded-3xl" />
      </Box>
      <Stack className="justify-start items-start gap-3 md:gap-5 max-w-lg">
        <Typography className="text-white text-2xl md:text-4xl font-extrabold ">{title}</Typography>
        <Typography className="text-white text-base font-semibold md:text-xl md:font-medium ">
          {subTitle}
        </Typography>
      </Stack>
    </Stack>
  );
};
