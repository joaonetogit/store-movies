import { IProduct, IProductOnCart } from '../product';
import { calculateTotalType } from '../utils/calculateTotal';

export interface ICartStore {
  itemsStorage: IProduct[];
  setItemsStorage: (items: IProduct[]) => void;
  cartItems: IProductOnCart[];
  addItemToCart: (product: IProduct) => void;
  removeItemFromCart: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  findProductById: (productId: string) => IProduct | null;
  findQtyById: (productId: string) => number;
  calculateTotal: (type: calculateTotalType) => string | number;
  cleanCart: () => void;
}
