import useImageForCard from '@/hooks/components/useImageForCard';
import { IImageForCardProps } from '@/types/components/ImageForCard';
import Loading from './Loading';

export default function ImageForCard({ image, title, size = 'lg' }: IImageForCardProps) {
  const { loadingImage, handleImageLoad, handleImageError, imageSrc, sizeClasses } =
    useImageForCard(image);

  return (
    <div className="relative flex w-full items-center justify-center">
      {loadingImage && <Loading />}
      <div className="relative overflow-hidden rounded-lg">
        <img
          className={`${sizeClasses[size]} block h-full w-full object-contain transition-opacity duration-300 ${loadingImage ? 'opacity-0' : 'opacity-100'}`}
          src={imageSrc}
          alt={`Image - ${title}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
    </div>
  );
}
