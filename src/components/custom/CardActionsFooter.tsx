import useCardActionsFooter from '@/hooks/components/useCardActionsFooter';
import { ICardActionsFooterProps } from '@/types/components/CardActionsFooter';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { CardFooter } from '../ui/Card';
export default function CardActionsFooter({ className, id, children }: ICardActionsFooterProps) {
  const {
    addToCartLoading,
    hasProductInCart,
    onAddToCart,
    onDecreaseQuantity,
    onIncreaseQuantity,
    quantityProductInCart,
  } = useCardActionsFooter(id);

  return (
    <CardFooter className={`flex flex-col items-center justify-center gap-4 pb-2 ${className}`}>
      {hasProductInCart ? (
        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" aria-label="Increase quantity" onClick={onDecreaseQuantity}>
            <Minus size={16} />
          </Button>
          <p>{quantityProductInCart}</p>
          <Button variant="outline" aria-label="Decrease quantity" onClick={onIncreaseQuantity}>
            <Plus size={16} />
          </Button>
        </div>
      ) : (
        <Button
          aria-label="Add product to cart"
          variant="default"
          onClick={onAddToCart}
          disabled={addToCartLoading}
        >
          {addToCartLoading ? 'Adding to cart...' : 'Add to Cart'}
        </Button>
      )}
      {children}
    </CardFooter>
  );
}
