import ActionsCartPage from '@/components/others/CartPage/ActionsCartPage';
import CartEmpty from '@/components/others/CartPage/CartEmpty';
import CartList from '@/components/others/CartPage/CartList';
import ClearCartButton from '@/components/others/CartPage/CleanCartButton';
import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';
import useCartStore from '@/store/useCartStore';

export default function Cart() {
  const { cartItems } = useCartStore();

  return (
    <LayoutApp>
      <Container>
        {cartItems.length > 0 && (
          <>
            <div className="flex items-center justify-between">
              <h1 className="text-2xl mb-12">Cart</h1>
              <ClearCartButton />
            </div>
            <CartList />
            <ActionsCartPage />
          </>
        )}

        {cartItems.length === 0 && <CartEmpty />}
      </Container>
    </LayoutApp>
  );
}
