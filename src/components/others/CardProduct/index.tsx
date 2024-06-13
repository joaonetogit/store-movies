import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICardProductProps } from '@/types/components/CardProduct';
import CardActionsFooter from '../CardActionsFooter';
import ImageForCard from '../ImageForCard';
import LinkToDetailsProduct from '../LinkToDetails';

export default function CardProduct({ product }: ICardProductProps) {
  const { priceFormatted } = useCardProduct(product.id);

  return (
    <Card className="flex flex-col items-center justify-between">
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <ImageForCard image={product.image} title={product.title} />

        {product.new && (
          <div className="mt-2">
            <Badge variant="secondary">{product.new && 'New'}</Badge>
          </div>
        )}

        <h2 className="mb-2 mt-4 text-center text-2xl">{product.title}</h2>
        <p>{priceFormatted}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center gap-4">
        <LinkToDetailsProduct title={product.title} />
        <CardActionsFooter id={product.id} />
      </CardFooter>
    </Card>
  );
}
