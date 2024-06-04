import { ICartStore } from '../store/useCartStore';

type CartItem = Pick<ICartStore, 'cartItems'>;

export interface ICartListProps extends CartItem {}
