import api from '@/api/api';
import { useQuery } from '@tanstack/react-query';

export async function FecthAllProducts() {
  const URL = import.meta.env.VITE_API_BASE_URL;
  return api.get(URL);
}

export default function GetAllProducts() {
  const { data, error, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['products'],
    queryFn: FecthAllProducts,
  });

  const films = data?.data;
  const loadingFilms = isLoading;

  return {
    films,
    loadingFilms,
    error,
    refetch,
    isRefetching,
  };
}
