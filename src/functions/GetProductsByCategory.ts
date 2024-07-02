import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function GetProductsByCategory(category: string, token: string): Promise<IProduct[]> {
  const URLToGetProducts = `/products/category/${category}`;

  if (!token) {
    console.error('Token is not stored, trying to get a new one');
  }

  try {
    const response = await api({
      method: 'GET',
      url: URLToGetProducts,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const product: IProduct[] = response.data.products;
    return product;
  } catch (error) {
    console.error(`There was an error when searching for products by category ${category}:`, error);
    return [] as IProduct[];
  }
}
