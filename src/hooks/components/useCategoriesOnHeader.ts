import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { GetUniqueCategories } from '@/utils/GetCategories';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import useViewport from '../useViewport';

export default function useHeaderCategories() {
  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: FetchAllProducts,
  });
  const { width } = useViewport();
  const isTablet = width > 640;
  const categories = useMemo(() => (products ? GetUniqueCategories(products) : []), [products]);

  return { categories, isTablet };
}
