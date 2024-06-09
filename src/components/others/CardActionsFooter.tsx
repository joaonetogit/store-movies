import useCardActionsFooter from '@/hooks/components/useCardActionsFooter';
import { ICardActionsFooterProps } from '@/types/components/CardActionsFooter';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { CardFooter } from '../ui/Card';

export default function CardActionsFooter({ id, children }: ICardActionsFooterProps) {
  const {
    addToCartLoading,
    hasProductInCart,
    onAddToCart,
    onDecreaseQuantity,
    onIncreaseQuantity,
    quantityProductInCart,
  } = useCardActionsFooter(id);

  return (
    <CardFooter className="flex w-fit flex-col items-center justify-center gap-4 p-0">
      {hasProductInCart ? (
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" onClick={onIncreaseQuantity}>
            <Plus size={16} />
          </Button>
          <p>{quantityProductInCart}</p>
          <Button variant="outline" onClick={onDecreaseQuantity}>
            <Minus size={16} />
          </Button>
        </div>
      ) : (
        <Button variant="default" onClick={onAddToCart} disabled={addToCartLoading}>
          {addToCartLoading ? 'Adding to cart...' : 'Add to Cart'}
        </Button>
      )}
      {children}
    </CardFooter>
  );
}
