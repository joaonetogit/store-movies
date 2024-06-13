import { IOthersProductsSameCategoryProps } from '@/types/components/OthersProductsSameCategory';

export default function OthersProductsSameCategory({ category }: IOthersProductsSameCategoryProps) {
  return (
    <div>
      <p>Others products on {category}</p>
    </div>
  );
}
