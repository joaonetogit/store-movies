import BadgeForNewProduct from '@/components/others/BadgeForNewProduct';
import BreadcrumbCustom from '@/components/others/Breadcrumb/BreadcrumbProductID';
import CardActionsFooter from '@/components/others/CardActionsFooter';
import Container from '@/components/others/Container';
import Divider from '@/components/others/Divider';
import ImageForCard from '@/components/others/ImageForCard';
import Loading from '@/components/others/Loading';
import OthersProducts from '@/components/others/OthersProducts';
import AttributeContent from '@/components/others/ProductID/AttributeContent';
import CardContentProductID from '@/components/others/ProductID/CardContentProductID';
import CardProductID from '@/components/others/ProductID/CardProductID';
import useProductID from '@/hooks/pages/useProductID';
import LayoutApp from '@/layouts/LayoutApp';
import { Link } from 'react-router-dom';

export default function ProductID() {
  const {
    productSearched,
    priceProduct,
    isLoadingProduct,
    isLoadingProductsCategory,
    productsCategoryWithoutCurrent,
    othersProducts,
    URLToCategory,
    attributesToRender,
    isNewProduct,
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
              <CardContentProductID>
                <Link
                  to={URLToCategory}
                  className="w-fit rounded-full border border-border px-4 py-1 font-medium"
                >
                  {productSearched.category}
                </Link>
                <div className="inline-flex items-center">
                  <h2 className="text-2xl font-bold sm:text-4xl text-balance">
                    {productSearched.title} {isNewProduct && <BadgeForNewProduct />}
                  </h2>
                </div>
                <p>{productSearched.description}</p>

                <Divider />
                <div className="mb-2 flex flex-col gap-4 sm:mb-8">
                  {attributesToRender.map((attribute, index) => (
                    <AttributeContent key={index}>
                      <attribute.icon />
                      {attribute.text}
                    </AttributeContent>
                  ))}
                </div>
                <p className="text-2xl font-bold">{priceProduct}</p>
                <CardActionsFooter className="w-fit p-0" id={productSearched.id} />
              </CardContentProductID>
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
