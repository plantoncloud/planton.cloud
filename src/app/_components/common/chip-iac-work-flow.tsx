import { FC } from 'react';
import Image from 'next/image';
import { Stack, Typography, TypographyProps } from '@mui/material';
import { East } from '@mui/icons-material';
import { Chip } from './chip';
import Link from 'next/link';

export const ChipIacWorkflow: FC<TypographyProps> = (props) => {
  return (
    <Link href="/iac-workflow">
      <Chip>
        <Stack className="flex-row gap-1 justify-center items-center">
          <Image
            width={28}
            height={28}
            alt="Cloud Server"
            className="bg-transparent"
            src="images/home/cloud-server.svg"
          />
          <Stack className="justify-center items-center gap-3 flex-row">
            <Typography
              {...props}
              className={`text-white text-base font-normal ${props.className}`}
            >
              {props.children}
            </Typography>
            <East />
          </Stack>
        </Stack>
      </Chip>
    </Link>
  );
};
