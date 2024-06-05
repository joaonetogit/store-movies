import { Link } from 'react-router-dom';

export default function CartEmpty() {
  return (
    <div className="-mt-[15vh] -mb-[20vh] h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-10">Your cart is empty.</h1>
      <Link to={'/'} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Back to home
      </Link>
    </div>
  );
}
