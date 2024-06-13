import { IIdProps } from '../base';
import { IProduct } from '../product';

export interface IOthersProductsProps extends IIdProps {
  category: string;
}

export interface IOthersProductsListProps {
  products: IProduct[];
}

export interface IOthersProductsCardProps {
  product: IProduct;
}
