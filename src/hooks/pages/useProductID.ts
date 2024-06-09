import { GetProduct } from '@/functions/GetProduct';
import { getTimeFilm } from '@/utils/calculateTimeFilm';
import convertCoin from '@/utils/convertCoin';
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
    priceProduct = convertCoin(productSearched.price, 'hasSymbol');
    timeFilm = getTimeFilm(productSearched.durationFilm);
  }

  return {
    productSearched,
    priceProduct,
    timeFilm,
    isLoading,
  };
}
