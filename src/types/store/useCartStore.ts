import { IProduct, IProductOnCart } from '../product';

export interface ICartStore {
  cartItems: IProductOnCart[];
  addItemToCart: (item: IProduct) => void;
  removeItemFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  findQtyById: (id: number) => void;
  calculateTotal: (type: 'formatted' | 'number') => string | number;
  cleanCart: () => void;
}
