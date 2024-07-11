import { IProduct } from '@/types/product';

export const getUniqueCategories = (products: IProduct[]) => {
  const categories = products.map((product) => product.category || 'Uncategorized');
  return [...new Set(categories)];
};
