import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Box, Stack, Typography } from '@mui/material';
import { IMenu, companyMenus, getStartedMenus, productMainMenus } from './menu';

interface ConnectIconProps {
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  src: string | StaticImport;
  alt?: string;
}

const ConnectIcon: FC<ConnectIconProps> = ({ width = 16, height = 16, src, alt = '' }) => {
  return <Image width={width} height={height} className="w-4 h-4" src={src} alt={alt} />;
};

interface GrayHeadLabelProps {
  label: string;
}

const GrayHeadLabel: FC<GrayHeadLabelProps> = ({ label }) => {
  return <Typography className="text-zinc-700 text-xs font-normal uppercase">{label}</Typography>;
};

const MenuLabel: FC<IMenu> = ({ label, href }) => {
  const className = 'text-white text-xs font-normal';

  return href ? (
    <Link href={href} className={className}>
      {label}
    </Link>
  ) : (
    <Typography className={className}>{label}</Typography>
  );
};

const DotLabel: FC = () => {
  return <Typography className="w-0.5 h-0.5 bg-zinc-300 rounded-full" />;
};

const Border: FC = () => {
  return <Box className="self-stretch h-px border border-zinc-800" />;
};

interface MenuGroupProps {
  title: string;
  items: IMenu[];
}

const MenuGroup: FC<MenuGroupProps> = ({ title, items = [] }) => {
  return (
    <Box className="flex-col justify-start items-start gap-3 inline-flex">
      <GrayHeadLabel label={title} />
      {items.map((itemItem, index) => (
        <MenuLabel {...itemItem} key={index} />
      ))}
    </Box>
  );
};

const menus: MenuGroupProps[] = [
  {
    title: 'EXPLORE FEATURES',
    items: productMainMenus,
  },
  {
    title: 'GET STARTED',
    items: getStartedMenus,
  },
  {
    title: 'COMPANY',
    items: companyMenus,
  },
];

export default function Footer() {
  return (
    <Stack className="py-8 bg-stone-900 bg-opacity-70 border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl gap-52">
      <Stack className="container grow shrink basis-0 justify-start items-start gap-6">
        <Stack className="flex-row self-stretch justify-between items-start gap-96">
          <Stack className="justify-start items-start gap-8">
            <Image
              width={224}
              height={40}
              className="w-56 h-10"
              src="images/footer/footer-logo.svg"
              alt=""
            />
            <Stack className="justify-start items-start gap-3">
              <GrayHeadLabel label="Connect with us:" />
              <Stack className="flex-row justify-start items-start gap-2">
                <ConnectIcon src="images/footer/twitter-x.svg" alt="Twitter-X" />
                <ConnectIcon src="images/footer/facebook.svg" alt="Facebook" />
                <ConnectIcon src="images/footer/instagram.svg" alt="Instagram" />
                <ConnectIcon src="images/footer/github.svg" alt="Github" />
              </Stack>
            </Stack>
          </Stack>
          <Stack className="flex-row grow justify-center">
            <Stack className="flex-row shrink  justify-start items-start gap-20">
              {menus.map((menuGroup, index) => (
                <MenuGroup {...menuGroup} key={index} />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Border />
        <Stack className="w-full flex-row justify-between items-center gap-96">
          <MenuLabel label="©2024 Planton Cloud Inc. All Rights Reserved." />
          <Stack className="flex-row justify-start items-center gap-5">
            <MenuLabel label="Status" />
            <DotLabel />
            <MenuLabel label="Legal" />
            <DotLabel />
            <MenuLabel label="Privacy" />
            <DotLabel />
            <MenuLabel label="Terms & Conditions" />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
