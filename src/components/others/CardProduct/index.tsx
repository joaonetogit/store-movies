import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { ICardProductProps } from '@/types/components/CardProduct';
import convertCoin from '@/utils/convertCoin';
import { toast } from 'sonner';

export default function CardProduct({ product }: ICardProductProps) {
  function handleAddToCart() {
    toast(`${product.title} added to cart`);
  }

  const valueProductFormatted = convertCoin(product.price);

  return (
    <Card>
      <CardContent className="pt-6 pb-4 flex flex-col items-center justify-center">
        <img
          className="block w-full h-full max-h-48 object-contain"
          src={product.image}
          alt={`Image - ${product.title}`}
        />

        <h2 className="text-2xl mt-2">{product.title}</h2>
        <div className="flex items-center gap-2">
          <p>Price:</p>
          <p>{valueProductFormatted}</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <Button className="bg-blue-500 hover:bg-blue-700" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
