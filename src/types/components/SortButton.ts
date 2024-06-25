export type OrderTypes = 'Price' | 'Name' | 'Newest';

export interface ISortButtonProps {
  label: string;
  order: OrderTypes;
  orderNow: OrderTypes;
  onChangeSortOrder: (order: OrderTypes) => void;
}
