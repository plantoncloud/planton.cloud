import { FC } from 'react';

export interface IMenu {
  icon?: FC;
  label: string;
  subLabel?: string;
  href?: string;
}
