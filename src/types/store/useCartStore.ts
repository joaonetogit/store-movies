import { IProduct, IProductOnCart } from '../product';
import { CalculateTotalType } from '../utils/CalculateTotal';

export interface ICartStore {
  cartItems: IProductOnCart[];
  addItemToCart: (product: IProduct) => void;
  removeItemFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  findQtyById: (productId: string) => number;
  calculateTotal: (type: CalculateTotalType) => string | number;
  cleanCart: () => void;
}
