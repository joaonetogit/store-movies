import { Button } from '@/components/ui/Button';
import useActionCartPage from '@/hooks/components/useActionCartPage';
import { Link } from 'react-router-dom';

export default function ActionsCartPage() {
  const { handleToCheckout } = useActionCartPage();

  return (
    <div className="flex items-center justify-between gap-2 mt-10">
      <Link to={'/'} className="hover:underline py-2 px-4 transition-all">
        Continue shopping
      </Link>
      <Button onClick={handleToCheckout} className="bg-blue-500 hover:bg-blue-700 text-white">
        Finish Checkout
      </Button>
    </div>
  );
}
