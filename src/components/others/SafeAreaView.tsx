import { ISafeAreaViewProps } from '@/types/components/SafeAreaView';

export default function SafeAreaView({ children }: ISafeAreaViewProps) {
  return <div className="pb-4 pt-header sm:pb-24">{children}</div>;
}
