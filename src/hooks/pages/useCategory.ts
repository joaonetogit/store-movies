import { GetProductsByCategory } from '@/functions/GetProductsByCategory';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useCategory() {
  const { category } = useParams();
  const categoryToSearch = category as string;

  const { data: productCategory, isLoading } = useQuery({
    queryKey: ['product', categoryToSearch],
    queryFn: () => GetProductsByCategory(categoryToSearch),
    enabled: !!categoryToSearch,
  });

  return {
    productCategory,
    isLoading,
  };
}
