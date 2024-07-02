import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function FetchAllProducts(token: string): Promise<IProduct[] | null> {
  const URLToGetProducts = '/products';

  if (!token) {
    console.error('Token is not stored, trying to get a new one');
    return null;
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

    const products: IProduct[] = response.data.products;
    return products;
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return null;
  }
}
