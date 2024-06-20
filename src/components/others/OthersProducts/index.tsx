import useOthersProducts from '@/hooks/components/useOthersProducts';
import { IOthersProductsProps } from '@/types/components/OthersProducts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Divider from '../Divider';
import Loading from '../Loading';
import OthersProdcutsCard from './OthersProdcutsCard';

export default function OthersProducts({ title, products, isLoading }: IOthersProductsProps) {
  const { settingsSlider } = useOthersProducts();
  if (products && products.length === 0) return null;

  return (
    <div className="py-4 sm:pb-20">
      <Divider />

      <p className="my-10 text-center text-2xl">{title}</p>
      {!products && isLoading && <Loading />}
      {products && !isLoading && (
        <div className="w-full px-10">
          <Slider {...settingsSlider}>
            {products &&
              products.map((item) => <OthersProdcutsCard key={item.id} product={item} />)}
          </Slider>
        </div>
      )}
    </div>
  );
}
