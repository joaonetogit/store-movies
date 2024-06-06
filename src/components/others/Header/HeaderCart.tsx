import useCartStore from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderCart() {
  const { cartItems, calculateTotal } = useCartStore();

  return (
    <div className="w-full flex items-center gap-10">
      <p className="text-sm">Total: {calculateTotal('formatted')}</p>
      <Link className="relative rounded-full p-3 border border-border " to="/cart">
        <div className="absolute flex items-center justify-center w-4 h-4 -top-1 -right-1 rounded-full bg-blue-400 text-white p-1 text-[10px]">
          {cartItems.length}
        </div>
        <ShoppingCart width={16} height={16} />
      </Link>
    </div>
  );
}
