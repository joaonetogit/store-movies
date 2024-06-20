import useLogo from '@/hooks/components/useLogo';
import { ILogoProps } from '@/types/components/Logo';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'lg' }: ILogoProps) {
  const { prefetchAllProduct, sizeClasses } = useLogo();

  return (
    <Link
      className="flex items-center gap-4"
      to="/"
      onMouseEnter={prefetchAllProduct}
      onFocus={prefetchAllProduct}
    >
      <h1 className={`${sizeClasses[size]} font-bold`}>Movie Store</h1>
    </Link>
  );
}
