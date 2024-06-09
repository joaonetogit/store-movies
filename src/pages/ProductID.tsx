import BreadcrumbProductID from '@/components/others/BreadcrumbProductID';
import CardActionsFooter from '@/components/others/CardActionsFooter';
import Container from '@/components/others/Container';
import Loading from '@/components/others/Loading';
import useProductID from '@/hooks/pages/useProductID';
import LayoutApp from '@/layouts/LayoutApp';
import { Clock9 } from 'lucide-react';

export default function ProductID() {
  const { productSearched, priceProduct, timeFilm, isLoading } = useProductID();

  return (
    <LayoutApp>
      <Container>
        {isLoading && !productSearched && <Loading />}
        {!isLoading && productSearched && (
          <>
            <BreadcrumbProductID titleProduct={productSearched?.title} />

            <h1 className="mb-20 text-2xl">Product details</h1>
            <div className="mb-40 flex justify-between gap-20">
              <div className="w-full max-w-96 overflow-hidden rounded-2xl">
                <img src={productSearched.image} alt={productSearched.title} />
              </div>

              <div className="flex w-full max-w-2xl flex-col gap-4">
                <h2 className="text-4xl">{productSearched.title}</h2>
                <p>{productSearched.description}</p>
                <div>
                  <p className="flex items-center gap-4">
                    <Clock9 />
                    {timeFilm}
                  </p>
                </div>
                <p className="text-2xl">{priceProduct}</p>
                <CardActionsFooter id={productSearched.id} />
              </div>
            </div>
          </>
        )}
      </Container>
    </LayoutApp>
  );
}
