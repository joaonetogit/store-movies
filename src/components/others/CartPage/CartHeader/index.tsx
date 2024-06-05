import ClearCartButton from '../CleanCartButton';

export default function CartHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl mb-12">My Cart</h1>
      <ClearCartButton />
    </div>
  );
}
