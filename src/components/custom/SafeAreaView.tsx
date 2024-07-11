import { IChildren } from '@/types/base';

export default function SafeAreaView({ children }: IChildren) {
  return <div className="pb-4 pt-header sm:pb-24">{children}</div>;
}
