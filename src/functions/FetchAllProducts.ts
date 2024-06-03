import { IProduct } from '@/types/product';
import axios from 'axios';

const URL = import.meta.env.VITE_URL_API;

export async function FecthAllProducts(): Promise<IProduct[]> {
  try {
    const response = await axios.get(URL);
    const products: IProduct[] = response.data.products;
    return products;
  } catch (error) {
    console.error('Ocorreu um erro ao buscar os produtos:', error);
    return [];
  }
}
