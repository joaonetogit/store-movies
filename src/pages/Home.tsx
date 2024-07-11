import CardProduct from '@/components/custom/CardProduct';
import Container from '@/components/custom/Container';
import GridShowItems from '@/components/custom/GridShowItems';
import Loading from '@/components/custom/Loading';
import SortButton from '@/components/custom/SortButton';
import SortButtonList from '@/components/custom/SortButton/SortButtonList';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';

export default function Home() {
  const { products, isLoading, changeSortOrder, sortOrder, sortOptions } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="pb-4 text-center text-2xl">Buy right now!</h1>
        <div className="mb-10 flex w-full items-center justify-center gap-2">
          <p>Filter by:</p>
          <SortButtonList>
            {sortOptions.map((option) => (
              <SortButton
                key={option}
                label={option}
                order={option}
                orderNow={sortOrder}
                onChangeSortOrder={changeSortOrder}
                aria-label={`Sort by ${option}`}
              />
            ))}
          </SortButtonList>
        </div>
        {isLoading && <Loading />}
        {!isLoading && products && (
          <GridShowItems>
            {products.map((item, key) => (
              <CardProduct key={key} product={item} />
            ))}
          </GridShowItems>
        )}
      </Container>
    </LayoutApp>
  );
}
