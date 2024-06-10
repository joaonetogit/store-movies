import { IProductOnCart } from '@/types/product';
import { CalculateTotalType } from '@/types/utils/CalculateTotal';
import ConvertCoin from './ConvertCoin';

export const CalculateTotalPrice = (
  type: CalculateTotalType,
  cartItems: IProductOnCart[],
): string | number => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return ConvertCoin(total, type === 'formatted' ? 'hasSymbol' : 'noSymbol');
};
