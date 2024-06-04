import { IProduct } from '@/types/product';
import { ICartStore } from '@/types/store/useCartStore';
import { calculateTotal } from '@/utils/calculateTotal';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist<ICartStore>(
    (set, get) => ({
      cartItems: [],
      addItemToCart: (item: IProduct) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === item.id);

        if (itemExists) {
          itemExists.quantity++;

          set({ cartItems: [...get().cartItems] });
          toast.success(`Increased quantity in the cart`);
        } else {
          set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
          toast.success(`Product added on cart`);
        }
      },
      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
          const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
          set({ cartItems: updatedCartItems });
          toast.success(`Product removed from cart`);
        }
      },
      increaseQuantity: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
          itemExists.quantity++;

          set({ cartItems: [...get().cartItems] });

          toast.success(`Increased quantity in the cart`);
        }
      },
      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
          if (itemExists.quantity === 1) {
            const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
            set({ cartItems: updatedCartItems });
            toast.success(`Product removed from cart`);
          } else {
            itemExists.quantity--;
            set({ cartItems: [...get().cartItems] });
            toast.success(`Decreased quantity in the cart`);
          }
        }
      },
      findQtyById: (id) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === id);

        if (itemExists) {
          return itemExists.quantity;
        }

        return 0;
      },
      calculateTotal: () => calculateTotal(get().cartItems),
      cleanCart: () => {
        set({ cartItems: [] });
      },
    }),
    {
      name: 'cart-store',
    },
  ),
);

export default useCartStore;
