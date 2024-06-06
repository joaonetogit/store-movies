import { ICardProductListProps } from '@/types/components/CardProductList';
import CardProduct from '.';

export default function CardProductList({ products }: ICardProductListProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-4">
      {products.map((item, key) => (
        <CardProduct key={key} product={item} />
      ))}
    </div>
  );
}
