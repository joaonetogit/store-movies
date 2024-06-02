import { IProductOnCart } from '@/types/product';
import convertCoin from '@/utils/convertCoin';

export const calculateTotal = (cartItems: IProductOnCart[]): string => {
  let total = 0;

  cartItems.forEach((item) => {
    total += item.price * item.quantity;
  });

  return convertCoin(total);
};
