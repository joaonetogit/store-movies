import useCartTotalPrice from '@/hooks/components/useCartTotalPrice';

export default function CartTotalPrice() {
  const { totalCartWithSymbol, whenShippingIsFree, valueDisplayShippingFree } = useCartTotalPrice();

  return (
    <div className="flex items-center text-center justify-center mt-10 flex-col gap-4">
      <div>
        <p className="text-2xl">Total: {totalCartWithSymbol}</p>
      </div>
      {whenShippingIsFree ? (
        <p>Congratulations, your purchase is free!</p>
      ) : (
        <p>Value for free shipping is {valueDisplayShippingFree}</p>
      )}
    </div>
  );
}
