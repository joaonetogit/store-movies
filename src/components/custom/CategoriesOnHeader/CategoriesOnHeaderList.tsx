import { IChildren } from '@/types/base';

export default function CategoriesOnHeaderList({ children }: IChildren) {
  return <div className="flex flex-wrap items-center justify-center gap-2">{children}</div>;
}
