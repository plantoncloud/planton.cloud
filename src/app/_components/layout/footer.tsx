'use client';
import React, { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Box, Stack, Typography, TypographyProps } from '@mui/material';
import { companyMenus, getStartedMenus, productMainMenus } from '@/app/_utils/constants';
import { IMenu } from '@/app/_utils/interfaces';
import { ArrowDropUp } from '@mui/icons-material';
import { useIsMobile } from '@/app/_utils/hooks';

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

const GroupLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      className="text-white text-sm font-medium md:text-zinc-700 md:text-xs md:font-normal md:uppercase"
    >
      {props.children}
    </Typography>
  );
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
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  return (
    <Stack className="gap-4 py-3 border-b border-neutral-700 md:py-0 md:border-b-0">
      <Stack
        className="items-center justify-between gap-4 flex-row cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <GroupLabel>{title}</GroupLabel>
        <ArrowDropUp className={`${open ? 'rotate-0' : 'rotate-180'} md:hidden`} />
      </Stack>
      {(open || !isMobile) && items.map((item, index) => <MenuLabel {...item} key={index} />)}
    </Stack>
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

const Menus: FC = () => {
  return menus.map((menuGroup, index) => <MenuGroup {...menuGroup} key={index} />);
};

const connectIcons = [
  { name: 'Twitter-X', src: 'images/footer/twitter-x.svg' },
  { name: 'Facebook', src: 'images/footer/facebook.svg' },
  { name: 'Instagram', src: 'images/footer/instagram.svg' },
  { name: 'Github', src: 'images/footer/github.svg' },
];

const ConnectIcons: FC = () => {
  return (
    <Stack className="flex-row gap-2">
      {connectIcons.map(({ name, src }, index) => (
        <ConnectIcon src={src} alt={name} key={index} />
      ))}
    </Stack>
  );
};

const legals = ['Status', 'Legal', 'Privacy', 'Terms & Conditions'];

const Legals: FC = () => {
  return (
    <Stack className="flex-row items-center gap-5">
      {legals.map((label, index) => {
        return (
          <React.Fragment key={index}>
            <MenuLabel label={label} />
            {index < legals.length - 1 && <DotLabel />}
          </React.Fragment>
        );
      })}
    </Stack>
  );
};

const allRightsLabel = '©2024 Planton Cloud Inc. All Rights Reserved.';

export default function Footer() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <Stack>
      <Stack className="px-4 py-5 gap-6">
        <Stack className="flex-row items-center gap-1">
          <Image width={21} height={24} src="images/header-logo.svg" alt="" />
          <MenuLabel label="©2024" />
        </Stack>
        <Menus />
      </Stack>
      <Stack>
        <Stack className="px-4 py-5 gap-4">
          <ConnectIcons />
          <Legals />
        </Stack>
        <Stack className="py-2 border-t border-neutral-700 items-center">
          <MenuLabel label={allRightsLabel} />
        </Stack>
      </Stack>
    </Stack>
  ) : (
    <Box className="py-8 bg-stone-900 bg-opacity-70 border-2 border-neutral-800 border-opacity-50 backdrop-blur-3xl">
      <Stack className="container grow shrink basis-0 gap-6">
        <Stack className="flex-row self-stretch justify-between gap-96">
          <Stack className=" gap-8">
            <Image
              width={224}
              height={40}
              className="w-56 h-10"
              src="images/footer/footer-logo.svg"
              alt=""
            />
            <Stack className="gap-3">
              <GrayHeadLabel label="Connect with us:" />
              <ConnectIcons />
            </Stack>
          </Stack>
          <Stack className="flex-row grow justify-center">
            <Stack className="flex-row shrink gap-20">
              <Menus />
            </Stack>
          </Stack>
        </Stack>
        <Border />
        <Stack className="w-full flex-row justify-between items-center gap-96">
          <MenuLabel label={allRightsLabel} />
          <Legals />
        </Stack>
      </Stack>
    </Box>
  );
}
