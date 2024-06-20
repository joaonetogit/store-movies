import { IProduct } from '@/types/product';
import { queryClient } from './QueryClient';

export const FindProductById = (productId: string): IProduct | null | undefined => {
  const products = queryClient.getQueryData<IProduct[]>(['products']);
  return products ? products.find((item) => item.id === productId) : null;
};
