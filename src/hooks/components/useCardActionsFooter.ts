import { FindProductById } from '@/functions/QueryGetProductByID';
import useCartStore from '@/store/useCartStore';
import Sleep from '@/utils/Sleep';
import { useMemo, useState } from 'react';

export default function useCardActionsFooter(id: string) {
  const { addItemToCart, increaseQuantity, decreaseQuantity, findQtyById } = useCartStore();

  const quantityProductInCart = findQtyById(id);
  const hasProductInCart = quantityProductInCart > 0;
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);
  const product = useMemo(() => FindProductById(id), [id]);

  async function onIncreaseQuantity() {
    increaseQuantity(id);
  }

  async function onDecreaseQuantity() {
    decreaseQuantity(id);
  }

  async function onAddToCart() {
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
