import { IProduct, IProductOnCart } from '../product';

export interface ICartStore {
  cartItems: IProductOnCart[];
  addItemToCart: (product: IProduct) => void;
  removeItemFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  findQtyById: (productId: string) => void;
  calculateTotal: (type: 'formatted' | 'number') => string | number;
  cleanCart: () => void;
}
