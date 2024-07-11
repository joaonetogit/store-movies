import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function GetProduct(slug: string): Promise<IProduct | null> {
  const URLToGetProduct = `/product/${slug}`;

  try {
    const response = await api({
      method: 'GET',
      url: URLToGetProduct,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response && response.data) {
      const product: IProduct = response.data;
      return product;
    } else {
      console.error('Response is not valid:', response);
      return null;
    }
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return null;
  }
}
