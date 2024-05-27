import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { FooterBanner, GRADIENT_COLOR, GRADIENT_COLOR_MAPS, PlayListBox } from '@/app/_components';
import { REQUEST_DEMO_URL } from '@/app/_utils/constants';

interface TrustedBoxProps {
  content?: ReactNode;
}

interface TrustedImageProps {
  src: string;
  className?: string;
}

export const TrustedImage: FC<TrustedImageProps> = ({ src, className }) => {
  return (
    <Image
      alt=""
      src={src}
      className={`${className} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `}
      width={0}
      height={0}
    />
  );
};

const trusted: TrustedBoxProps[] = [
  {
    content: <TrustedImage src="/images/home/ghost.svg" className="w-9/12 md:w-fit" />,
  },
  {
    content: <TrustedImage src="/images/home/balsamiq.svg" className="w-9/12 md:w-fit" />,
  },
  {
    content: <TrustedImage src="/images/home/buffer.svg" className="opacity-40 w-9/12 md:w-fit" />,
  },
  {
    content: <TrustedImage src="/images/home/basecamp.svg" className="w-9/12 md:w-fit" />,
  },
  {
    content: <TrustedImage src="/images/home/trello.svg" className="w-9/12 md:w-fit" />,
  },
  {
    content: <TrustedImage src="/images/home/ghost.svg" className="w-9/12 md:w-fit" />,
  },
];

interface ITrustedItem extends TrustedBoxProps {
  className?: string;
  childClassName?: string;
}

const TrustedGridItem: FC<ITrustedItem> = ({ className, content, childClassName }) => {
  return (
    <Grid
      item
      xs={1}
      className={`${className} border-b border-neutral-700 p-3 md:p-6 flex items-center justify-center relative`}
    >
      {childClassName && <Box className={childClassName} />}
      {content}
    </Grid>
  );
};

export const DecodeAndOptimize: FC = () => {
  return (
    <Box>
      <Box className="px-3 md:px-0 py-5 md:py-10 border-b border-neutral-700">
        <PlayListBox
          title="Decode & Optimize with History"
          subTitle="Fast-track problem-solving and refine your builds with a full history at your
            fingertips."
          src="https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
          reverse={{ desktop: true, mobile: true }}
          subTitleClassName="!font-medium"
        />
      </Box>
      <Box className="relative">
        <Grid container columns={{ xs: 3 }}>
          {[...Array(3)].map((_, index) => (
            <TrustedGridItem
              key={index}
              content=""
              className={(index + 1) % 3 !== 0 ? 'md:border-r' : ''}
              childClassName="pt-[70%] md:pt-[50%]"
            />
          ))}
        </Grid>
        <Stack className="w-full absolute top-1/2 md:top-3/4 transform left-1/2 -translate-x-1/2 -translate-y-1/2 justify-start items-center">
          <Typography className="text-center text-white text-3xl md:text-5xl font-bold ">
            Trusted By.
          </Typography>
        </Stack>
      </Box>

      <Grid container columns={{ xs: 2, md: 3 }}>
        {trusted.map((data, index) => (
          <TrustedGridItem
            key={index}
            {...data}
            className={`border-r ${(index + 1) % 3 !== 0 ? 'md:border-r' : 'md:border-r-0'}`}
            childClassName="pt-[100%]"
          />
        ))}
      </Grid>
      <FooterBanner
        varient="sub"
        background={GRADIENT_COLOR_MAPS[GRADIENT_COLOR.BLUE]}
        title="Trial Plantoncloud Enterprise to see our customizable platform, security, and performance in action."
        actions={[
          { label: 'Request For Demo Today!', href: REQUEST_DEMO_URL },
          { label: 'Contact Sales', href: REQUEST_DEMO_URL },
        ]}
      />
    </Box>
  );
};
