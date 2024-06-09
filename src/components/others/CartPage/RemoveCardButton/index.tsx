import useRemoveButton from '@/hooks/components/useRemoveButton';
import { IRemoveCardButtonProps } from '@/types/components/RemoveCardButton';
import AlertConfirmAction from '../../AlertConfirmAction';

export default function RemoveCardButton({ id }: IRemoveCardButtonProps) {
  const { onRemoveToCart } = useRemoveButton(id);

  return (
    <AlertConfirmAction
      onClick={onRemoveToCart}
      labelButtonAction={'Remove to Cart'}
      description={'The deletion of this item from your shopping cart cannot be undone.'}
    />
  );
}
