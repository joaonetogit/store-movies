import useLinkToDetailsProduct from '@/hooks/components/useLinkToDetailsProduct';
import { ILinkToDetailsProductProps } from '@/types/components/LinkToDetailsProduct';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function LinkToDetailsProduct({ title }: ILinkToDetailsProductProps) {
  const { slug, prefetchProduct } = useLinkToDetailsProduct(title);

  return (
    <Link to={`/product/${slug}`} onMouseEnter={prefetchProduct} onFocus={prefetchProduct}>
      <Button variant="outline">View Details</Button>
    </Link>
  );
}
