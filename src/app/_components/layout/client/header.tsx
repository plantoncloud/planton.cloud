'use client';

import { FC, ReactNode, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { OpenInNew } from '@mui/icons-material';
import { Box, Button, Stack, Tab, Tabs, Typography } from '@mui/material';

import { ProductMenu } from '@/app/_components';
import { productMainMenus } from '@/app/_utils/constants';

interface MenuSectionProps {
  children: ReactNode;
}

const HeaderLogo = () => {
  return (
    <Link href="/" className="p-[10px]">
      <Image src="/images/header-logo.svg" width={24} height={24} alt="Logo" />
    </Link>
  );
};

const SecondaryMenu: FC = () => {
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

const MenuSection: FC<MenuSectionProps> = ({ children }) => {
  return <Stack className="flex-row items-center gap-4 text-sm">{children}</Stack>;
};

export default function Header() {
  const pathname = usePathname();

  const showSecondaryMenu = useMemo(
    () => productMainMenus.map((menu) => menu.href).includes(pathname),
    [pathname]
  );

  return (
    <Box>
      <Stack className="w-full fixed top-0 left-0 z-20 flex-row justify-between items-center p-[6px] border-b border-b-gray-800 bg-gray-900 bg-opacity-0 backdrop-blur-sm">
        <MenuSection>
          <HeaderLogo />
          <ProductMenu />
          <Link href="https://discord.com/" target="_blank">
            Join Discord
          </Link>
        </MenuSection>
        <MenuSection>
          <Button variant="contained" className="bg-primary-50 p-[10px] rounded-[32px] px-4">
            Sign In
          </Button>
          <Button>Sign Up</Button>
          <Link href="https://console.planton.cloud/" target="_blank" className="mr-4">
            <Stack className="flex-row">
              <Typography className="text-sm">Open Console</Typography>
              <OpenInNew className="text-lg ml-1" />
            </Stack>
          </Link>
        </MenuSection>
      </Stack>
      {showSecondaryMenu && <SecondaryMenu />}
    </Box>
  );
}
