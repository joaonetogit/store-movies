import useCartStore from '@/store/useCartStore';
import { IProduct } from '@/types/product';

export function SubTotalThisProduct(product: IProduct) {
  const { findQtyById } = useCartStore();
  const quantityThisProduct = Number(findQtyById(product.id));
  const subTotalThisProduct = product.price * quantityThisProduct;

  return subTotalThisProduct;
}
