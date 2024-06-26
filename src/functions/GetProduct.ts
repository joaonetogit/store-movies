import api from '@/api/api';
import { IProduct } from '@/types/product';
import { GetStoredToken } from '@/utils/Token';
import GetToken from './GetToken';

export async function GetProduct(slug: string): Promise<IProduct | null> {
  const URLToGetProduct = `/product/${slug}`;
  let token = GetStoredToken();

  try {
    if (!token) {
      token = await GetToken();
    }

    const response = await api({
      method: 'GET',
      url: URLToGetProduct,
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
