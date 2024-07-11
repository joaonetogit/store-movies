import { ReactNode } from 'react';
import { IIdProps } from '../base';

export interface ICardActionsFooterProps extends IIdProps {
  className?: string;
  children?: ReactNode;
}
