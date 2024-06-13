import { ISizeClasses } from '@/types/base';
import { ILogoProps } from '@/types/components/Logo';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'lg' }: ILogoProps) {
  const sizeClasses: ISizeClasses = {
    sm: 'text-2xl',
    lg: 'text-4xl',
  } as const;

  return (
    <Link className="flex items-center gap-4" to="/">
      <h1 className={`${sizeClasses[size]} font-bold`}>Movie Store</h1>
    </Link>
  );
}
