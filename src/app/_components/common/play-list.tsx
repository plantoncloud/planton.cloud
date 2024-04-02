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
      className={`w-full justify-center items-center gap-16 ${
        isReverse ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      <Box className="w-5/12 aspect-video">
        <iframe src={src} allowFullScreen className="w-full h-full rounded-3xl" />
      </Box>
      <Stack className="justify-start items-start gap-5 max-w-lg">
        <Typography className="text-white text-4xl font-extrabold ">{title}</Typography>
        <Typography className="text-white text-xl font-medium ">{subTitle}</Typography>
      </Stack>
    </Stack>
  );
};
