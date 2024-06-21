import { KeyForQuery } from '@/constants/KeyForQuery';
import { FetchAllProducts } from '@/functions/FetchAllProducts';
import { GetProduct } from '@/functions/GetProduct';
import { GetProductsByCategory } from '@/functions/GetProductsByCategory';
import { GetTimeFilm } from '@/utils/CalculateTimeFilm';
import ConvertCoin from '@/utils/ConvertCoin';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export default function useProductID() {
  const { title } = useParams();
  const titleProduct = title as string;

  const { data: productSearched, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['productID', titleProduct],
    queryFn: () => GetProduct(titleProduct),
    enabled: !!titleProduct,
  });

  let priceProduct = null;
  let timeFilm = null;
  let idProduct = null;
  let categoryProduct = '';

  if (productSearched) {
    priceProduct = ConvertCoin(productSearched.price, 'hasSymbol');
    timeFilm = GetTimeFilm(productSearched.durationFilm);
    idProduct = productSearched.id as string;
    categoryProduct = productSearched.category as string;
  }

  const { data: productsCategory, isLoading: isLoadingProductsCategory } = useQuery({
    queryKey: ['categoryProduct', categoryProduct, productSearched?.id],
    queryFn: () => GetProductsByCategory(categoryProduct),
    enabled: !!categoryProduct,
  });

  const productsCategoryWithoutCurrent = productsCategory?.filter(
    (product) => product.id !== idProduct,
  );

  const { data: allProducts } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: FetchAllProducts,
  });

  const othersProducts = allProducts?.filter(
    (product) => !productsCategoryWithoutCurrent?.find((item) => item.id === product.id),
  );

  const categoryNormalize = GenerateSlug(categoryProduct);

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
