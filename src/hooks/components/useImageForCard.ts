import { ISizeClasses } from '@/types/base';
import sleep from '@/utils/sleep';
import { useCallback, useEffect, useState } from 'react';

const placeholderImage = 'https://placehold.co/500x600';

export default function useImageForCard(image: string) {
  const [loadingImage, setLoadingImage] = useState<boolean>(true);
  const [imageSrc, setImageSrc] = useState<string>(image);
  const [errorHandled, setErrorHandled] = useState<boolean>(false);

  const handleImageLoad = useCallback(async () => {
    await sleep(500);
    setLoadingImage(false);
  }, []);

  const handleImageError = useCallback(async () => {
    if (!errorHandled) {
      setErrorHandled(true);
      await sleep(500);
      setImageSrc(placeholderImage);
      setLoadingImage(false);
    }
  }, [errorHandled]);

  useEffect(() => {
    setImageSrc(image);
    setErrorHandled(false);
  }, [image, setImageSrc]);

  const sizeClasses: ISizeClasses = {
    lg: 'max-w-lg max-h-48 w-cardImageNormal h-cardImageNormal',
    xl: 'max-w-full sm:max-w-2xl max-h-64 sm:max-h-[600px] w-cardImageLarge h-cardImageLarge',
  } as const;

  return { loadingImage, handleImageLoad, handleImageError, imageSrc, sizeClasses };
}
