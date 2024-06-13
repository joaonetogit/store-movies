import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function GetProductsByCategory(category: string): Promise<IProduct[] | null> {
  const URLToGetProducts = `/products/category/${category}`;

  try {
    const response = await api({
      method: 'GET',
      url: URLToGetProducts,
    });

    const product: IProduct[] = response.data;
    return product;
  } catch (error) {
    console.error(`There was an error when searching for products by category ${category}:`, error);
    return null;
  }
}
