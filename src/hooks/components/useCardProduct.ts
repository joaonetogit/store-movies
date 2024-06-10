import useCartStore from '@/store/useCartStore';
import ConvertCoin from '@/utils/ConvertCoin';

export default function useCardProduct(id: string) {
  const { findProductById } = useCartStore();
  const product = findProductById(id);
  const priceFormatted = product && ConvertCoin(product.price, 'hasSymbol');

  return {
    priceFormatted,
  };
}
