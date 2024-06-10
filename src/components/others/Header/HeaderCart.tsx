import useCartStore from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeaderCartQuantity from './HeaderCartQuantity';

export default function HeaderCart() {
  const { cartItems, calculateTotal } = useCartStore();
  const valueTotal = calculateTotal('formatted');

  return (
    <div className="flex w-full items-center gap-4 sm:gap-10">
      <p className="text-sm">Total: {valueTotal}</p>
      <Link className="relative rounded-full border border-border p-3" to="/cart">
        <HeaderCartQuantity>{cartItems.length}</HeaderCartQuantity>
        <ShoppingCart width={16} height={16} />
      </Link>
    </div>
  );
}
