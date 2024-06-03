import CardProductList from '@/components/others/CardProduct/CardProductList';
import Container from '@/components/others/Container';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';

export default function Home() {
  const { films } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="text-center text-3xl mb-10">Buy right now!</h1>
        <CardProductList products={films} />
      </Container>
    </LayoutApp>
  );
}
