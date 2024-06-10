import { IHeaderCartQuantityProps } from '@/types/components/HeaderCartQuantity';

export default function HeaderCartQuantity({ children }: IHeaderCartQuantityProps) {
  return (
    <div className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 p-1 text-[10px] text-white">
      {children}
    </div>
  );
}
