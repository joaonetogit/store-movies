import useCartStore from '@/store/useCartStore';
import GridShowItems from '../../GridShowItems';
import CartCardProduct from '../CartCardProduct';

export default function CartList() {
  const { cartItems } = useCartStore();

  return (
    <GridShowItems>
      {cartItems.map((item) => (
        <CartCardProduct key={item.id} product={item} />
      ))}
    </GridShowItems>
  );
}
