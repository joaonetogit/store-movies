import BadgeForNewProduct from '@/components/custom/BadgeForNewProduct';
import BreadcrumbCustom from '@/components/custom/Breadcrumb/BreadcrumbProductID';
import CardActionsFooter from '@/components/custom/CardActionsFooter';
import Container from '@/components/custom/Container';
import Divider from '@/components/custom/Divider';
import ImageForCard from '@/components/custom/ImageForCard';
import Loading from '@/components/custom/Loading';
import OthersProducts from '@/components/custom/OthersProducts';
import AttributeContent from '@/components/custom/ProductID/AttributeContent';
import CardContentProductID from '@/components/custom/ProductID/CardContentProductID';
import CardProductID from '@/components/custom/ProductID/CardProductID';
import useProductID from '@/hooks/pages/useProductID';
import LayoutApp from '@/layouts/LayoutApp';
import { isNewProduct } from '@/utils/isNewProduct';
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
                  <h2 className="text-balance text-2xl font-bold sm:text-4xl">
                    {productSearched.title}{' '}
                    {isNewProduct(productSearched) && <BadgeForNewProduct />}
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
