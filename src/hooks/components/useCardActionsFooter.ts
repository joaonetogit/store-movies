import useCartStore from '@/store/useCartStore';
import Sleep from '@/utils/Sleep';
import { useState } from 'react';

export default function useCardActionsFooter(id: string) {
  const { addItemToCart, increaseQuantity, decreaseQuantity, findQtyById, findProductById } =
    useCartStore();

  const quantityProductInCart = findQtyById(id);
  const hasProductInCart = quantityProductInCart > 0;
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);

  async function onIncreaseQuantity() {
    increaseQuantity(id);
  }

  async function onDecreaseQuantity() {
    decreaseQuantity(id);
  }

  async function onAddToCart() {
    const product = findProductById(id);
    setAddToCartLoading(true);
    await Sleep(300);
    product && addItemToCart(product);
    setAddToCartLoading(false);
  }

  return {
    hasProductInCart,
    quantityProductInCart,
    addToCartLoading,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onAddToCart,
  };
}
