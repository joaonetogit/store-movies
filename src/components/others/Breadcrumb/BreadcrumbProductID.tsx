import { Slash } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import BreadcrumbLinkCustom from '.';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../../ui/Breadcrumb';

export default function BreadcrumbProductID({ titleProduct }: { titleProduct: string }) {
  const location = useLocation();

  return (
    <Breadcrumb className="mb-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <BreadcrumbLinkCustom path="/">Home</BreadcrumbLinkCustom>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash width={8} />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <BreadcrumbLinkCustom path={location.pathname}>{titleProduct}</BreadcrumbLinkCustom>
          </BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
