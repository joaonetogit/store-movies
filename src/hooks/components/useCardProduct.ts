import useCartStore from '@/store/useCartStore';
import { IProduct } from '@/types/product';
import convertCoin from '@/utils/convertCoin';
import sleep from '@/utils/sleep';
import { useState } from 'react';

export default function useCardProduct(product: IProduct) {
  const { addItemToCart, findQtyById, increaseQuantity, decreaseQuantity } = useCartStore();
  const [addToCartLoading, setAddToCartLoading] = useState(false);

  async function onAddToCart() {
    setAddToCartLoading(true);
    await sleep(300);
    addItemToCart(product);
    setAddToCartLoading(false);
  }

  async function onIncreaseQuantity() {
    increaseQuantity(product.id);
  }

  async function onDecreaseQuantity() {
    decreaseQuantity(product.id);
  }

  const priceFormatted = convertCoin(product.price, 'hasSymbol');

  const quantityProductInCart = Number(findQtyById(product.id));

  const hasProductInCart = quantityProductInCart > 0;

  return {
    onAddToCart,
    priceFormatted,
    addToCartLoading,
    hasProductInCart,
    quantityProductInCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
  };
}
