import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/fetchAllProducts';
import { OrderTypes } from '@/types/components/SortButton';
import { IProduct } from '@/types/product';
import { sortByName, sortByNewest, sortByPrice } from '@/utils/sortProducts';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

export default function useHome() {
  const { data: products, isLoading } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: () => FetchAllProducts(),
    staleTime: StaleTimeQuery,
  });

  const [sortOrder, setSortOrder] = useState<OrderTypes>(OrderTypes.Name);
  const sortOptions = Object.values(OrderTypes);

  const getSortedProducts = (products: IProduct[], sortOrder: OrderTypes) => {
    switch (sortOrder) {
      case OrderTypes.Name:
        return sortByName(products);
      case OrderTypes.Price:
        return sortByPrice(products);
      case OrderTypes.Newest:
        return sortByNewest(products);
      default:
        return products;
    }
  };

  const sortedProducts = useMemo(() => {
    if (!products) return [];

    return getSortedProducts(products, sortOrder);
  }, [products, sortOrder]);

  const changeSortOrder = (order: OrderTypes) => {
    setSortOrder(order);
  };

  return { products: sortedProducts, isLoading, changeSortOrder, sortOrder, sortOptions };
}
