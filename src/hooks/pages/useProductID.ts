import { GetProduct } from '@/functions/GetProduct';
import useCartStore from '@/store/useCartStore';
import { getTimeFilm } from '@/utils/calculateTimeFilm';
import convertCoin from '@/utils/convertCoin';
import sleep from '@/utils/sleep';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function useProductID(idForSearchProduct: string) {
  const {
    data: productSearched,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['product', idForSearchProduct],
    queryFn: () => GetProduct(idForSearchProduct),
  });

  const { addItemToCart, findQtyById, increaseQuantity, decreaseQuantity } = useCartStore();
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);

  async function onAddToCart() {
    if (!productSearched) return;

    setAddToCartLoading(true);
    await sleep(300);
    addItemToCart(productSearched);
    setAddToCartLoading(false);
  }

  async function onIncreaseQuantity() {
    if (!productSearched) return;

    increaseQuantity(productSearched.id);
  }

  async function onDecreaseQuantity() {
    if (!productSearched) return;

    decreaseQuantity(productSearched.id);
  }

  const priceProduct = productSearched && convertCoin(productSearched?.price, 'hasSymbol');

  const quantityProductInCart = productSearched && Number(findQtyById(productSearched.id));

  const hasProductInCart = quantityProductInCart && quantityProductInCart > 0;

  const timeFilm = productSearched && getTimeFilm(productSearched?.durationFilm);

  return {
    addToCartLoading,
    onAddToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    productSearched,
    error,
    isLoading,
    priceProduct,
    hasProductInCart,
    quantityProductInCart,
    timeFilm,
  };
}
