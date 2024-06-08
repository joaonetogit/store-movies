import { IRemoveCardButtonProps } from '@/types/components/RemoveCardButton';
import AlertConfirmAction from '../../AlertConfirmAction';

export default function RemoveCardButton({ onRemoveToCart }: IRemoveCardButtonProps) {
  return (
    <AlertConfirmAction
      onClick={onRemoveToCart}
      labelButtonAction={'Remove to Cart'}
      description={'The deletion of this item from your shopping cart cannot be undone.'}
    />
  );
}
