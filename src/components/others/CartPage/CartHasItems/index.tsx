import useCartStore from '@/store/useCartStore';
import ActionsCartPage from '../ActionsCartPage';
import CartHeader from '../CartHeader';
import CartList from '../CartList';

export default function CartHasItems() {
  const { calculateTotal } = useCartStore();
  return (
    <>
      <CartHeader />
      <CartList />
      <div className="flex justify-center mt-10">
        <p className="text-2xl">Total: {calculateTotal()}</p>
      </div>
      <ActionsCartPage />
    </>
  );
}
