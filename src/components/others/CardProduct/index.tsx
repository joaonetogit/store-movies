import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICardProductProps } from '@/types/components/CardProduct';
import BadgeForNewProduct from '../BadgeForNewProduct';
import CardActionsFooter from '../CardActionsFooter';
import ImageForCard from '../ImageForCard';
import LinkToDetailsProduct from '../LinkToDetails';

export default function CardProduct({ product }: ICardProductProps) {
  const { priceFormatted, isNewProduct } = useCardProduct(product.id);

  return (
    <Card className="flex flex-col items-center justify-between">
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <ImageForCard image={product.image} title={product.title} />

        {isNewProduct && (
          <div className="mt-2">
            <BadgeForNewProduct />
          </div>
        )}

        <h2 className="mb-2 mt-4 text-center text-lg font-bold sm:text-xl">{product.title}</h2>
        <p>{priceFormatted}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center gap-4">
        <LinkToDetailsProduct title={product.title} />
        <CardActionsFooter id={product.id} />
      </CardFooter>
    </Card>
  );
}
