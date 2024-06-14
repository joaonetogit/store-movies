import { GetProductsByCategory } from '@/functions/GetProductsByCategory';
import { CapitalizeWords } from '@/utils/CapitalizeWords';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useCategory() {
  const { category } = useParams();
  const categoryToSearch = category as string;

  const categoryToSearchCapitalized = category ? CapitalizeWords(category) : '';

  const { data: productCategory, isLoading } = useQuery({
    queryKey: ['product', categoryToSearch],
    queryFn: () => GetProductsByCategory(categoryToSearch),
    enabled: !!categoryToSearch,
  });

  return {
    categoryToSearchCapitalized,
    productCategory,
    isLoading,
  };
}
