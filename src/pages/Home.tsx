import CardProductList from '@/components/others/CardProduct/CardProductList';
import Container from '@/components/others/Container';
import { data } from '@/constants/data';
import LayoutApp from '@/layouts/LayoutApp';

export default function Home() {
  return (
    <LayoutApp>
      <Container>
        <h1 className="text-center text-3xl mb-10">Buy right now!</h1>
        <CardProductList products={data} />
      </Container>
    </LayoutApp>
  );
}
