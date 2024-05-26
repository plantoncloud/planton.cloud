import { FC } from 'react';
import { Box, SvgIconProps } from '@mui/material';
import { Add } from '@mui/icons-material';

interface PlusIcon {
  xPosition: 'left' | 'right';
  yPosition: 'top' | 'bottom';
  iconProps?: SvgIconProps;
  className?: string;
}

export const PlusStickyIcon: FC<PlusIcon> = ({ xPosition, yPosition, iconProps, className }) => {
  return (
    <Box
      className={`${className} absolute ${xPosition === 'left' ? 'left-0' : 'right-0'} ${
        yPosition === 'bottom' ? 'bottom-0' : 'top-0'
      } `}
    >
      <Box className="relative w-fit">
        <Add
          {...iconProps}
          className={`text-2xl md:text-4xl absolute transform ${
            xPosition === 'left' ? 'left-[50%] -translate-x-1/2' : 'right-[50%] translate-x-1/2'
          } ${
            yPosition === 'bottom' ? 'bottom-[50%] translate-y-1/2' : 'top-[50%] -translate-y-1/2'
          }  ${iconProps?.className}`}
        />
      </Box>
    </Box>
  );
};
