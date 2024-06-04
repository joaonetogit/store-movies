import useCartStore from '@/store/useCartStore';
import { IProduct } from '@/types/product';
import convertCoin from '@/utils/convertCoin';
import { useState } from 'react';

export default function useCartCardProduct(product: IProduct) {
  const { increaseQuantity, removeItemFromCart, decreaseQuantity, findQtyById } = useCartStore();
  const [onProductActionLoading, setOnProductActionLoading] = useState(false);

  async function onIncreaseQuantity() {
    increaseQuantity(product.id);
  }

  async function onDecreaseQuantity() {
    decreaseQuantity(product.id);
  }

  async function onRemoveToCart() {
    setOnProductActionLoading(true);
    removeItemFromCart(product.id);
    setOnProductActionLoading(false);
  }

  const priceFormatted = convertCoin(product.price);

  const quantityThisProduct = Number(findQtyById(product.id));

  return {
    onRemoveToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    priceFormatted,
    onProductActionLoading,
    quantityThisProduct,
  };
}
