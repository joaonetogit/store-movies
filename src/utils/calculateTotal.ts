import { IProductOnCart } from '@/types/product';
import convertCoin from '@/utils/convertCoin';

export const calculateTotal = (
  type: 'formatted' | 'number',
  cartItems: IProductOnCart[],
): string | number => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return convertCoin(total, type === 'formatted' ? 'hasSymbol' : 'noSymbol');
};
