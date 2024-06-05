import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICardProductProps } from '@/types/components/CardProduct';
import { Minus, Plus } from 'lucide-react';

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
      <CardContent className="pt-6 pb-4 flex flex-col items-center justify-center">
        <div className="rounded-md overflow-hidden">
          <img
            className="block w-full h-full max-h-48 object-contain"
            src={product.image}
            alt={`Image - ${product.title}`}
          />
        </div>

        <h2 className="text-2xl mt-4 mb-2">{product.title}</h2>
        <div className="flex items-center gap-2">
          <p>Price:</p>
          <p>{priceFormatted}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center flex-col gap-4">
        {hasProductInCart ? (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4">
              <Button variant="outline" onClick={onIncreaseQuantity} disabled={addToCartLoading}>
                <Plus size={16} />
              </Button>
              <p>{quantityProductInCart}</p>
              <Button variant="outline" onClick={onDecreaseQuantity} disabled={addToCartLoading}>
                <Minus size={16} />
              </Button>
            </div>
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
