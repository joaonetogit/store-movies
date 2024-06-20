import { FindProductById } from '@/functions/QueryGetProductByID';
import useCartStore from '@/store/useCartStore';
import { useCallback } from 'react';

export default function useRemoveButton(id: string) {
  const { removeItemFromCart } = useCartStore();

  const onRemoveToCart = useCallback(async () => {
    const product = FindProductById(id);
    if (product) {
      removeItemFromCart(product.id);
    }
  }, [id, removeItemFromCart]);

  return {
    onRemoveToCart,
  };
}
