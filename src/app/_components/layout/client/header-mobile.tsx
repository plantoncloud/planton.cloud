'use client';

import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowDropUp, Close, DensityMedium, OpenInNew } from '@mui/icons-material';
import { Box, Stack, Typography, TypographyProps } from '@mui/material';

import { ProductMenuItem, RoundBtn } from '@/app/_components';
import { productMainMenus } from '@/app/_utils/constants';

const MenuLabel: FC<TypographyProps> = (props) => {
  return (
    <Typography
      {...props}
      className={`${props.className}  text-white text-sm font-medium cursor-pointer`}
    >
      {props.children}
    </Typography>
  );
};

export function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProductMenu, setOpenProductMenu] = useState(false);
  return (
    <>
      <Stack className="flex-row p-2.5 bg-black bg-opacity-10 border-b border-neutral-800 backdrop-blur-md justify-between items-center">
        <Link href="/">
          <Image src="/images/header-logo.svg" width={24} height={24} alt="Logo" />
        </Link>
        <Stack
          onClick={() => setOpenMenu(!openMenu)}
          className="w-8 h-8 items-center justify-center bg-black bg-opacity-10 rounded-[28px] border border-neutral-800 backdrop-blur-md cursor-pointer"
        >
          {openMenu ? <Close fontSize="small" /> : <DensityMedium fontSize="small" />}
        </Stack>
      </Stack>
      {openMenu && (
        <Stack className="px-1.5 py-6 bg-black bg-opacity-20 backdrop-blur-xl gap-3">
          <RoundBtn variant="contained" className="bg-primary-50 w-full">
            Sign In
          </RoundBtn>
          <RoundBtn variant="contained" className="bg-zinc-900 bg-opacity-90 w-full">
            Sign Up
          </RoundBtn>
          <Box className="px-4 pb-2.5 pt-5">
            <Stack
              className="items-center justify-between flex-row  cursor-pointer"
              onClick={() => setOpenProductMenu(!openProductMenu)}
            >
              <MenuLabel>Products</MenuLabel>
              <ArrowDropUp className={`${openProductMenu ? '' : 'rotate-180'} `} />
            </Stack>
            {openProductMenu && (
              <Stack className="justify-start items-start gap-1 mt-2.5">
                {productMainMenus.map((menuItem, index) => (
                  <ProductMenuItem
                    key={index}
                    icon={menuItem.icon}
                    label={menuItem.label}
                    subLabel={menuItem.subLabel}
                    href={menuItem.href}
                  />
                ))}
              </Stack>
            )}
          </Box>
          <MenuLabel className="px-4 py-2.5">
            <Link href="https://discord.com/" target="_blank">
              Join Discord
            </Link>
          </MenuLabel>
          <MenuLabel className="px-4 py-2.5">Pricing</MenuLabel>
          <Link href="https://console.planton.cloud/" target="_blank" className="px-4 py-2.5 ">
            <Stack className="flex-row gap-1">
              <MenuLabel>Open Console</MenuLabel>
              <OpenInNew />
            </Stack>
          </Link>
        </Stack>
      )}
    </>
  );
}
