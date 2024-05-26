'use client';
import { FC, ReactNode, SyntheticEvent, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  Box,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { productMainMenus } from '@/app/_utils/constants';
import { IMenu } from '@/app/_utils/interfaces';

interface IMenuItem {
  label: ReactNode;
  href?: string;
}

const FeatureItem: FC<IMenuItem> = ({ label, href }) => {
  return (
    <Link
      href={href}
      className="w-full px-3 py-6 bg-neutral-900 first:rounded-t-sm last:rounded-b-sm shadow border-b border-zinc-800"
    >
      <Typography className="text-white text-xs font-normal">{label}</Typography>
    </Link>
  );
};

const FeatureList: FC = () => {
  return (
    <Stack className="justify-center items-start">
      {productMainMenus.map((menuItem, index) => (
        <FeatureItem key={index} href={menuItem.href} label={menuItem.label} />
      ))}
    </Stack>
  );
};

export const FeaturesMobile: FC = () => {
  const anchorRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();
  const selectedMenu: IMenu = useMemo(
    () => productMainMenus.find(({ href }) => pathname === href),
    [pathname]
  );

  const handleToggle = () => {
    setOpenMenu((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpenMenu(false);
  };

  return (
    <>
      <Stack className="px-4 py-3 bg-neutral-900 shadow border-b border-zinc-800 flex-row justify-between items-center gap-12 relative z-10">
        <Typography className="text-neutral-50 text-sm font-semibold ">Features</Typography>
        <Stack
          className="flex-row justify-start items-center cursor-pointer"
          ref={anchorRef}
          id="composition-button"
          aria-controls={openMenu ? 'composition-menu' : undefined}
          aria-expanded={openMenu ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Typography className="text-right text-white text-xs font-normal ">
            {selectedMenu?.label}
          </Typography>
          <ExpandMore className="ml-2" />
        </Stack>
      </Stack>
      <Popper
        open={openMenu}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        className="z-20"
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper className="z-20">
              <ClickAwayListener onClickAway={handleClose}>
                <FeatureList />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
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
