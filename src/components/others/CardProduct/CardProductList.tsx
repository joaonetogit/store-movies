import { ICardProductListProps } from '@/types/components/CardProductList';
import CardProduct from '.';

export default function CardProductList({ products }: ICardProductListProps) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((item, key) => (
        <CardProduct key={key} product={item} />
      ))}
    </div>
  );
}
