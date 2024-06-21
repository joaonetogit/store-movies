import { ComponentProps } from "react";

export interface IFooterSocialsLinkProps extends ComponentProps<'a'>{
  link: string;
  children: React.ReactNode;
}
