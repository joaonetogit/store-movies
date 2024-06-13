import { IIdProps } from '../base';
import { IProduct } from '../product';

export interface IOthersProductsByCategoryProps extends IIdProps {
  category: string;
}

export interface IOthersProductsByCategoryListProps {
  productsByCategory: IProduct[];
}

export interface IOthersProductsByCategoryCardProps {
  product: IProduct;
}
