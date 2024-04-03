'use client';
import { FC, SyntheticEvent, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import {
  Box,
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
  Stack,
  SvgIcon,
  Typography,
  styled,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { IMenu } from '@/app/_utils/interfaces';
import { productMainMenus, rightMenus } from '@/app/_utils/constants';

const StyledLeftItemContainer = styled(Stack)(({ theme }) => ({
  '&:hover': {
    '*': {
      color: `${theme.palette.primary.main} !important`,
    },
  },
}));

const LeftMenuItemBox: FC<IMenu> = ({ label, subLabel, icon: Icon, href }) => {
  const { push } = useRouter();
  const handleMenuItemClick = (href: string) => {
    push(href);
  };
  return (
    <StyledLeftItemContainer
      className="w-full pl-3 pr-2.5 pt-3 pb-5 gap-1 hover:bg-zinc-900  hover:first:rounded-t-xl hover:last:rounded-b-xl  border-b last:border-b-0 border-zinc-900 backdrop-blur-md justify-center items-start cursor-pointer"
      onClick={() => handleMenuItemClick(href)}
    >
      <Stack className="justify-start items-center gap-1.5 flex-row">
        <SvgIcon component={Icon} htmlColor="white" />
        <Typography className="text-neutral-50 text-sm font-semibold ">{label}</Typography>
      </Stack>
      <Typography className="text-zinc-500 text-xs font-normal ">{subLabel}</Typography>
    </StyledLeftItemContainer>
  );
};

const RightMenuItemBox: FC<IMenu> = ({ label, href }) => {
  return (
    <Link className="text-white text-xs font-normal hover:text-primary-50" href={href ?? ''}>
      {label}
    </Link>
  );
};

export const ProductMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack className="flex-row cursor-pointer items-center" onClick={handleToggle}>
      <Typography
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        className="text-sm"
      >
        Product
      </Typography>
      <ArrowDropDown />
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
            }}
          >
            <Paper className="p-2 bg-neutral-950 bg-opacity-70 rounded-xl border border-neutral-800 backdrop-blur-3xl">
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  component="div"
                  className="inline-flex gap-3 items-start justify-start"
                >
                  <Stack className="justify-start items-start gap-1">
                    {productMainMenus.map((menuItem, index) => (
                      <LeftMenuItemBox
                        key={index}
                        icon={menuItem.icon}
                        label={menuItem.label}
                        subLabel={menuItem.subLabel}
                        href={menuItem.href}
                      />
                    ))}
                  </Stack>
                  <Box className="w-px h-96 origin-top-left bg-neutral-950 bg-opacity-70 border border-neutral-800 backdrop-blur-3xl" />
                  <Stack className="pl-4 pr-32 pt-6 pb-64 bg-neutral-950 bg-opacity-70 rounded-tr-xl rounded-br-xl backdrop-blur-3xl justify-start items-center ">
                    <Stack className="self-stretch  justify-start items-start gap-4 ">
                      <Typography className="text-neutral-50 text-sm font-semibold ">
                        Explore
                      </Typography>
                      <Stack className="justify-start items-start gap-3">
                        {rightMenus.map((menuItem, index) => (
                          <RightMenuItemBox
                            key={index}
                            label={menuItem.label}
                            href={menuItem.href}
                          />
                        ))}
                      </Stack>
                    </Stack>
                  </Stack>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};
