import { ICategoriesOnHeaderItemProps } from '@/types/components/CategoriesOnHeaderItem';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { Link } from 'react-router-dom';

export default function CategoriesOnHeaderItem({ category }: ICategoriesOnHeaderItemProps) {
  return (
    <Link
      to={`/product/category/${GenerateSlug(category)}`}
      className="px-2 py-1 text-sm text-foreground transition-all hover:text-opacity-5 hover:underline"
    >
      {category}
    </Link>
  );
}
