import { GetProduct } from '@/functions/GetProduct';
import { GetTimeFilm } from '@/utils/CalculateTimeFilm';
import ConvertCoin from '@/utils/ConvertCoin';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useProductID() {
  const { title } = useParams();
  const titleProduct = title as string;

  const { data: productSearched, isLoading } = useQuery({
    queryKey: ['product', titleProduct],
    queryFn: () => GetProduct(titleProduct),
  });

  let priceProduct;
  let timeFilm;

  if (productSearched) {
    priceProduct = ConvertCoin(productSearched.price, 'hasSymbol');
    timeFilm = GetTimeFilm(productSearched.durationFilm);
  }

  return {
    productSearched,
    priceProduct,
    timeFilm,
    isLoading,
  };
}
