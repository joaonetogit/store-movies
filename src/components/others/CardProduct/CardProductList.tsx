import { IProductList } from '@/types/product';
import CardProduct from '.';

export default function CardProductList({ products }: { products: IProductList['products'] }) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {products.map((item, key) => (
        <CardProduct key={key} product={item} />
      ))}
    </div>
  );
}
