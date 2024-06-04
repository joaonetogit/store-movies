import CartEmpty from '@/components/others/CartPage/CartEmpty';
import CartList from '@/components/others/CartPage/CartList';
import ActionCartButton from '@/components/others/CartPage/CheckoutButton';
import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';
import useCartStore from '@/store/useCartStore';

export default function Cart() {
  const { cartItems } = useCartStore();

  return (
    <LayoutApp>
      <Container>
        <h1>Cart</h1>

        {cartItems.length > 0 && (
          <>
            <CartList />
            <div className="flex items-center gap-2 mt-4">
              <ActionCartButton label="Continue shopping" to="/" />
              <ActionCartButton label="Checkout" to="/buy" />
            </div>
          </>
        )}

        {cartItems.length === 0 && <CartEmpty />}
      </Container>
    </LayoutApp>
  );
}
