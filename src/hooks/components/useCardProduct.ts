import useCartStore from '@/store/useCartStore';
import convertCoin from '@/utils/convertCoin';

export default function useCardProduct(id: string) {
  const { findProductById } = useCartStore();
  const product = findProductById(id);
  const priceFormatted = product && convertCoin(product.price, 'hasSymbol');

  return {
    priceFormatted,
  };
}
