import { IChildren } from '@/types/base';

export default function CardContentProductID({ children }: IChildren) {
  return <div className="flex w-full max-w-2xl flex-col gap-4">{children}</div>;
}
