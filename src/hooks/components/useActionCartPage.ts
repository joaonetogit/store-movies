import useCartStore from '@/store/useCartStore';
import { useNavigate } from 'react-router-dom';

export default function useActionCartPage() {
  const navigate = useNavigate();
  const { cleanCart } = useCartStore();

  function handleToCheckout() {
    navigate('/buy');
    cleanCart();
  }
  return { handleToCheckout };
}
