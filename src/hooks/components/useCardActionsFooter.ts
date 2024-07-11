import { FindProductById } from '@/functions/queryGetProductByID';
import useCartStore from '@/store/useCartStore';
import sleep from '@/utils/sleep';
import { useCallback, useMemo, useState } from 'react';

export default function useCardActionsFooter(id: string) {
  const { addItemToCart, increaseQuantity, decreaseQuantity, findQtyById } = useCartStore();

  const quantityProductInCart = findQtyById(id);
  const hasProductInCart = quantityProductInCart > 0;
  const [addToCartLoading, setAddToCartLoading] = useState<boolean>(false);
  const product = useMemo(() => FindProductById(id), [id]);

  const onIncreaseQuantity = useCallback(() => {
    increaseQuantity(id);
  }, [id, increaseQuantity]);

  const onDecreaseQuantity = useCallback(() => {
    decreaseQuantity(id);
  }, [id, decreaseQuantity]);

  const onAddToCart = useCallback(async () => {
    setAddToCartLoading(true);
    await sleep(300);
    if (product) {
      addItemToCart(product);
    }
    setAddToCartLoading(false);
  }, [product, addItemToCart]);

  return {
    hasProductInCart,
    quantityProductInCart,
    addToCartLoading,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onAddToCart,
  };
}
