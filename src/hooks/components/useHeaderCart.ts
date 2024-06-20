import useCartStore from '@/store/useCartStore';
import useViewport from '../useViewport';

export default function useHeaderCart() {
  const { cartItems, calculateTotal } = useCartStore();
  const valueTotal = calculateTotal('formatted')
  const { width } = useViewport();
  const isTablet = width > 640;
  const quantityCart = cartItems.length;

  return { quantityCart, valueTotal, isTablet };
}
