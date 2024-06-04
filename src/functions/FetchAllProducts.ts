import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function FecthAllProducts(): Promise<IProduct[]> {
  try {
    const response = await api.get('/products');
    const products: IProduct[] = response.data.products;
    return products;
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return [];
  }
}
