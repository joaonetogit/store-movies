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
      <CardContent className="pt-6 pb-4 flex flex-col items-center justify-center">
        <div className="rounded-md overflow-hidden">
          <img
            className="block w-full h-full max-h-48 object-contain"
            src={product.image}
            alt={`Image - ${product.title}`}
          />
        </div>

        <h2 className="text-2xl mt-4 mb-2">{product.title}</h2>
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
