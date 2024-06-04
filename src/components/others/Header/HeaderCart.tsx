import useCartStore from '@/store/useCartStore';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderCart() {
  const qtdCart = useCartStore((state) => state.cartItems.length);

  return (
    <Link className="relative rounded-full p-3 border border-border " to="/cart">
      <div className="absolute flex items-center justify-center w-4 h-4 -top-1 -right-1 rounded-full bg-blue-400 text-white p-1 text-[10px]">
        {qtdCart}
      </div>
      <ShoppingCart width={16} height={16} />
    </Link>
  );
}
