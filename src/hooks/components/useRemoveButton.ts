import useCartStore from '@/store/useCartStore';

export default function useRemoveButton(id: string) {
  const { findProductById, removeItemFromCart } = useCartStore();
  const product = findProductById(id);
  async function onRemoveToCart() {
    product && removeItemFromCart(product.id);
  }

  return {
    onRemoveToCart,
  };
}
