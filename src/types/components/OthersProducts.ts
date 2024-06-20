import { IChildrenProps } from '../base';
import { IProduct } from '../product';

export interface IOthersProductsProps {
  title: string;
  products: IProduct[] | undefined;
  isLoading?: boolean;
}

export interface IOthersProductsListProps extends IChildrenProps {}

export interface IOthersProductsCardProps {
  product: IProduct;
}
