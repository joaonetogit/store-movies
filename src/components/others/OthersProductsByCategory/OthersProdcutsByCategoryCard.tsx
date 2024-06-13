import { Badge } from '@/components/ui/Badge';
import { IOthersProductsByCategoryCardProps } from '@/types/components/OthersProductsByCategory';
import ConvertCoin from '@/utils/ConvertCoin';
import ImageForCard from '../ImageForCard';

export default function OthersProdcutsByCategoryCard({
  product,
}: IOthersProductsByCategoryCardProps) {
  const priceFormatted = ConvertCoin(product.price, 'hasSymbol');
  return (
    <div className="flex flex-col items-center justify-center">
      <ImageForCard image={product.image} title={product.title} />

      {product.new && (
        <div className="mt-2">
          <Badge variant="secondary">{product.new && 'New'}</Badge>
        </div>
      )}

      <h2 className="mb-2 mt-4 text-center text-2xl">{product.title}</h2>
      <p>{priceFormatted}</p>
    </div>
  );
}
