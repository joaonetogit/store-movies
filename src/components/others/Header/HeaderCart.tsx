import useHeaderCart from '@/hooks/components/useHeaderCart';
import HeaderCartQuantity from './HeaderCartQuantity';

export default function HeaderCart() {
  const { quantityCart, isTablet, valueTotal } = useHeaderCart();
  return (
    <div className="flex w-full items-center gap-4 sm:gap-6">
      <div className="flex w-full flex-col text-sm sm:flex-row">
        {isTablet && <p className="text-sm">Total:</p>}
        <p>{valueTotal}</p>
      </div>

      <HeaderCartQuantity quantity={quantityCart} />
    </div>
  );
}
