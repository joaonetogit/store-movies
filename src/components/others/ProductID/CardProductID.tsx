import { ICardProductIDProps } from '@/types/components/CardProductID';

export default function CardProductID({ children }: ICardProductIDProps) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-10 sm:mb-20 lg:flex-row lg:gap-20">
      {children}
    </div>
  );
}
