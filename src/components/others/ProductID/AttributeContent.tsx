import { IAttributeContentProps } from '@/types/components/AttributeContent';

export default function AttributeContent({ children }: IAttributeContentProps) {
  return <div className="flex items-center gap-2 font-medium">{children}</div>;
}
