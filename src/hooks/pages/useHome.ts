import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { OrderTypes } from '@/types/components/SortButton';
import { sortByName, sortByNewest, sortByPrice } from '@/utils/SortProducts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

export default function useHome() {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: FetchAllProducts,
    staleTime: StaleTimeQuery,
  });

  const [sortOrder, setSortOrder] = useState<OrderTypes>('Name');

  const sortedProducts = useMemo(() => {
    if (!products) return null;

    switch (sortOrder) {
      case 'Name':
        return sortByName(products);
      case 'Price':
        return sortByPrice(products);
      case 'Newest':
        return sortByNewest(products);
      default:
        return products;
    }
  }, [products, sortOrder]);

  const changeSortOrder = (order: OrderTypes) => {
    setSortOrder(order);
  };

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [KeyForQuery.AllProducts],
      queryFn: FetchAllProducts,
    });
  }, [queryClient]);

  return { products: sortedProducts, isLoading, changeSortOrder, sortOrder };
}
