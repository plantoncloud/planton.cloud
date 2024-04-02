import { FC } from 'react';
import { Button, ButtonProps } from '@mui/material';

export const RoundBtn: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={`${props.className} px-8 py-4 rounded-full text-base font-semibold`}
    >
      {children}
    </Button>
  );
};

export const RoundBtnSmall: FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      className={`${props.className} px-4 py-2.5 rounded-3xl text-xs font-medium border border-white`}
    >
      {children}
    </Button>
  );
};
