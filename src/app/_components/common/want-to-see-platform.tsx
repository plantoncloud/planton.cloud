import { FC } from 'react';
import { FooterBanner, GRADIENT_COLOR, GRADIENT_COLOR_MAPS } from './footer-banner';
import { REQUEST_DEMO_URL } from '@/app/_utils/constants';

export interface WantToSeePlatformProps {
  gradient?: GRADIENT_COLOR;
}

export const WantToSeePlatform: FC<WantToSeePlatformProps> = ({
  gradient = GRADIENT_COLOR.TEAL,
}) => {
  return (
    <FooterBanner
      background={GRADIENT_COLOR_MAPS[gradient]}
      title="Want to see Planton Cloud In Action?"
      subTitle="Don’t worry, We wont share your information to anyone."
      actions={[{ label: 'Request For Demo Today!', href: REQUEST_DEMO_URL }]}
    />
  );
};
