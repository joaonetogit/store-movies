import GetAllProducts from '@/functions/GetAllProducts';

export default function useHome() {
  const { films } = GetAllProducts();
  return { films };
}
