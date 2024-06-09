import { ILinkToDetailsProductProps } from '@/types/components/LinkToDetailsProduct';
import { generateSlug } from '@/utils/generateSlug';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function LinkToDetailsProduct({ title }: ILinkToDetailsProductProps) {
  const slug = generateSlug(title);

  return (
    <Link to={`/product/${slug}`}>
      <Button variant="outline">View Details</Button>
    </Link>
  );
}
