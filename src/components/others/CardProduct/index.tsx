import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICardProductProps } from '@/types/components/CardProduct';
import { Minus, Plus } from 'lucide-react';
import LinkToDetailsProduct from '../LinkToDetails';

export default function CardProduct({ product }: ICardProductProps) {
  const {
    addToCartLoading,
    quantityProductInCart,
    onAddToCart,
    priceFormatted,
    hasProductInCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
  } = useCardProduct(product);

  return (
    <Card className="flex flex-col items-center justify-between">
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <div className="overflow-hidden rounded-md">
          <img
            className="block h-full max-h-48 w-full object-contain"
            src={product.image}
            alt={`Image - ${product.title}`}
          />
        </div>

        {product.new && (
          <div className="mt-2">
            <Badge variant="secondary">{product.new && 'New'}</Badge>
          </div>
        )}

        <h2 className="mb-2 mt-4 text-2xl">{product.title}</h2>
        <p>{priceFormatted}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center gap-4">
        <LinkToDetailsProduct id={product.id} />
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
      </CardFooter>
    </Card>
  );
}
