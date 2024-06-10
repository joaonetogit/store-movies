import { IGridShowItemsProps } from '@/types/components/GridShowItems';

export default function GridShowItems({ children }: IGridShowItemsProps) {
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
