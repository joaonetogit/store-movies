import { FindProductById } from '@/functions/queryGetProductByID';
import useCartStore from '@/store/useCartStore';
import convertCoin from '@/utils/convertCoin';
import { useMemo } from 'react';

export default function useCardProduct(id: string) {
  const { findQtyById } = useCartStore();
  const product = useMemo(() => FindProductById(id), [id]);
  const priceFormatted = product ? convertCoin(product.price, 'hasSymbol') : null;

  let subtotal = null;
  const quantityProduct = Number(findQtyById(id));

  if (product && quantityProduct) {
    subtotal = convertCoin(product.price * quantityProduct, 'hasSymbol');
  }

  return {
    priceFormatted,
    subtotal,
  };
}
