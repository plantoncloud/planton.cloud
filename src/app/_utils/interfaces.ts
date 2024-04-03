import { FC, ReactNode } from "react";

export interface IMenu {
  icon?: FC;
  label: string | ReactNode;
  subLabel?: string | ReactNode;
  href?: string;
}
