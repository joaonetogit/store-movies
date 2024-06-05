import ActionsCartPage from '@/components/others/CartPage/ActionsCartPage';
import CartEmpty from '@/components/others/CartPage/CartEmpty';
import CartHeader from '@/components/others/CartPage/CartHeader';
import CartList from '@/components/others/CartPage/CartList';
import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';
import useCartStore from '@/store/useCartStore';

export default function Cart() {
  const { cartItems, calculateTotal } = useCartStore();

  return (
    <LayoutApp>
      <Container>
        {cartItems.length > 0 && (
          <>
            <CartHeader />
            <CartList />
            <div className="flex justify-center mt-10">
              <p className="text-2xl">Total: {calculateTotal()}</p>
            </div>
            <ActionsCartPage />
          </>
        )}

        {cartItems.length === 0 && <CartEmpty />}
      </Container>
    </LayoutApp>
  );
}
