import { FetchAllProducts } from '@/functions/FetchAllProducts';
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
      queryKey: ['AllProducts'],
      queryFn: FetchAllProducts,
      staleTime: 60000,
    });
  };

  return { sizeClasses, prefetchAllProduct };
}
