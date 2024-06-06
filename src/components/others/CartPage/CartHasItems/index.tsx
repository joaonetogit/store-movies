import ActionsCartPage from '../ActionsCartPage';
import CartHeader from '../CartHeader';
import CartList from '../CartList';
import CartTotalPrice from '../CartTotalPrice';

export default function CartHasItems() {
  return (
    <>
      <CartHeader />
      <CartList />
      <CartTotalPrice />
      <ActionsCartPage />
    </>
  );
}
