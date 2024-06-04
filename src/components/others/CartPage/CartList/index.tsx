import useCartStore from '@/store/useCartStore';
import CartCardProduct from '../CartCardProduct';

export default function CartList() {
  const { cartItems } = useCartStore();

  return (
    <div className="grid grid-cols-4 gap-4">
      {cartItems.map((item) => (
        <CartCardProduct key={item.id} product={item} />
      ))}
    </div>
  );
}
