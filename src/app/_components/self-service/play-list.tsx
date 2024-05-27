import { FC } from 'react';
import { Stack } from '@mui/material';
import { PlayListBox, PlayListBoxProps } from '@/app/_components';

const playLists: PlayListBoxProps[] = [
  {
    title: 'Microservice Deployment, Reimagined',
    subTitle:
      'Equip your developers with the tools to deploy and manage microservices smoothly, without the Kubernetes overhead.',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
  },
  {
    title: 'Integrated Open Source Software Deployment',
    subTitle:
      'Deploy Open-Source Software Easily: Redis, Kafka, Solr, Postgres and more... on Kubernetes.',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
    reverse: { desktop: true },
  },
  {
    title: 'Cloud Control, Simplified',
    subTitle: 'Streamlined Cloud Management, crafted for Developer Ease.',
    src: 'https://www.loom.com/embed/00c6678bcb2c42d4ab78cc6a42d057aa?sid=422baba7-dec0-4483-afd5-d874cd7f1d1a?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true',
  },
];

export const PlayList: FC = () => {
  return (
    <Stack className="justify-start items-start gap-14 md:gap-28 px-6 pt-8 md:pt-16 pb-16 md:pb-32">
      {playLists.map((item) => (
        <PlayListBox {...item} titleClassName="!font-extrabold" key={item.title} />
      ))}
    </Stack>
  );
};
