import Container from '@/components/others/Container';
import { Button } from '@/components/ui/Button';
import useProductID from '@/hooks/pages/useProductID';
import LayoutApp from '@/layouts/LayoutApp';
import { Clock9, Minus, Plus } from 'lucide-react';
import { useParams } from 'react-router-dom';

export default function ProductID() {
  const { id } = useParams();
  const idProduct = id as string;
  const {
    addToCartLoading,
    onAddToCart,
    onIncreaseQuantity,
    onDecreaseQuantity,
    productSearched,
    priceProduct,
    hasProductInCart,
    quantityProductInCart,
    timeFilm,
  } = useProductID(idProduct);

  return (
    <LayoutApp>
      <Container>
        <h1 className="mb-20 text-2xl">Product details</h1>

        {productSearched && (
          <div className="flex justify-between gap-20">
            <div className="w-full max-w-96 overflow-hidden rounded-2xl">
              <img src={productSearched.image} alt={productSearched.title} />
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-4xl">{productSearched.title}</h2>
              <p>{productSearched.description}</p>
              <div>
                <p className="flex items-center gap-4">
                  <Clock9 />
                  {timeFilm}
                </p>
              </div>
              <p className="text-2xl">{priceProduct}</p>
              {hasProductInCart ? (
                <div className="flex items-center gap-4">
                  <Button variant="outline" onClick={onIncreaseQuantity}>
                    <Plus size={16} />
                  </Button>
                  <p>{quantityProductInCart}</p>
                  <Button variant="outline" onClick={onDecreaseQuantity}>
                    <Minus size={16} />
                  </Button>
                </div>
              ) : (
                <Button
                  className="w-fit"
                  variant="default"
                  onClick={onAddToCart}
                  disabled={addToCartLoading}
                >
                  {addToCartLoading ? 'Adding to cart...' : 'Add to Cart'}
                </Button>
              )}
            </div>
          </div>
        )}
      </Container>
    </LayoutApp>
  );
}
