import api from '@/api/api';
import { IProduct } from '@/types/product';

export async function GetProduct(id: string): Promise<IProduct> {
  const URLToGetProduct = `/products/${id}`;

  try {
    const response = await api({
      method: 'GET',
      url: URLToGetProduct,
    });

    const product: IProduct = response.data;
    return product;
  } catch (error) {
    console.error('There was an error when searching for products:', error);
    return {} as IProduct;
  }
}
