import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import useCartCardProduct from '@/hooks/components/useCartCardProduct';
import { ICartCardProductProps } from '@/types/components/CartCardProduct';
import CardControlQtd from '../../CardControlQtd';
import ImageForCard from '../../ImageForCard';
import RemoveCardButton from '../RemoveCardButton';

export default function CartCardProduct({ product }: ICartCardProductProps) {
  const {
    onRemoveToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    priceFormatted,
    quantityThisProduct,
  } = useCartCardProduct(product);

  return (
    <Card>
      <CardContent className="flex flex-col items-center justify-center pb-4 pt-6">
        <ImageForCard image={product.image} title={product.title} />

        <h2 className="mb-2 mt-4 text-2xl">{product.title}</h2>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2">
            <p>Price:</p>
            <p>{priceFormatted}</p>
          </div>
          <CardControlQtd
            quantityProductInCart={quantityThisProduct}
            onIncreaseQuantity={onIncreaseQuantity}
            onDecreaseQuantity={onDecreaseQuantity}
          />
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-center gap-4">
        <RemoveCardButton onRemoveToCart={onRemoveToCart} />
      </CardFooter>
    </Card>
  );
}
