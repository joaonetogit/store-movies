import { ReactNode } from 'react';

export interface IAlertConfirmActionProps {
  onClick: () => void;
  labelButtonAction: ReactNode;
  description: string;
}
