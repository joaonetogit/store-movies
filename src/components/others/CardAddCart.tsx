import { ICardAddCartProps } from '@/types/components/CardAddCart';
import { Button } from '../ui/Button';

export default function CardAddCart({ addToCartLoading, onAddToCart }: ICardAddCartProps) {
  return (
    <Button variant="default" onClick={onAddToCart} disabled={addToCartLoading}>
      {addToCartLoading ? 'Adding to cart...' : 'Add to Cart'}
    </Button>
  );
}
