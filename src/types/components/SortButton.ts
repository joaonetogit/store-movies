import { ComponentProps } from 'react';

export enum OrderTypes {
  Name = 'Name',
  Price = 'Price',
  Newest = 'Newest',
}

export interface ISortButtonProps extends ComponentProps<'button'> {
  label: string;
  order: OrderTypes;
  orderNow: OrderTypes;
  onChangeSortOrder: (order: OrderTypes) => void;
}
