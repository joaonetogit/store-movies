import { Button } from '@/components/ui/Button';
import useActionCartPage from '@/hooks/components/useActionCartPage';
import { Link } from 'react-router-dom';

export default function ActionsCartPage() {
  const { handleToCheckout } = useActionCartPage();

  return (
    <div className="mt-10 flex items-center justify-between gap-2">
      <Link to={'/'} className="px-4 py-2 transition-all hover:underline">
        Continue shopping
      </Link>
      <Button onClick={handleToCheckout} className="bg-blue-500 text-white hover:bg-blue-700">
        Finish Checkout
      </Button>
    </div>
  );
}
