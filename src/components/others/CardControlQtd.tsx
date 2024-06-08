import { ICardControlQtdProps } from '@/types/components/CardControlQtd';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/Button';

export default function CardControlQtd({
  quantityProductInCart,
  onIncreaseQuantity,
  onDecreaseQuantity,
}: ICardControlQtdProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="outline" onClick={onIncreaseQuantity}>
        <Plus size={16} />
      </Button>
      <p>{quantityProductInCart}</p>
      <Button variant="outline" onClick={onDecreaseQuantity}>
        <Minus size={16} />
      </Button>
    </div>
  );
}
