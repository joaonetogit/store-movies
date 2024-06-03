import { IProduct } from "../product";

export interface ICardProductListProps {
  products: Promise<IProduct[]>;
}
