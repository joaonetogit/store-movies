import { IOthersProductsCardProps } from '@/types/components/OthersProducts';
import convertCoin from '@/utils/convertCoin';
import BadgeForNewProduct from '../BadgeForNewProduct';
import CardActionsFooter from '../CardActionsFooter';
import ImageForCard from '../ImageForCard';
import LinkToDetailsProduct from '../LinkToDetails';

export default function OthersProdcutsCard({ product }: IOthersProductsCardProps) {
  const priceFormatted = convertCoin(product.price, 'hasSymbol');
  const isNewProduct = product.createdAt > new Date().toISOString();

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <ImageForCard image={product.image} title={product.title} />

      {isNewProduct && (
        <div className="mt-2">
          <BadgeForNewProduct />
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
