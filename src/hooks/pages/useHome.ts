import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

export default function useHome() {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: ['AllProducts'],
    queryFn: FetchAllProducts,
    staleTime: 60000,
  });

  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ['AllProducts'],
      queryFn: FetchAllProducts,
    });
  }, [queryClient]);

  return { products: memoizedProducts, isLoading };
}
