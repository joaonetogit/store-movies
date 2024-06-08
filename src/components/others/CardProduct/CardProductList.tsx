import { ICardProductListProps } from '@/types/components/CardProductList';
import CardProduct from '.';
import GridShowItems from '../GridShowItems';

export default function CardProductList({ products }: ICardProductListProps) {
  return (
    <GridShowItems>
      {products.map((item, key) => (
        <CardProduct key={key} product={item} />
      ))}
    </GridShowItems>
  );
}
