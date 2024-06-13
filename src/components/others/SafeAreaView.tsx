import { ISafeAreaViewProps } from '@/types/components/SafeAreaView';

export default function SafeAreaView({ children }: ISafeAreaViewProps) {
  return <div className="pt-header pb-24">{children}</div>;
}
