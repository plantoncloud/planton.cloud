import { FC } from 'react';

export interface IMenu {
  icon?: FC;
  label: string;
  subLabel?: string;
  href?: string;
  onClick?: () => void;
}

export interface IPlan {
  imgSrc: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  className?: string;
}
