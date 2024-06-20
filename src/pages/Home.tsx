import CardProduct from '@/components/others/CardProduct';
import Container from '@/components/others/Container';
import GridShowItems from '@/components/others/GridShowItems';
import Loading from '@/components/others/Loading';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';

export default function Home() {
  const { products, isLoading } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="pb-10 text-center text-2xl">Buy right now!</h1>
        {isLoading && !products && <Loading />}
        {!isLoading && products && (
          <>
            <GridShowItems>
              {products.map((item, key) => (
                <CardProduct key={key} product={item} />
              ))}
            </GridShowItems>
          </>
        )}
      </Container>
    </LayoutApp>
  );
}
