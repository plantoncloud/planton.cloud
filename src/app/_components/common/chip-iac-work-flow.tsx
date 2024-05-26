import { FC } from 'react';
import Image from 'next/image';
import { BoxProps, Stack, Typography, TypographyProps } from '@mui/material';
import { East } from '@mui/icons-material';
import { Chip } from './chip';
import Link from 'next/link';

interface IChipIacWorkflow {
  chipProps?: BoxProps;
  labelProps?: TypographyProps;
  iconclassName?: string;
}

export const ChipIacWorkflow: FC<IChipIacWorkflow> = ({ labelProps, chipProps, iconclassName }) => {
  return (
    <Link href="/iac-workflow">
      <Chip {...chipProps}>
        <Stack className="flex-row gap-1 justify-center items-center">
          <Image
            width={0}
            height={0}
            alt="Cloud Server"
            className={`${iconclassName} bg-transparent`}
            src="images/home/cloud-server.svg"
          />
          <Stack className="justify-center items-center gap-3 flex-row">
            <Typography
              {...labelProps}
              className={`text-white text-xs md:text-base font-normal ${
                labelProps?.className || ''
              }`}
            >
              {labelProps.children}
            </Typography>
            <East />
          </Stack>
        </Stack>
      </Chip>
    </Link>
  );
};
