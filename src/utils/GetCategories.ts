import { IProduct } from '@/types/product';

export const GetUniqueCategories = (products: IProduct[]) => {
  const categories = products.map((product) => product.category || 'Uncategorized');
  return [...new Set(categories)];
};
