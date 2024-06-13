import { ISizeClasses } from '@/types/base';
import Sleep from '@/utils/Sleep';
import { useEffect, useState } from 'react';

const placeholderImage = 'https://placehold.co/500x600';

export default function useImageForCard(image: string) {
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(image);

  async function handleImageLoad() {
    await Sleep(500);
    setLoadingImage(false);
  }

  async function handleImageError() {
    await Sleep(500);
    setImageSrc(placeholderImage);
    setLoadingImage(false);
  }

  useEffect(() => {
    setImageSrc(image);
  }, [image, setImageSrc]);

  const sizeClasses: ISizeClasses = {
    sm: 'max-w-xs max-h-20',
    lg: 'max-w-lg max-h-48',
    xl: 'max-w-full sm:max-w-2xl max-h-64 sm:max-h-[600px]',
  } as const;

  return { loadingImage, handleImageLoad, handleImageError, imageSrc, sizeClasses };
}
