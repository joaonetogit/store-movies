import useCartStore from '@/store/useCartStore';
import ConvertCoin from '@/utils/ConvertCoin';

export default function useCardProduct(id: string) {
  const { findProductById, findQtyById } = useCartStore();
  const product = findProductById(id);
  const priceFormatted = product && ConvertCoin(product.price, 'hasSymbol');
  const quantityProduct = product && Number(findQtyById(id));

  let subtotal = null;
  if (product && quantityProduct) {
    subtotal = ConvertCoin(product.price * quantityProduct, 'hasSymbol');
  }

  return {
    priceFormatted,
    subtotal,
  };
}
