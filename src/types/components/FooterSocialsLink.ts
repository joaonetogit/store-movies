import { ComponentProps, ReactNode } from 'react';

export interface IFooterSocialsLinkProps extends ComponentProps<'a'> {
  link: string;
  children: ReactNode;
}
