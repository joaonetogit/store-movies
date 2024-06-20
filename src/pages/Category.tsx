import BreadcrumbCustom from '@/components/others/Breadcrumb/BreadcrumbProductID';
import CardProduct from '@/components/others/CardProduct';
import Container from '@/components/others/Container';
import GridShowItems from '@/components/others/GridShowItems';
import Loading from '@/components/others/Loading';
import useCategory from '@/hooks/pages/useCategory';
import LayoutApp from '@/layouts/LayoutApp';

export default function Category() {
  const { categoryToSearchCapitalized, productCategory, isLoading } = useCategory();
  return (
    <LayoutApp>
      <Container>
        <BreadcrumbCustom category={categoryToSearchCapitalized} />
        <h1 className="mb-10 text-4xl font-bold">Category: {categoryToSearchCapitalized}</h1>

        {isLoading && <Loading />}
        {!isLoading && (
          <GridShowItems>
            {productCategory?.map((product) => <CardProduct key={product.id} product={product} />)}
          </GridShowItems>
        )}
      </Container>
    </LayoutApp>
  );
}
