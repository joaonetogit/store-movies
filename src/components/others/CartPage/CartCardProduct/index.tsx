import { Card, CardContent } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICartCardProductProps } from '@/types/components/CartCardProduct';
import CardActionsFooter from '../../CardActionsFooter';
import ImageForCard from '../../ImageForCard';
import RemoveCardButton from '../RemoveCardButton';

export default function CartCardProduct({ product }: ICartCardProductProps) {
  const { priceFormatted } = useCardProduct(product.id);

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <ImageForCard image={product.image} title={product.title} />

        <h2 className="mb-2 mt-4 text-2xl">{product.title}</h2>
        <div className="flex items-center gap-2">
          <p>Price:</p>
          <p>{priceFormatted}</p>
        </div>
      </CardContent>
      <CardActionsFooter id={product.id}>
        <RemoveCardButton id={product.id} />
      </CardActionsFooter>
    </Card>
  );
}
