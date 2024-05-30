import { FC } from 'react';
import Image from 'next/image';
import { Stack, Typography } from '@mui/material';
import { IPlan } from '@/app/_utils/interfaces';
import { RoundBtnSmall } from './btn';

export const Plan: FC<IPlan> = ({
  imgSrc,
  name,
  price,
  period,
  features,
  isPopular,
  className,
}) => {
  return (
    <Stack
      className={`${className} h-full md:min-w-80 relative px-5 md:px-8 pt-5 md:pt-8 pb-4 bg-black opacity-80 rounded-2xl gap-8 z-10 ${
        isPopular ? 'border-4 border-slate-900 yellow-border-gradient mt-4 md:mt-0' : ''
      }`}
    >
      {isPopular && (
        <Stack className="absolute -top-[15px] md:-top-[18px] inset-0 items-center">
          <Typography className="px-3 py-1.5 text-white text-xs md:text-base font-medium leading-snug bg-yellow-600 rounded-lg z-10">
            🔥 MOST POPULAR
          </Typography>
        </Stack>
      )}

      <Stack className="self-stretch justify-start items-start gap-2.5 flex-grow">
        <Stack className="justify-center items-start gap-2.5">
          <Image src={imgSrc} alt="" width={0} height={0} className="w-fit" />
          <Typography className="px-3 py-1.5 bg-neutral-800 rounded-lg text-white text-xs md:text-base font-medium leading-snug">
            {name}
          </Typography>
        </Stack>
        <Stack className="justify-start items-start gap-3.5">
          <Stack className="flex-row justify-start items-center gap-1.5">
            <Typography className="text-center text-white text-2xl md:text-4xl font-bold">
              {price}
            </Typography>
            <Typography
              variant="caption"
              className="text-center text-zinc-600 text-sm font-normal leading-snug"
            >
              {period}
            </Typography>
          </Stack>

          {features.map((feature, index) => (
            <Stack key={index} className="flex-row justify-start items-center gap-1">
              <Image
                src="/images/code-to-cloud/check.svg"
                alt=""
                width={0}
                height={0}
                className="w-fit"
              />
              <Typography className="text-white text-xs md:text-sm font-medium leading-snug">
                {feature}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <RoundBtnSmall className="px-4 py-2.5 self-stretch bg-teal-600 border-none">
        Choose Plan
      </RoundBtnSmall>
    </Stack>
  );
};
