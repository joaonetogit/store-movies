import BreadcrumbProductID from '@/components/others/BreadcrumbProductID';
import CardActionsFooter from '@/components/others/CardActionsFooter';
import Container from '@/components/others/Container';
import Divider from '@/components/others/Divider';
import ImageForCard from '@/components/others/ImageForCard';
import Loading from '@/components/others/Loading';
import OthersProductsSameCategory from '@/components/others/OthersProductsSameCategory';
import useProductID from '@/hooks/pages/useProductID';
import LayoutApp from '@/layouts/LayoutApp';
import { Clock9 } from 'lucide-react';

export default function ProductID() {
  const { productSearched, priceProduct, timeFilm, isLoading } = useProductID();

  return (
    <LayoutApp>
      <Container>
        <div className="pt-20">
          {isLoading && !productSearched && <Loading />}
          {!isLoading && productSearched && (
            <>
              <BreadcrumbProductID titleProduct={productSearched?.title} />

              <div className="mb-20 flex justify-between gap-20">
                <ImageForCard
                  image={productSearched.image}
                  title={productSearched.title}
                  size="xl"
                />

                <div className="flex w-full max-w-2xl flex-col gap-4">
                  <h2 className="text-4xl">{productSearched.title}</h2>
                  <p>{productSearched.description}</p>
                  <div className="mb-8 flex flex-wrap items-center gap-4">
                    <p className="rounded-full border border-border px-4 py-2">
                      {productSearched.category}
                    </p>
                    <p className="flex items-center gap-2">
                      <Clock9 />
                      {timeFilm}
                    </p>
                  </div>
                  <p className="text-2xl">{priceProduct}</p>
                  <CardActionsFooter className="w-fit p-0" id={productSearched.id} />
                </div>
              </div>
              <Divider />
              <OthersProductsSameCategory category={productSearched.category} />
            </>
          )}
        </div>
      </Container>
    </LayoutApp>
  );
}
