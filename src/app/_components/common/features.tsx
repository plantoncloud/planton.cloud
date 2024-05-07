'use client';
import { FC, ReactNode, useMemo } from 'react';
import { Box, Stack, Tab, Tabs, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { productMainMenus } from '@/app/_utils/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IMenu } from '@/app/_utils/interfaces';

interface IMenuItem {
  label: ReactNode;
  href?: string;
}

const FeatureItem: FC<IMenuItem> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="w-full px-3 py-6 bg-neutral-900 first:rounded-t-lg last:rounded-b-lg shadow border-b border-zinc-800"
    >
      <Typography className="text-white text-xs font-normal">{label}</Typography>
    </Link>
  );
};

const FeatureList: FC = () => {
  return (
    <Stack className="justify-center items-start gap-1">
      {productMainMenus.map((menuItem, index) => (
        <FeatureItem key={index} href={menuItem.href} label={menuItem.label} />
      ))}
    </Stack>
  );
};

export const FeaturesMobile: FC = () => {
  const pathname = usePathname();
  const selectedMenu: IMenu = useMemo(
    () => productMainMenus.find(({ href }) => pathname === href),
    [pathname]
  );
  return (
    <>
      <Stack className="px-4 py-3 bg-neutral-900 shadow border-b border-zinc-800 flex-row justify-between items-center gap-12">
        <Typography className="text-neutral-50 text-sm font-semibold ">Features</Typography>
        <Stack className="flex-row justify-start items-center">
          <Typography className="text-right text-white text-xs font-normal ">
            {selectedMenu?.label}
          </Typography>
          <ExpandMore className="ml-2" />
        </Stack>
      </Stack>
      <FeatureList />
    </>
  );
};

const FeaturesComputer: FC = () => {
  const pathname = usePathname();
  const { push } = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    push(newValue);
  };

  return (
    <>
      <Stack className="w-full mt-16 px-4 py-6 bg-neutral-900 shadow border-b border-zinc-800 flex-row justify-center items-center gap-8 z-10 relative">
        <Typography className="text-neutral-50 text-2xl font-semibold ">Features</Typography>
        <Tabs
          classes={{ flexContainer: 'flex-row justify-start items-start gap-3' }}
          value={pathname}
          onChange={handleChange}
        >
          {productMainMenus.map((menuItem, index) => (
            <Tab
              classes={{ root: 'px-3 py-2.5 text-white text-sm font-medium' }}
              key={index}
              value={menuItem.href}
              label={menuItem.label}
            />
          ))}
        </Tabs>
      </Stack>
    </>
  );
};

export function Features() {
  const pathname = usePathname();

  const showSecondaryMenu = useMemo(
    () => productMainMenus.map((menu) => menu.href).includes(pathname),
    [pathname]
  );

  return (
    <>
      {showSecondaryMenu && (
        <>
          <Box className="hidden md:block">
            <FeaturesComputer />
          </Box>
          <Box className="md:hidden">
            <FeaturesMobile />
          </Box>
        </>
      )}
    </>
  );
}
