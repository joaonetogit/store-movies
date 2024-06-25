import { ComponentProps } from 'react';

export type OrderTypes = 'Price' | 'Name' | 'Newest';

export interface ISortButtonProps extends ComponentProps<'button'> {
  label: string;
  order: OrderTypes;
  orderNow: OrderTypes;
  onChangeSortOrder: (order: OrderTypes) => void;
}
