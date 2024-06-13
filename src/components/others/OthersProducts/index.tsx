import useOthersProducts from '@/hooks/components/useOthersProducts';
import { IOthersProductsProps } from '@/types/components/OthersProducts';
import Loading from '../Loading';
import OthersProductsList from './OthersProdcutsList';

export default function OthersProductsByCategory({ id, category }: IOthersProductsProps) {
  const { productsWithoutCurrent, isLoading } = useOthersProducts(id, category);

  return (
    <div>
      <p className="my-10 text-center text-2xl">Others products on {category}</p>
      {!productsWithoutCurrent && isLoading && <Loading />}
      {productsWithoutCurrent && !isLoading && (
        <OthersProductsList products={productsWithoutCurrent} />
      )}
    </div>
  );
}
