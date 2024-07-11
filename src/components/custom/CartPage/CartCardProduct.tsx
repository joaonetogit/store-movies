import { Card, CardContent } from '@/components/ui/Card';
import useCardProduct from '@/hooks/components/useCardProduct';
import { ICartCardProductProps } from '@/types/components/CartCardProduct';
import { Trash2 } from 'lucide-react';
import CardActionsFooter from '../CardActionsFooter';
import ImageForCard from '../ImageForCard';
import LinkToDetailsProduct from '../LinkToDetails';
import RemoveCardButton from './RemoveCardButton';

export default function CartCardProduct({ product }: ICartCardProductProps) {
  const { priceFormatted, subtotal } = useCardProduct(product.id);

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <ImageForCard image={product.image} title={product.title} />

        <h2 className="mb-2 mt-4 text-lg sm:text-2xl">{product.title}</h2>
        <div className="flex items-center gap-2 text-sm">
          <p>Price:</p>
          <p>{priceFormatted}</p>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <p>Subtotal:</p>
          <p>{subtotal}</p>
        </div>
      </CardContent>
      <CardActionsFooter className="pb-6" id={product.id}>
        <div className="flex gap-4">
          <LinkToDetailsProduct title={product.title} />
          <RemoveCardButton id={product.id}>
            <Trash2 width={14} />
          </RemoveCardButton>
        </div>
      </CardActionsFooter>
    </Card>
  );
}
