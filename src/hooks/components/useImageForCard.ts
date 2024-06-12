import Sleep from '@/utils/Sleep';
import { useState } from 'react';

export default function useImageForCard() {
  const [loadingImage, setLoadingImage] = useState(true);

  async function handleImageLoad() {
    await Sleep(500);
    setLoadingImage(false);
  }

  return { loadingImage, handleImageLoad };
}
