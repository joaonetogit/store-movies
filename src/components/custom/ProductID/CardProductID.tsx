import { IChildren } from '@/types/base';

export default function CardProductID({ children }: IChildren) {
  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-10 sm:mb-20 lg:flex-row lg:gap-20">
      {children}
    </div>
  );
}
