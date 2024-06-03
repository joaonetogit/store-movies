import { ICardProductListProps } from '@/types/components/CardProductList';
import { IProduct } from '@/types/product';
import { useEffect, useState } from 'react';
import CardProduct from '.';

export default function CardProductList({ products }: ICardProductListProps) {
  const [productsList, setProductsList] = useState<IProduct[]>([]);

  useEffect(() => {
    products.then(setProductsList);
  }, [products]);

  return (
    <div className="grid grid-cols-4 gap-6">
      {productsList.map((item, key) => (
        <CardProduct key={key} product={item} />
      ))}
    </div>
  );
}
