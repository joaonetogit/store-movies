import CardProductList from '@/components/others/CardProduct/CardProductList';
import Container from '@/components/others/Container';
import Loading from '@/components/others/Loading';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';

export default function Home() {
  const { products, isLoading } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="text-center text-3xl mb-10">Buy right now!</h1>
        {isLoading && <Loading />}
        {products && <CardProductList products={products} />}
      </Container>
    </LayoutApp>
  );
}