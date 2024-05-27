import { FC } from 'react';
import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import { RoundBtnSmall } from './btn';
import { MediumLabel } from '../auditable-automation';
import { REQUEST_DEMO_URL } from '@/app/_utils/constants';

export interface FooterActionProps {
  label: string;
  href?: string;
}

export interface FooterBannerProps {
  title?: string;
  subTitle?: string;
  actions?: FooterActionProps[];
  background?: string;
  varient?: string;
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

export const FooterBanner: FC<FooterBannerProps> = ({
  background,
  title,
  subTitle,
  actions,
  varient,
}) => {
  if (!varient) {
    return (
      <Box className="px-5 py-8 z-20 md:px-0" sx={{ background }}>
        <Box className="container">
          <Stack className="justify-start items-start gap-3">
            {title && (
              <Typography className="text-white text-2xl font-semibold ">{title}</Typography>
            )}
            {subTitle && (
              <Typography className="text-white text-xs font-normal">{subTitle}</Typography>
            )}
            <Stack className="flex-row gap-4">
              {actions.map(({ label, href }, index) => (
                <RoundBtnSmall key={index} className="px-4 py-2.5">
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
  }

  return (
    <Grid className="w-full px-6 py-9  border border-zinc-800 md:mt-32" sx={{ background }}>
      <Grid item xs={8}>
        <Stack className="self-stretch justify-center items-start gap-2.5">
          <MediumLabel>
            Trial Plantoncloud Enterprise to see our customizable platform, security, and <br />
            performance in action.
          </MediumLabel>
          <Stack className="flex-row justify-start items-center gap-2.5">
            <RoundBtnSmall className="px-4 py-2.5">
              <Link target="_blank" href={REQUEST_DEMO_URL}>
                Request For Demo Today!
              </Link>
            </RoundBtnSmall>
            <RoundBtnSmall className="px-4 py-2.5">
              <Link target="_blank" href={REQUEST_DEMO_URL}>
                Contact Sales
              </Link>
            </RoundBtnSmall>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
