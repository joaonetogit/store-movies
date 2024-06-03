import { FecthAllProducts } from '@/functions/GetAllProducts';

export default function useHome() {
  const films = FecthAllProducts();
  return { films };
}
