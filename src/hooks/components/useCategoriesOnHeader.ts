import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { GetProductsByCategory } from '@/functions/GetProductsByCategory';
import { queryClient } from '@/functions/QueryClient';
import { GetUniqueCategories } from '@/utils/GetCategories';
import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import useViewport from '../useViewport';

export default function useHeaderCategories() {
  const { data: products } = useQuery({
    queryKey: ['AllProducts'],
    queryFn: FetchAllProducts,
  });
  const { width } = useViewport();
  const isTablet = width > 640;
  const categories = useMemo(() => (products ? GetUniqueCategories(products) : []), [products]);

  const prefetchCategory = async (categoryToSearch: string) => {
    await queryClient.prefetchQuery({
      queryKey: [categoryToSearch],
      queryFn: () => GetProductsByCategory(categoryToSearch),
      staleTime: 60000,
    });
  };

  return { categories, isTablet, prefetchCategory };
}
