import CartEmpty from '@/components/others/CartPage/CartEmpty';
import CartHasItems from '@/components/others/CartPage/CartHasItems';
import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';
import useCartStore from '@/store/useCartStore';

export default function Cart() {
  const { cartItems } = useCartStore();

  const hasItemsOnCart = cartItems.length > 0;

  return (
    <LayoutApp>
      <Container>
        {hasItemsOnCart && <CartHasItems />}
        {!hasItemsOnCart && <CartEmpty />}
      </Container>
    </LayoutApp>
  );
}
