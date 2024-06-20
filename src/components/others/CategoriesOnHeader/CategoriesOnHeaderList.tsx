import { ICategoriesOnHeaderListProps } from '@/types/components/HomeCategoriesList';

export default function CategoriesOnHeaderList({ children }: ICategoriesOnHeaderListProps) {
  return <div className="flex flex-wrap items-center justify-center gap-2">{children}</div>;
}
