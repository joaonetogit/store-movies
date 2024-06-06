import useCartStore from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderCart() {
  const { cartItems, calculateTotal } = useCartStore();

  return (
    <div className="flex w-full items-center gap-4 sm:gap-10">
      <p className="text-sm">Total: {calculateTotal('formatted')}</p>
      <Link className="relative rounded-full border border-border p-3" to="/cart">
        <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-400 p-1 text-[10px] text-white">
          {cartItems.length}
        </div>
        <ShoppingCart width={16} height={16} />
      </Link>
    </div>
  );
}
