import { IOthersProductsListProps } from '@/types/components/OthersProducts';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import OthersProdcutsCard from './OthersProdcutsCard';

export default function OthersProductsList({ products }: IOthersProductsListProps) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full px-10">
      <Slider {...settings}>
        {products.map((item) => (
          <OthersProdcutsCard key={item.id} product={item} />
        ))}
      </Slider>
    </div>
  );
}
