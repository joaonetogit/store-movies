import { IBreadcrumbCustomProps } from '@/types/components/BreadcrumbCustom';
import { GenerateSlug } from '@/utils/GenerateSlug';
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

export default function BreadcrumbCustom({ titleProduct, category }: IBreadcrumbCustomProps) {
  const location = useLocation();
  const categoryNormalize = GenerateSlug(category);
  const URLCategory = `/product/category/${categoryNormalize}`;

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
            <BreadcrumbLinkCustom path={URLCategory}>{category}</BreadcrumbLinkCustom>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {titleProduct && (
          <>
            <BreadcrumbSeparator>
              <Slash width={8} />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <BreadcrumbLinkCustom path={location.pathname}>{titleProduct}</BreadcrumbLinkCustom>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
