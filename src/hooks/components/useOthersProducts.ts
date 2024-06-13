import { GetProductsByCategory } from '@/functions/GetProductsByCategory';
import { useQuery } from '@tanstack/react-query';

export default function useOthersProducts(id: string, category: string) {
  const { data: productsByCategory, isLoading } = useQuery({
    queryKey: ['category', category],
    queryFn: () => GetProductsByCategory(category),
  });

  const productsWithoutCurrent = productsByCategory?.filter((product) => product.id !== id);

  return {
    productsWithoutCurrent,
    isLoading,
  };
}
