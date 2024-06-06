import ClearCartButton from '../CleanCartButton';

export default function CartHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="mb-12 text-2xl">My Cart</h1>
      <ClearCartButton />
    </div>
  );
}
