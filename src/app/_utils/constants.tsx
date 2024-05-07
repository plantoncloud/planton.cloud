import ImgCloud from 'public/images/header/product-menu/cloud.svg';
import ImgSelfService from 'public/images/header/product-menu/self-service.svg';
import ImgPulumi from 'public/images/header/product-menu/pulumi.svg';
import ImgResourceCatalog from 'public/images/header/product-menu/resource-catalog.svg';
import ImgAuditManagement from 'public/images/header/product-menu/audit-management.svg';

import { IMenu } from './interfaces';

export const productMainMenus: IMenu[] = [
  {
    icon: ImgCloud,
    label: `Code -> Cloud`,
    subLabel: 'Tools to Accelerate Delivery',
    href: '/code-to-cloud',
  },
  {
    icon: ImgSelfService,
    label: 'Self-Service DevOps',
    subLabel: 'Autonomous DevOps, Simplified',
    href: '/self-service',
  },
  {
    icon: ImgPulumi,
    label: 'Integrated IaC Workflows',
    subLabel: 'Powered by Pulumi',
    href: '/iac-workflow',
  },
  {
    icon: ImgResourceCatalog,
    label: 'Service Catalog',
    subLabel: 'CloudNative Component Catalog',
    href: '/service-catalog',
  },
  {
    icon: ImgAuditManagement,
    label: 'Auditable Automation',
    subLabel: 'All Actions, Recorded and Reviewed',
    href: '/auditable-automation',
  },
];

export const getStartedMenus: IMenu[] = [
  {
    label: 'Sign Up',
  },
  {
    label: 'Pricing',
  },
  {
    label: 'Contact',
  },
];

export const companyMenus: IMenu[] = [
  {
    label: 'About Us',
  },
  {
    label: 'Customers',
  },
  {
    label: 'Partners',
  },
  {
    label: 'Careers',
  },
  {
    label: 'Press',
  },
  {
    label: 'Complaince',
  },
];

export const rightMenus: IMenu[] = [
  {
    label: 'All Features',
  },
  {
    label: 'Documentation',
  },
  {
    label: 'Blog',
  },
];

export const REQUEST_DEMO_URL =
  'https://docs.google.com/forms/d/1OcFNXUzmh1ntC4JE1zekWhWPiYm6AyierLNp7vdGjMg';
