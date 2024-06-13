import { IOthersProductsByCategoryListProps } from '@/types/components/OthersProductsByCategory';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import OthersProdcutsByCategoryCard from './OthersProdcutsByCategoryCard';

export default function OthersProductsByCategoryList({
  productsByCategory,
}: IOthersProductsByCategoryListProps) {
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
        {productsByCategory.map((item) => (
          <OthersProdcutsByCategoryCard key={item.id} product={item} />
        ))}
      </Slider>
    </div>
  );
}
