'use client';

import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledLayoutContainer = styled(Box)(() => ({
  backgroundImage:
    'url(/images/iac-workflow/container-bg.svg), linear-gradient(90deg, rgba(0,0,0,0.7) 5%, rgba(126,0,191,0) 50%, rgba(0,0,0,0.7) 85%), linear-gradient(0deg, rgba(82,0,97,0.52) 0%, rgba(126,0,191,0.80) 19%, rgba(50,3,96,0.88) 52%)',
  left: 0,
}));

export const StyledBorderGradient = styled(Box)(() => ({
  backgroundImage: 'linear-gradient(#141414, #141414), linear-gradient(to right, #9333ea 20%, transparent 70%)',
  backgroundOrigin: 'border-box',
  backgroundClip: 'padding-box, border-box'
}))