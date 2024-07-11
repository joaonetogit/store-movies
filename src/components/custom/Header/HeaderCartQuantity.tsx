import { IHeaderCartQuantityProps } from '@/types/components/HeaderCartQuantity';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderCartQuantity({ quantity }: IHeaderCartQuantityProps) {
  return (
    <Link className="relative rounded-full border border-border p-3" to="/cart">
      <ShoppingCart width={16} height={16} />
      <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 p-1 text-[10px] text-white">
        {quantity}
      </div>
    </Link>
  );
}
