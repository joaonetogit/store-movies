import CardProduct from '@/components/others/CardProduct';
import Container from '@/components/others/Container';
import GridShowItems from '@/components/others/GridShowItems';
import Loading from '@/components/others/Loading';
import SortButton from '@/components/others/SortButton';
import SortButtonList from '@/components/others/SortButton/SortButtonList';
import useHome from '@/hooks/pages/useHome';
import LayoutApp from '@/layouts/LayoutApp';
import { sortOptions } from '@/utils/SortProducts';

export default function Home() {
  const { products, isLoading, changeSortOrder, sortOrder, loadingOrder } = useHome();
  const isLoad = loadingOrder || isLoading;

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
        {isLoad && <Loading />}
        {!isLoad && products && (
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
