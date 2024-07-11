import { IProduct } from '@/types/product';

export const sortByName = (products: IProduct[]) => {
  return [...products].sort((a, b) => a.title.localeCompare(b.title));
};

export const sortByPrice = (products: IProduct[]) => {
  return [...products].sort((a, b) => a.price - b.price);
};

export const sortByNewest = (products: IProduct[]) => {
  return [...products].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
};
