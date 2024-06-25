import { ISortButtonProps } from '@/types/components/SortButton';

export default function SortButton({
  label,
  order,
  orderNow,
  onChangeSortOrder,
  ...props
}: ISortButtonProps) {
  return (
    <button
      className={`${order == orderNow ? 'active underline' : 'no-underline'}`}
      onClick={() => onChangeSortOrder(order)}
      {...props}
    >
      {label}
    </button>
  );
}
