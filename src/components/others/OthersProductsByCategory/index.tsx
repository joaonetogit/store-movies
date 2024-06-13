import useOthersProductsByCategory from '@/hooks/components/useOthersProductsByCategory';
import { IOthersProductsByCategoryProps } from '@/types/components/OthersProductsByCategory';
import Loading from '../Loading';
import OthersProductsByCategoryList from './OthersProdcutsByCategoryList';

export default function OthersProductsByCategory({ id, category }: IOthersProductsByCategoryProps) {
  const { productsWithoutCurrent, isLoading } = useOthersProductsByCategory(id, category);

  return (
    <div>
      <p className="my-10 text-center text-2xl">Others products on {category}</p>
      {!productsWithoutCurrent && isLoading && <Loading />}
      {productsWithoutCurrent && !isLoading && (
        <OthersProductsByCategoryList productsByCategory={productsWithoutCurrent} />
      )}
    </div>
  );
}
