import { FC } from 'react';
import { Stack } from '@mui/material';
import { PlayListBox, PlayListBoxProps } from '@/app/_components';

const playLists: PlayListBoxProps[] = [
  {
    title: 'Insightful Ops, Effortless Troubleshooting',
    subTitle: 'Dive into history for quick fixes and smarter infrastructure evolution',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
  },
  {
    title: 'Streamline & Secure Your Workflow',
    subTitle: 'Unlock team synergy and safeguard your infrastructure changes, all in one spot.',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
    reverse: { desktop: true },
  },
  {
    title: 'Decode & Optimize with History',
    subTitle:
      'Fast-track problem-solving and refine your builds with a full history at your fingertips.',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
  },
  {
    title: 'Effortless Team Sync & Compliance',
    subTitle: 'Centralized Pulumi Logs for instant team alignment and compliance clarity.',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
    reverse: { desktop: true },
  },
];

export const IacWorkFlowPlayList: FC = () => {
  return (
    <Stack className="max-w-screen-2xl mx-auto justify-start items-start gap-14 md:gap-28 px-6 mt-8 md:mt-48 pb-16 md:pb-32">
      {playLists.map((item, index) => (
        <PlayListBox {...item} key={index} />
      ))}
    </Stack>
  );
};
