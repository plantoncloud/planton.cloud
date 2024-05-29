import { FC } from 'react';
import Image from 'next/image';
import { BoxProps, Stack, SvgIconProps, Typography, TypographyProps } from '@mui/material';
import { East } from '@mui/icons-material';
import { Chip } from './chip';
import Link from 'next/link';

interface IChipIacWorkflow {
  chipProps?: BoxProps;
  labelProps?: TypographyProps;
  iconclassName?: string;
  eastIconProps?: SvgIconProps;
}

export const ChipIacWorkflow: FC<IChipIacWorkflow> = ({
  labelProps,
  chipProps,
  iconclassName,
  eastIconProps,
}) => {
  return (
    <Link href="/iac-workflow">
      <Chip {...chipProps}>
        <Stack className="flex-row gap-3 justify-between items-center">
          <Stack className="justify-center items-center gap-1 flex-row">
            <Image
              width={0}
              height={0}
              alt="Cloud Server"
              className={`${iconclassName} w-7 bg-transparent`}
              src="images/home/cloud-server.svg"
            />
            <Typography
              {...labelProps}
              className={`text-white text-sm md:text-base font-normal ${
                labelProps?.className || ''
              }`}
            >
              {labelProps.children}
            </Typography>
          </Stack>
          <East {...eastIconProps} />
        </Stack>
      </Chip>
    </Link>
  );
};
