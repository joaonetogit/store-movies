import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo } from 'react';

export default function useHome() {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: FetchAllProducts,
    staleTime: StaleTimeQuery,
  });

  const memoizedProducts = useMemo(() => products, [products]);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [KeyForQuery.AllProducts],
      queryFn: FetchAllProducts,
    });
  }, [queryClient]);

  return { products: memoizedProducts, isLoading };
}
