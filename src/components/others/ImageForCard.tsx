import useImageForCard from '@/hooks/components/useImageForCard';
import { IImageForCardProps } from '@/types/components/ImageForCard';
import Loading from './Loading';

export default function ImageForCard({ image, title, size = 'lg' }: IImageForCardProps) {
  const { loadingImage, handleImageLoad, handleImageError, imageSrc, sizeClasses } =
    useImageForCard(image);

  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="relative overflow-hidden rounded-lg">
        <img
          className={`${sizeClasses[size]} block object-contain transition-all duration-300 ${loadingImage ? 'opacity-0' : 'opacity-100'}`}
          src={imageSrc}
          alt={`Image - ${title}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading="lazy"
        />
        {loadingImage && (
          <div className="flex h-full items-center justify-center">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
}
