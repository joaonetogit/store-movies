import useCartStore from '@/store/useCartStore';
import { IProduct } from '@/types/product';
import convertCoin from '@/utils/convertCoin';

export default function useCartCardProduct(product: IProduct) {
  const { increaseQuantity, removeItemFromCart, decreaseQuantity, findQtyById } = useCartStore();

  async function onIncreaseQuantity() {
    increaseQuantity(product.id);
  }

  async function onDecreaseQuantity() {
    decreaseQuantity(product.id);
  }

  async function onRemoveToCart() {
    removeItemFromCart(product.id);
  }

  const priceFormatted = convertCoin(product.price);

  const quantityThisProduct = Number(findQtyById(product.id));

  return {
    onRemoveToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    priceFormatted,
    quantityThisProduct,
  };
}
