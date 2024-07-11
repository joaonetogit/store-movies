import { KeyForQuery } from '@/constants/KeyForQuery';
import { StaleTimeQuery } from '@/constants/StaleTimeQuery';
import { FetchAllProducts } from '@/functions/fetchAllProducts';
import { ISizeClasses } from '@/types/base';
import { useQueryClient } from '@tanstack/react-query';

export default function useLogo() {
  const sizeClasses: ISizeClasses = {
    sm: 'text-2xl',
    lg: 'text-2xl sm:text-4xl',
  } as const;
  const queryClient = useQueryClient();

  const prefetchAllProduct = async () => {
    await queryClient.prefetchQuery({
      queryKey: [KeyForQuery.AllProducts],
      queryFn: FetchAllProducts,
      staleTime: StaleTimeQuery,
    });
  };

  return { sizeClasses, prefetchAllProduct };
}
