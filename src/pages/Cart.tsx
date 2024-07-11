import CartEmpty from '@/components/custom/CartPage/CartEmpty';
import CartHasItems from '@/components/custom/CartPage/CartHasItems';
import Container from '@/components/custom/Container';
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
