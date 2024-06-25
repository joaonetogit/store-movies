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
  const { products, isLoading, changeSortOrder, sortOrder } = useHome();

  return (
    <LayoutApp>
      <Container>
        <h1 className="pb-10 text-center text-2xl">Buy right now!</h1>
        {isLoading && !products && <Loading />}
        {!isLoading && products && (
          <div className="flex flex-col gap-10">
            <div className="flex w-full items-center justify-center gap-2 sm:justify-end">
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
            <GridShowItems>
              {products.map((item, key) => (
                <CardProduct key={key} product={item} />
              ))}
            </GridShowItems>
          </div>
        )}
      </Container>
    </LayoutApp>
  );
}
