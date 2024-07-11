import { KeyForQuery } from '@/constants/KeyForQuery';
import { IProduct } from '@/types/product';
import { queryClient } from './queryClient';

export const FindProductById = (productId: string): IProduct | null | undefined => {
  const products = queryClient.getQueryData<IProduct[]>([KeyForQuery.AllProducts]);
  return products ? products.find((item) => item.id === productId) : null;
};
