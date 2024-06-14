import CardProductList from '@/components/others/CardProduct/CardProductList';
import Container from '@/components/others/Container';
import Loading from '@/components/others/Loading';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';
import { GenerateSlug } from '@/utils/GenerateSlug';
import { Link } from 'react-router-dom';

export default function Home() {
  const { products, isLoading, categories } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="pb-10 text-center text-2xl">Buy right now!</h1>
        {categories && (
          <div className="mb-10 flex items-center justify-center space-x-2">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/product/category/${GenerateSlug(category)}`}
                className="rounded-md border border-border px-2 py-1 text-sm text-foreground transition-all hover:bg-border hover:text-opacity-5"
              >
                {category}
              </Link>
            ))}
          </div>
        )}
        {isLoading && <Loading />}
        {products && <CardProductList products={products} />}
      </Container>
    </LayoutApp>
  );
}
