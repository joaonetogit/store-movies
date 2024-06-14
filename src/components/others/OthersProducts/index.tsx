import { IOthersProductsProps } from '@/types/components/OthersProducts';
import Divider from '../Divider';
import Loading from '../Loading';
import OthersProductsList from './OthersProdcutsList';

export default function OthersProducts({ title, products, isLoading }: IOthersProductsProps) {
  if (products && products.length === 0) return null;

  return (
    <div>
      <Divider />

      <p className="my-10 text-center text-2xl">{title}</p>
      {!products && isLoading && <Loading />}
      {products && !isLoading && <OthersProductsList products={products} />}
    </div>
  );
}
