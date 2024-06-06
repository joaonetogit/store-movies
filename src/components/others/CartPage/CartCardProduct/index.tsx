import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCartCardProduct from '@/hooks/components/useCartCardProduct';
import { ICartCardProductProps } from '@/types/components/CartCardProduct';
import { Minus, Plus } from 'lucide-react';
import RemoveCardButton from '../RemoveCardButton';

export default function CartCardProduct({ product }: ICartCardProductProps) {
  const {
    onRemoveToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    priceFormatted,
    quantityThisProduct,
  } = useCartCardProduct(product);

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <div className="overflow-hidden rounded-md">
          <img
            className="block h-full max-h-48 w-full object-contain"
            src={product.image}
            alt={`Image - ${product.title}`}
          />
        </div>

        <h2 className="mb-2 mt-4 text-2xl">{product.title}</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <p>Price:</p>
            <p>{priceFormatted}</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Quantity:</p>
            <p>{quantityThisProduct}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={'outline'} onClick={onIncreaseQuantity}>
              <Plus size={16} />
            </Button>
            <Button variant={'outline'} onClick={onDecreaseQuantity}>
              <Minus size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-4">
        <RemoveCardButton onRemoveToCart={onRemoveToCart} />
      </CardFooter>
    </Card>
  );
}
