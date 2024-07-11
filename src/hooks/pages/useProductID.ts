import { KeyForQuery } from '@/constants/KeyForQuery';
import { FetchAllProducts } from '@/functions/fetchAllProducts';
import { GetProduct } from '@/functions/getProduct';
import { GetProductsByCategory } from '@/functions/getProductsByCategory';
import { IProduct } from '@/types/product';
import { getTimeFilm } from '@/utils/calculateTimeFilm';
import convertCoin from '@/utils/convertCoin';
import { generateSlug } from '@/utils/generateSlug';
import { useQuery } from '@tanstack/react-query';
import { Clock9, LucideProps, VenetianMask } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';
import { useParams } from 'react-router-dom';

interface IAtributesToRender {
  icon: ForwardRefExoticComponent<Omit<LucideProps, 'ref'> & RefAttributes<SVGSVGElement>>;
  text: string | null;
}

export default function useProductID() {
  const { title } = useParams();
  const titleProduct = title as string;

  const { data: allProducts } = useQuery({
    queryKey: [KeyForQuery.AllProducts],
    queryFn: FetchAllProducts,
  });

  const { data: productSearched, isLoading: isLoadingProduct } = useQuery({
    queryKey: ['productID', titleProduct],
    queryFn: () => GetProduct(titleProduct),
    enabled: !!titleProduct,
  });

  const priceProduct = productSearched ? convertCoin(productSearched.price, 'hasSymbol') : null;
  const timeFilm = productSearched ? getTimeFilm(productSearched.durationFilm) : null;
  const idProduct = productSearched ? (productSearched.id as string) : '';
  const directorProduct = productSearched ? (productSearched.director as string) : '';
  const categoryProduct = productSearched ? (productSearched.category as string) : '';

  const { data: productsCategory, isLoading: isLoadingProductsCategory } = useQuery({
    queryKey: ['categoryProduct', categoryProduct, productSearched?.id],
    queryFn: () => GetProductsByCategory(categoryProduct),
    enabled: !!categoryProduct,
  });

  function filterProductsByCategoryExcludingCurrent(
    products: IProduct[] = [],
    currentProductId: string = '',
    desiredCategory: string = '',
  ): IProduct[] {
    return products.filter(
      (product) => product.category === desiredCategory && product.id !== currentProductId,
    );
  }

  const productsCategoryWithoutCurrent = filterProductsByCategoryExcludingCurrent(
    productsCategory ?? [],
    productSearched?.id ?? '',
    categoryProduct ?? '',
  );

  function othersProductsFilter(
    allProducts: IProduct[] = [],
    categoryToExclude: string = '',
    currentProductId: string = '',
  ): IProduct[] {
    return allProducts.filter(
      (product) => product.id !== currentProductId && product.category !== categoryToExclude,
    );
  }

  const othersProducts = othersProductsFilter(allProducts ?? [], categoryProduct, idProduct ?? '');

  const categoryNormalize = generateSlug(categoryProduct);

  const URLToCategory = `/product/category/${categoryNormalize}`;

  const attributesToRender: IAtributesToRender[] = [
    { icon: Clock9, text: timeFilm },
    { icon: VenetianMask, text: `${directorProduct} as director` },
  ];

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
    attributesToRender,
  };
}
