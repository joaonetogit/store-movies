import { IProduct, IProductOnCart } from '../product';

export interface ICartStore {
  cartItems: IProductOnCart[];
  addItemToCart: (item: IProduct) => void;
}
