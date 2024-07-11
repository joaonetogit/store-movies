import { ReactNode } from 'react';

export interface IChildren {
  children: ReactNode;
}

export interface IIdProps {
  id: string;
}

export interface ISizeClasses {
  [key: string]: string;
}
