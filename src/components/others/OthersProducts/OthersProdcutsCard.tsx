import { Badge } from '@/components/ui/Badge';
import { IOthersProductsCardProps } from '@/types/components/OthersProducts';
import ConvertCoin from '@/utils/ConvertCoin';
import CardActionsFooter from '../CardActionsFooter';
import ImageForCard from '../ImageForCard';
import LinkToDetailsProduct from '../LinkToDetails';

export default function OthersProdcutsCard({ product }: IOthersProductsCardProps) {
  const priceFormatted = ConvertCoin(product.price, 'hasSymbol');

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <ImageForCard image={product.image} title={product.title} />

      {product.new && (
        <div className="mt-2">
          <Badge variant="secondary">{product.new && 'New'}</Badge>
        </div>
      )}

      <h2 className="mb-2 mt-4 text-center text-2xl">{product.title}</h2>
      <p className="mb-4">{priceFormatted}</p>
      <div className="flex flex-col items-center justify-center gap-4">
        <LinkToDetailsProduct title={product.title} />
        <CardActionsFooter id={product.id} />
      </div>
    </div>
  );
}
