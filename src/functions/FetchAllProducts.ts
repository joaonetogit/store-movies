import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function FetchAllProducts(): Promise<IProduct[]> {
  const URLToGetProducts = '/products';

  try {
    const response = await api({
      method: 'GET',
      url: URLToGetProducts,
    });

    const products: IProduct[] = response.data.products;
    return products;
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return [];
  }
}
