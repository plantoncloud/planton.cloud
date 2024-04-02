import { Metadata } from 'next';

import Client from '@/app/self-service/client';

export const metadata: Metadata = {
  title: 'Self-Service DevOps',
  description: 'Self-Service DevOps',
};

export default function SelfServiceDevOps() {
  return <Client />;
}
