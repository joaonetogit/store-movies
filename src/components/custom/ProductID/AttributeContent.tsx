import { IChildren } from '@/types/base';

export default function AttributeContent({ children }: IChildren) {
  return <div className="flex items-center gap-2 font-medium">{children}</div>;
}
