import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/fetchAllProducts';
import { GetProductsByCategory } from '@/functions/getProductsByCategory';
import { queryClient } from '@/functions/queryClient';
import { getUniqueCategories } from '@/utils/getProductsByCategories';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import useViewport from '../useViewport';

export default function useHeaderCategories() {
  const { data: products } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: FetchAllProducts,
  });
  const { width } = useViewport();
  const isTablet = width > 820;
  const categories = useMemo(() => (products ? getUniqueCategories(products) : []), [products]);

  const prefetchCategory = async (categoryToSearch: string) => {
    await queryClient.prefetchQuery({
      queryKey: [categoryToSearch],
      queryFn: () => GetProductsByCategory(categoryToSearch),
      staleTime: StaleTimeQuery,
    });
  };

  return { categories, isTablet, prefetchCategory };
}
