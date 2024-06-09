import { IProductOnCart } from '@/types/product';
import { calculateTotalType } from '@/types/utils/calculateTotal';
import convertCoin from '@/utils/convertCoin';

export const calculateTotal = (
  type: calculateTotalType,
  cartItems: IProductOnCart[],
): string | number => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return convertCoin(total, type === 'formatted' ? 'hasSymbol' : 'noSymbol');
};
