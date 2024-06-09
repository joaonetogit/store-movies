import { ChevronLeft, Slash } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/Breadcrumb';
import BreadcrumbLinkCustom from './Breadcrumb';

export default function BreadcrumbProductID({ titleProduct }: { titleProduct: string }) {
  const location = useLocation();

  return (
    <Breadcrumb className="mb-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <BreadcrumbLinkCustom path="/">
              <ChevronLeft /> Home
            </BreadcrumbLinkCustom>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Slash width={10} />
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
