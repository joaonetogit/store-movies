import useImageForCard from '@/hooks/components/useImageForCard';
import { IImageForCardProps } from '@/types/components/ImageForCard';
import Loading from './Loading';

export default function ImageForCard({ image, title }: IImageForCardProps) {
  const { loadingImage, handleImageLoad } = useImageForCard();

  return (
    <div className="relative overflow-hidden rounded-md">
      {loadingImage && <Loading />}
      <img
        className={`block h-full max-h-48 w-full object-contain transition-opacity duration-300 ${loadingImage ? 'opacity-0' : 'opacity-100'} `}
        src={image}
        alt={`Image - ${title}`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}
