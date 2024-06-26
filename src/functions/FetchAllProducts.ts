import api from '@/api/api';
import { IProduct } from '@/types/product';
import { GetStoredToken } from '@/utils/Token';
import GetToken from './GetToken';

export async function FetchAllProducts(): Promise<IProduct[] | null> {
  const URLToGetProducts = '/products';
  let token = GetStoredToken();

  try {
    if (!token) {
      token = await GetToken();
    }
    
    const response = await api({
      method: 'GET',
      url: URLToGetProducts,
    });

    const products: IProduct[] = response.data.products;
    return products;
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return null;
  }
}
