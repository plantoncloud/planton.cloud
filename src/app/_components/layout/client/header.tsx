'use client';

import { FC, ReactNode, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ArrowDropUp, Close, DensityMedium, OpenInNew } from '@mui/icons-material';
import { Box, Button, Fade, Popper, Stack, Typography, TypographyProps } from '@mui/material';

import { Features, ProductMenu, ProductMenuItem, RoundBtn } from '@/app/_components';
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

const MenuSection: FC<MenuSectionProps> = ({ children }) => {
  return <Stack className="flex-row items-center gap-4 text-sm">{children}</Stack>;
};

function HeaderComputer() {
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
    </Box>
  );
}

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

function HeaderMobile() {
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [openProductMenu, setOpenProductMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu((previousOpen) => !previousOpen);
  };

  const canBeOpen = openMenu && Boolean(anchorRef.current);
  const id = canBeOpen ? 'transition-popper' : undefined;

  return (
    <>
      <Stack
        ref={anchorRef}
        className="flex-row p-2.5 bg-black bg-opacity-10 border-b border-neutral-800 backdrop-blur-md justify-between items-center relative z-10"
      >
        <Link href="/">
          <Image src="/images/header-logo.svg" width={24} height={24} alt="Logo" />
        </Link>
        <Stack
          aria-describedby={id}
          onClick={handleClick}
          className="w-8 h-8 items-center justify-center bg-black bg-opacity-10 rounded-[28px] border border-neutral-800 backdrop-blur-md cursor-pointer"
        >
          {openMenu ? <Close fontSize="small" /> : <DensityMedium fontSize="small" />}
        </Stack>
      </Stack>

      <Popper
        id={id}
        open={openMenu}
        anchorEl={anchorRef.current}
        transition
        placement="bottom"
        className="z-20 w-full"
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
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
          </Fade>
        )}
      </Popper>
    </>
  );
}

export function Header() {
  return (
    <Box>
      <Box className="hidden md:block">
        <HeaderComputer />
      </Box>
      <Box className="md:hidden">
        <HeaderMobile />
      </Box>
      <Features />
    </Box>
  );
}
