import { Link } from 'react-router-dom';

export default function CartEmpty() {
  return (
    <div className="-mb-[20vh] -mt-[15vh] flex h-screen flex-col items-center justify-center">
      <h1 className="mb-10 text-2xl">Your cart is empty.</h1>
      <Link to={'/'} className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700">
        Back to home
      </Link>
    </div>
  );
}
