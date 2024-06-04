import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICardProductProps } from '@/types/components/CardProduct';

export default function CardProduct({ product }: ICardProductProps) {
  const { addToCartLoading, onAddToCart, priceFormatted } = useCardProduct(product);

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
        <div className="flex items-center gap-2">
          <p>Price:</p>
          <p>{priceFormatted}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button
          disabled={addToCartLoading}
          className="bg-blue-500 hover:bg-blue-700 dark:text-white"
          onClick={onAddToCart}
        >
          {addToCartLoading ? 'Adding to cart...' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}
