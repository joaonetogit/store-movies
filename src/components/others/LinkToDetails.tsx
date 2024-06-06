import { ILinkToDetailsProductProps } from '@/types/components/LinkToDetailsProduct';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function LinkToDetailsProduct({ id }: ILinkToDetailsProductProps) {
  return (
    <Link to={`/product/${id}`}>
      <Button variant="outline">View Details</Button>
    </Link>
  );
}
