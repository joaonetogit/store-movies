import { IGridShowItemsProps } from '@/types/components/GridShowItems';

export default function GridShowItems({ children, className }: IGridShowItemsProps) {
  return (
    <div className={`grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 ${className}`}>
      {children}
    </div>
  );
}
