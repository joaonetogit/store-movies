import { Link } from 'react-router-dom';

export default function BreadcrumbLinkCustom({
  path,
  children,
}: {
  path: string;
  children?: React.ReactNode;
}) {
  return (
    <Link to={path} className="flex items-center gap-2 py-2 transition-all hover:underline">
      {children}
    </Link>
  );
}
