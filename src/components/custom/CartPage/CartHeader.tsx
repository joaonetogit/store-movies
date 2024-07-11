import ClearCartButton from './CleanCartButton';

export default function CartHeader() {
  return (
    <div className="flex items-center justify-between pb-10">
      <h1 className="text-2xl">My Cart</h1>
      <ClearCartButton />
    </div>
  );
}
