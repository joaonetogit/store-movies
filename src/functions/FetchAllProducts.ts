import api from '@/api/api';
import { IProduct } from '@/types/product';
import qs from 'qs';

export async function FecthAllProducts(): Promise<IProduct[]> {
  const URLToGetProducts = '/products';
  const usernameAuth = import.meta.env.VITE_USERNAME_AUTH;
  const passwordAuth = import.meta.env.VITE_PASSWORD_AUTH;

  const token = btoa(`${usernameAuth}:${passwordAuth}`);

  try {
    const response = await api({
      method: 'GET',
      url: URLToGetProducts,
      headers: {
        Authorization: `Basic ${token}`,
      },
      data: qs.stringify({
        username: usernameAuth,
        password: passwordAuth,
      }),
    });

    const products: IProduct[] = response.data.products;
    return products;
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return [];
  }
}
