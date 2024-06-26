import useHeaderCategories from '@/hooks/components/useCategoriesOnHeader';
import { ICategoriesOnHeaderItemProps } from '@/types/components/CategoriesOnHeaderItem';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { Link } from 'react-router-dom';

export default function CategoriesOnHeaderItem({ category }: ICategoriesOnHeaderItemProps) {
  const { prefetchCategory, isTablet } = useHeaderCategories();

  return (
    <Link
      to={`/product/category/${GenerateSlug(category)}`}
      className={`flex ${isTablet ? 'w-auto' : 'w-full'} items-center justify-center px-2 py-1 text-left text-sm text-foreground transition-all hover:text-opacity-5 hover:underline sm:text-center`}
      onMouseEnter={() => prefetchCategory(category)}
      onFocus={() => prefetchCategory(category)}
    >
      {category}
    </Link>
  );
}
