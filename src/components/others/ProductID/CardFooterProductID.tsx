import { ICardFooterProductIDProps } from '@/types/components/CardFooterProductID';

export default function CardFooterProductID({ children }: ICardFooterProductIDProps) {
  return <div className="flex w-full max-w-2xl flex-col gap-4">{children}</div>;
}
