import api from '@/api/api';
import { IProduct } from '@/types/product';
import { GetStoredToken } from '@/utils/Token';
import GetToken from './GetToken';

export async function GetProductsByCategory(category: string): Promise<IProduct[]> {
  const URLToGetProducts = `/products/category/${category}`;
  let token = GetStoredToken();

  try {
    if (!token) {
      token = await GetToken();
    }

    const response = await api({
      method: 'GET',
      url: URLToGetProducts,
    });

    const product: IProduct[] = response.data.products;
    return product;
  } catch (error) {
    console.error(`There was an error when searching for products by category ${category}:`, error);
    return [] as IProduct[];
  }
}
