import { FecthAllProducts } from '@/functions/FetchAllProducts';
import { useQuery } from '@tanstack/react-query';

export default function useHome() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['products'],
    queryFn: FecthAllProducts,
  });

  return { products, error, isLoading };
}
