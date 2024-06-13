import ClearCartButton from '../CleanCartButton';

export default function CartHeader() {
  return (
    <div className="pt-6 pb-10 flex items-center justify-between">
      <h1 className="text-2xl">My Cart</h1>
      <ClearCartButton />
    </div>
  );
}
