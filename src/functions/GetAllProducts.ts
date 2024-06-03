import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export async function FecthAllProducts() {
  const URL = 'https://api-movie-store.vercel.app/api/products';
  console.log('URL', URL);
  return axios.get(URL);
}

export default function GetAllProducts() {
  const { data, error, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ['films'],
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
