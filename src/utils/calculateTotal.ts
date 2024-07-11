import { IProductOnCart } from '@/types/product';
import { CalculateTotalType } from '@/types/utils/calculateTotal';
import convertCoin from './convertCoin';

export const calculateTotalPrice = (
  type: CalculateTotalType,
  cartItems: IProductOnCart[],
): string | number => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return convertCoin(total, type === 'formatted' ? 'hasSymbol' : 'noSymbol');
};
