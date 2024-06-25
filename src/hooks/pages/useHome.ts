import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { OrderTypes } from '@/types/components/SortButton';
import Sleep from '@/utils/Sleep';
import { sortByName, sortByNewest, sortByPrice } from '@/utils/SortProducts';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function useHome() {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: FetchAllProducts,
    staleTime: StaleTimeQuery,
  });

  const [sortOrder, setSortOrder] = useState<OrderTypes>('Name');
  const [sortedProducts, setSortedProducts] = useState(products);
  const [loadingOrder, setLoadingOrder] = useState(false);

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: [KeyForQuery.AllProducts],
      queryFn: FetchAllProducts,
    });
  }, [queryClient]);

  useEffect(() => {
    const sortProducts = async () => {
      if (!products) return;
      setLoadingOrder(true);

      let sorted;
      switch (sortOrder) {
        case 'Name':
          sorted = sortByName(products);
          break;
        case 'Price':
          sorted = sortByPrice(products);
          break;
        case 'Newest':
          sorted = sortByNewest(products);
          break;
        default:
          sorted = products;
      }

      await Sleep(500);
      setSortedProducts(sorted);
      setLoadingOrder(false);
    };

    sortProducts();
  }, [products, sortOrder]);

  const changeSortOrder = (order: OrderTypes) => {
    setSortOrder(order);
  };

  return { products: sortedProducts, isLoading, changeSortOrder, sortOrder, loadingOrder };
}
