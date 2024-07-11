import useCartStore from '@/store/useCartStore';
import convertCoin from '@/utils/convertCoin';
import { useMemo } from 'react';

export default function useCartTotalPrice() {
  const { calculateTotal } = useCartStore();

  const totalCartWithSymbol = useMemo(() => calculateTotal('formatted'), [calculateTotal]);
  const totalCartNoSymbol = useMemo(() => calculateTotal('number'), [calculateTotal]);
  const valueOfShipping = useMemo(() => convertCoin(10, 'hasSymbol'), []);
  const valueToBeShippingFree = 299.99;
  const valueDisplayShippingFree = `$${valueToBeShippingFree}`;
  const whenShippingIsFree = useMemo(
    () => Number(totalCartNoSymbol) >= valueToBeShippingFree,
    [totalCartNoSymbol, valueToBeShippingFree],
  );

  return { totalCartWithSymbol, whenShippingIsFree, valueDisplayShippingFree, valueOfShipping };
}
