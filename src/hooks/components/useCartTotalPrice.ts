import useCartStore from '@/store/useCartStore';
import convertCoin from '@/utils/convertCoin';

export default function useCartTotalPrice() {
  const { calculateTotal } = useCartStore();
  const valueOfShipping = convertCoin(10, 'hasSymbol');
  const valueToBeShippingFree = 299.99;
  const valueDisplayShippingFree = `$${valueToBeShippingFree}`;
  const totalCartWithSymbol = calculateTotal('formatted');
  const totalCartNoSymbol = calculateTotal('number');
  const whenShippingIsFree = Number(totalCartNoSymbol) >= valueToBeShippingFree;

  return { totalCartWithSymbol, whenShippingIsFree, valueDisplayShippingFree, valueOfShipping };
}
