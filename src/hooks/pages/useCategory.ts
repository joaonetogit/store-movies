import { GetProductsByCategory } from '@/functions/getProductsByCategory';
import { capitalizeWords } from '@/utils/capitalizeWords';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useCategory() {
  const { category } = useParams();
  const categoryToSearch = category as string;

  const categoryToSearchCapitalized = category ? capitalizeWords(category) : '';

  const { data: productCategory, isLoading } = useQuery({
    queryKey: [categoryToSearch],
    queryFn: () => GetProductsByCategory(categoryToSearch),
    enabled: !!categoryToSearch,
  });

  return {
    categoryToSearchCapitalized,
    productCategory,
    isLoading,
  };
}
