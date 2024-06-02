import { ICartStore } from '@/types/store/useCartStore';
import { create } from 'zustand';

const useCartStore = create<ICartStore>(() => ({
  cartItems: [],
}));

export default useCartStore;
