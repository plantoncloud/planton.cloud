import { FC } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { RoundBtnSmall } from './btn';

export interface FooterActionProps {
  label: string;
  href?: string;
}

export interface FooterBannerProps {
  title: string;
  subTitle?: string;
  actions?: FooterActionProps[];
  background?: string;
}

export enum GRADIENT_COLOR {
  TEAL,
  BLUE,
  STONE,
}

export const GRADIENT_COLOR_MAPS = {
  [GRADIENT_COLOR.TEAL]:
    'linear-gradient(170deg, #00BABA -25%, rgba(11, 159, 141, 0.67) 20%, rgba(0, 0, 0, 0.00) 70%)',
  [GRADIENT_COLOR.BLUE]: 'linear-gradient(170deg, #0F0E97 -23.75%, #310642 30%, #010104 98%)',
  [GRADIENT_COLOR.STONE]:
    'linear-gradient(119.46deg, #16110D -42.62%, #5B3214 25.58%, #2C2926 99.88%)',
};

export const FooterBanner: FC<FooterBannerProps> = ({ background, title, subTitle, actions }) => {
  return (
    <Box className="py-8" sx={{ background }}>
      <Box className="container">
        <Stack className="justify-start items-start gap-3">
          {title && <Typography className="text-white text-2xl font-semibold ">{title}</Typography>}
          {subTitle && (
            <Typography className="text-white text-xs font-normal">{subTitle}</Typography>
          )}
          <Stack className="flex-row gap-4">
            {actions.map(({ label, href }, index) => (
              <RoundBtnSmall key={index}>
                <Link target="_blank" href={href}>
                  {label}
                </Link>
              </RoundBtnSmall>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
