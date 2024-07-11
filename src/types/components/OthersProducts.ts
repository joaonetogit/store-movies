import { IProduct } from '../product';

export interface IOthersProductsProps {
  title: string;
  products: IProduct[] | undefined;
  isLoading?: boolean;
}

export interface IOthersProductsCardProps {
  product: IProduct;
}
