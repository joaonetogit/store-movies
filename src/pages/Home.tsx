import CardProductList from '@/components/others/CardProduct/CardProductList';
import Container from '@/components/others/Container';
import HomeCategories from '@/components/others/HomeCategories';
import Loading from '@/components/others/Loading';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';

export default function Home() {
  const { products, isLoading, categories } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="pb-10 text-center text-2xl">Buy right now!</h1>
        {categories && <HomeCategories categories={categories} />}
        {isLoading && !products && <Loading />}
        {!isLoading && products && <CardProductList products={products} />}
      </Container>
    </LayoutApp>
  );
}
