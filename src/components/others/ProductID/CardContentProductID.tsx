import { ICardContentProductIDProps } from '@/types/components/CardContentProductID';

export default function CardContentProductID({ children }: ICardContentProductIDProps) {
  return <div className="flex w-full max-w-2xl flex-col gap-4">{children}</div>;
}
