import useViewport from '@/hooks/useViewport';
import { IChildren } from '@/types/base';

export default function GridShowItems({ children }: IChildren) {
  const { width } = useViewport();
  const isMobileSmall = width < 480;
  const isMobileLarge = width < 640;

  const gridClasses = isMobileSmall
    ? 'grid-cols-1'
    : isMobileLarge
      ? 'grid-cols-2'
      : 'sm:grid-cols-3 lg:grid-cols-4';

  return <div className={`grid gap-6 ${gridClasses}`}>{children}</div>;
}
