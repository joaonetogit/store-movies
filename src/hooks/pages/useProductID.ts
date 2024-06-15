import { GetProduct } from '@/functions/GetProduct';
import { GetProductsByCategory } from '@/functions/GetProductsByCategory';
import useCartStore from '@/store/useCartStore';
import { GetTimeFilm } from '@/utils/CalculateTimeFilm';
import ConvertCoin from '@/utils/ConvertCoin';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useProductID() {
  const { title } = useParams();
  const titleProduct = title as string;

  const { itemsStorage } = useCartStore();

  const { data: productSearched, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['product', titleProduct],
    queryFn: () => GetProduct(titleProduct),
    enabled: !!titleProduct,
  });

  const idProduct = productSearched?.id as string;
  const categoryProduct = productSearched?.category as string;

  const { data: productsCategory, isLoading: isLoadingProductsCategory } = useQuery({
    queryKey: ['category', categoryProduct],
    queryFn: () => GetProductsByCategory(categoryProduct),
    enabled: !!categoryProduct,
  });

  let priceProduct;
  let timeFilm;

  if (productSearched) {
    priceProduct = ConvertCoin(productSearched.price, 'hasSymbol');
    timeFilm = GetTimeFilm(productSearched.durationFilm);
  }

  const productsCategoryWithoutCurrent = productsCategory?.filter(
    (product) => product.id !== idProduct,
  );

  const othersProducts = itemsStorage?.filter(
    (product) => !productsCategoryWithoutCurrent?.find((item) => item.id === product.id),
  );

  const categoryNormalize = categoryProduct && GenerateSlug(categoryProduct);

  const URLToCategory = `/product/category/${categoryNormalize}`;

  return {
    categoryNormalize,
    productSearched,
    priceProduct,
    timeFilm,
    isLoadingProduct,
    isLoadingProductsCategory,
    productsCategoryWithoutCurrent,
    othersProducts,
    URLToCategory,
  };
}
