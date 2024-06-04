import ActionCartButton from '../ActionCartButton';

export default function CartEmpty() {
  return (
    <>
      <p>Your cart is empty.</p>
      <div className="mt-4">
        <ActionCartButton label="Back to home" to="/" />
      </div>
    </>
  );
}
