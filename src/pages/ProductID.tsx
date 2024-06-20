import BreadcrumbCustom from '@/components/others/Breadcrumb/BreadcrumbProductID';
import CardActionsFooter from '@/components/others/CardActionsFooter';
import Container from '@/components/others/Container';
import ImageForCard from '@/components/others/ImageForCard';
import Loading from '@/components/others/Loading';
import OthersProducts from '@/components/others/OthersProducts';
import CardFooterProductID from '@/components/others/ProductID/CardFooterProductID';
import CardProductID from '@/components/others/ProductID/CardProductID';
import useProductID from '@/hooks/pages/useProductID';
import LayoutApp from '@/layouts/LayoutApp';
import { Clock9 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductID() {
  const {
    productSearched,
    priceProduct,
    timeFilm,
    isLoadingProduct,
    isLoadingProductsCategory,
    productsCategoryWithoutCurrent,
    othersProducts,
    URLToCategory,
  } = useProductID();

  return (
    <LayoutApp>
      <Container>
        {isLoadingProduct && !productSearched && <Loading />}
        {!isLoadingProduct && productSearched && (
          <>
            <BreadcrumbCustom
              category={productSearched.category}
              titleProduct={productSearched.title}
            />

            <CardProductID>
              <ImageForCard image={productSearched.image} title={productSearched.title} size="xl" />

              <CardFooterProductID>
                <h2 className="text-2xl font-bold sm:text-4xl">{productSearched.title}</h2>
                <p>{productSearched.description}</p>
                <div className="mb-2 flex flex-wrap items-center gap-4 sm:mb-8">
                  <Link
                    to={URLToCategory}
                    className="rounded-full border border-border px-4 py-1 font-medium"
                  >
                    {productSearched.category}
                  </Link>
                  <p className="flex items-center gap-2 font-medium">
                    <Clock9 />
                    {timeFilm}
                  </p>
                </div>
                <p className="text-2xl font-bold">{priceProduct}</p>
                <CardActionsFooter className="w-fit p-0" id={productSearched.id} />
              </CardFooterProductID>
            </CardProductID>

            <OthersProducts
              title={`Others products on ${productSearched.category}`}
              products={productsCategoryWithoutCurrent}
              isLoading={isLoadingProductsCategory}
            />

            <OthersProducts title="Others products on storage" products={othersProducts} />
          </>
        )}
      </Container>
    </LayoutApp>
  );
}
