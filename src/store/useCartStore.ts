import { ICartStore } from '@/types/store/useCartStore';
import { CalculateTotalPrice } from '@/utils/CalculateTotal';
import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist<ICartStore>(
    (set, get) => ({
      itemsStorage: [],
      setItemsStorage: (items) => {
        set({ itemsStorage: items });
      },
      cartItems: [],
      addItemToCart: (product) => {
        const cartItems = get().cartItems;
        const itemsStorage = get().itemsStorage;
        const itemExists = cartItems.find((cartItem) => cartItem.id === product.id);
        const itemExistsInStorage = itemsStorage.find((item) => item.id === product.id);

        if (itemExists) {
          itemExists.quantity++;
          set({ cartItems: [...cartItems] });
          toast.success(`${itemExists.title} increased quantity in the cart`);
        } else if (itemExistsInStorage) {
          set({ cartItems: [...cartItems, { ...product, quantity: 1 }] });
          toast.success(`${itemExistsInStorage.title} added to cart`);
        }
      },
      removeItemFromCart: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
          const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
          set({ cartItems: updatedCartItems });
          toast.success(`${itemExists.title} removed from cart`);
        }
      },
      increaseQuantity: (productId) => {
        const cartItems = get().cartItems;
        const itemExists = cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
          itemExists.quantity++;
          set({ cartItems: [...get().cartItems] });
          toast.success(`${itemExists.title} increased quantity in the cart`);
        }
      },
      decreaseQuantity: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);

        if (itemExists) {
          if (itemExists.quantity === 1) {
            const updatedCartItems = get().cartItems.filter((item) => item.id !== productId);
            set({ cartItems: updatedCartItems });
            toast.success(`${itemExists.title} removed from cart`);
          } else {
            itemExists.quantity--;
            set({ cartItems: [...get().cartItems] });
            toast.success(`${itemExists.title} decreased quantity in the cart`);
          }
        }
      },
      findQtyById: (productId) => {
        const itemExists = get().cartItems.find((cartItem) => cartItem.id === productId);
        return itemExists ? itemExists.quantity : 0;
      },
      findProductById: (productId) => {
        return get().itemsStorage.find((item) => item.id === productId) || null;
      },
      calculateTotal: (type) => CalculateTotalPrice(type, get().cartItems),
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
