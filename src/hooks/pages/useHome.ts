import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/FetchAllProducts';
import GetToken from '@/functions/GetToken';
import { OrderTypes } from '@/types/components/SortButton';
import { IProduct } from '@/types/product';
import { sortByName, sortByNewest, sortByPrice } from '@/utils/SortProducts';
import { GetStoredToken, SetStoredToken } from '@/utils/Token';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

export default function useHome() {
  const usernameToAuth = import.meta.env.VITE_USERNAME_AUTH;
  const passwordToAuth = import.meta.env.VITE_PASSWORD_AUTH;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await GetToken(usernameToAuth, passwordToAuth);
      SetStoredToken(token);
    };

    fetchToken();
  }, [passwordToAuth, usernameToAuth]);

  const tokenStoraged = GetStoredToken();

  const { data: products, isLoading } = useQuery({
    queryKey: [KeyForQuery.AllProducts, tokenStoraged],
    queryFn: () =>
      tokenStoraged ? FetchAllProducts(tokenStoraged) : Promise.reject('Token not available'),
    staleTime: StaleTimeQuery,
    enabled: !!tokenStoraged,
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
