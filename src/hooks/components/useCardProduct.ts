import { FindProductById } from '@/functions/QueryGetProductByID';
import useCartStore from '@/store/useCartStore';
import ConvertCoin from '@/utils/ConvertCoin';
import { IsNewProduct } from '@/utils/IsNewProduct';
import { useMemo } from 'react';

export default function useCardProduct(id: string) {
  const { findQtyById } = useCartStore();
  const product = useMemo(() => FindProductById(id), [id]);
  const priceFormatted = product ? ConvertCoin(product.price, 'hasSymbol') : null;

  let subtotal = null;
  const quantityProduct = Number(findQtyById(id));

  if (product && quantityProduct) {
    subtotal = ConvertCoin(product.price * quantityProduct, 'hasSymbol');
  }

  const isNewProduct = useMemo(() => {
    if (!product) return false;

    return IsNewProduct(product);
  }, [product]);

  return {
    priceFormatted,
    subtotal,
    isNewProduct
  };
}
