import useCartStore from '@/store/useCartStore';
import AlertConfirmAction from '../../AlertConfirmAction';

export default function ClearCartButton() {
  const { cleanCart } = useCartStore();

  return (
    <AlertConfirmAction
      onClick={cleanCart}
      labelButtonAction={'Clean shopping cart'}
      description={'Shopping cart cleaning cannot be undone.'}
    />
  );
}
