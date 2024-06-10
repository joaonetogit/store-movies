import { ILinkToDetailsProductProps } from '@/types/components/LinkToDetailsProduct';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function LinkToDetailsProduct({ title }: ILinkToDetailsProductProps) {
  const slug = GenerateSlug(title);

  return (
    <Link to={`/product/${slug}`}>
      <Button variant="outline">View Details</Button>
    </Link>
  );
}
