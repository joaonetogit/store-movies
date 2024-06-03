import useCartStore from '@/store/useCartStore';
import { IProduct } from '@/types/product';
import convertCoin from '@/utils/convertCoin';
import sleep from '@/utils/sleep';
import { useState } from 'react';
import { toast } from 'sonner';

export default function useCardProduct(product: IProduct) {
  const { addItemToCart } = useCartStore();
  const [addToCartLoading, setAddToCartLoading] = useState(false);

  async function onAddToCart() {
    setAddToCartLoading(true);
    await sleep();
    addItemToCart(product);
    toast.success(`${product.title} added to cart`);
    setAddToCartLoading(false);
  }

  const priceFormatted = convertCoin(product.price);

  return { onAddToCart, priceFormatted, addToCartLoading };
}
