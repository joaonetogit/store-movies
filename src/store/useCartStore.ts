import { IProduct } from '@/types/product';
import { ICartStore } from '@/types/store/useCartStore';
import { create } from 'zustand';

const useCartStore = create<ICartStore>((set, get) => ({
  cartItems: [],
  addItemToCart: (item: IProduct) => {
    const itemExists = get().cartItems.find((cartItem) => cartItem.id === item.id);

    if (itemExists) {
      itemExists.quantity++;

      set({ cartItems: [...get().cartItems] });
    } else {
      set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
    }
  },
}));

export default useCartStore;
