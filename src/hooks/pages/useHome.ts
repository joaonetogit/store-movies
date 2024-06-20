import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

export default function useHome() {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: FetchAllProducts,
    staleTime: 1000 * 60 * 5,
  });

  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['products'],
      queryFn: FetchAllProducts,
    });
  }, [queryClient]);

  return { products: memoizedProducts, isLoading };
}
