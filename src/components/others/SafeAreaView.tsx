import { ISafeAreaViewProps } from '@/types/components/SafeAreaView';

export default function SafeAreaView({ children }: ISafeAreaViewProps) {
  return <div className="pb-24 pt-header">{children}</div>;
}
