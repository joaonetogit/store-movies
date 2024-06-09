import { FecthAllProducts } from '@/functions/FetchAllProducts';
import useCartStore from '@/store/useCartStore';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

export default function useHome() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: FecthAllProducts,
  });

  const { setItemsStorage } = useCartStore();

  useEffect(() => {
    products && setItemsStorage(products);
  }, [products, setItemsStorage]);

  return { products, error, isLoading };
}
