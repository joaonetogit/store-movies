import { IBreadcrumbLinkCustomProps } from '@/types/components/BreadcrumbLinkCustom';
import { Link } from 'react-router-dom';

export default function BreadcrumbLinkCustom({ path, children }: IBreadcrumbLinkCustomProps) {
  return (
    <Link to={path} className="flex items-center gap-2 transition-all hover:underline">
      {children}
    </Link>
  );
}
