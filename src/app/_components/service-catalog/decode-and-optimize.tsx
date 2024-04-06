import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { Box, Grid, Typography } from '@mui/material';
import { FooterBanner, GRADIENT_COLOR, GRADIENT_COLOR_MAPS, PlayListBox } from '@/app/_components';
import { REQUEST_DEMO_URL } from '@/app/_utils/constants';

interface TrustedBoxProps {
  content: ReactNode;
  isSquare?: boolean;
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
      className={`w-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}
      width={0}
      height={0}
    />
  );
};

const trusted: TrustedBoxProps[] = [
  {
    content: '',
  },
  {
    content: (
      <Typography className="text-center text-white text-5xl font-bold mt-[30%] mb-10">
        Trusted By.
      </Typography>
    ),
  },

  {
    content: '',
  },
  {
    content: <TrustedImage src="/images/home/ghost.svg" />,
    isSquare: true,
  },
  {
    content: <TrustedImage src="/images/home/balsamiq.svg" />,
    isSquare: true,
  },
  {
    content: <TrustedImage src="/images/home/buffer.svg" className="opacity-40" />,
    isSquare: true,
  },
  {
    content: <TrustedImage src="/images/home/basecamp.svg" />,
    isSquare: true,
  },
  {
    content: <TrustedImage src="/images/home/trello.svg" />,
    isSquare: true,
  },
  {
    content: <TrustedImage src="/images/home/ghost.svg" />,
    isSquare: true,
  },
  {
    content: <Box className="pt-[30%]" />,
  },
  {
    content: '',
  },
  {
    content: '',
  },
];

export const DecodeAndOptimize: FC = () => {
  return (
    <Box>
      <Box className="py-10 border-b border-neutral-700">
        <PlayListBox
          title="Decode & Optimize with History"
          subTitle="Fast-track problem-solving and refine your builds with a full history at your
            fingertips."
          src="https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
          isReverse={true}
        />
      </Box>
      <Grid container columns={3}>
        {trusted.map((data, index) => (
          <Grid
            item
            key={index}
            xs={1}
            className={`${
              (index + 1) % 3 !== 0 ? 'border-r' : ''
            } border-b border-neutral-700 p-6 flex items-center justify-center relative`}
          >
            {data.isSquare && <Box className="pt-[100%]" />}
            {data.content}
          </Grid>
        ))}
      </Grid>
      <FooterBanner varient='sub'
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
