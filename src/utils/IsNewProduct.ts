import { IProduct } from '@/types/product';

export const IsNewProduct = (product: IProduct) => {
  const currentDate = new Date();
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(currentDate.getDate() - 30);

  return new Date(product.createdAt) > thirtyDaysAgo;
};
