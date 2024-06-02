import { IProductOnCart } from '../product';

export interface ICartStore {
  cartItems: IProductOnCart[];
}
