import { IHeaderProps } from '@/types/components/Header';
import CategoriesOnHeader from '../CategoriesOnHeader';
import Container from '../Container';
import Logo from '../Logo';
import HeaderCart from './HeaderCart';

export default function Header({ onlyHeaderLogo = false }: IHeaderProps) {
  return (
    <header
      data-testid="header-test"
      className="fixed right-0 top-0 z-50 w-full border-0 border-b border-border bg-white py-6 drop-shadow-lg dark:bg-black"
    >
      <Container>
        <div
          className={`flex items-center gap-4 sm:gap-10 ${onlyHeaderLogo ? 'justify-center' : 'justify-between'}`}
        >
          <div
            className={`order-2 flex flex-1 sm:order-1 sm:flex-none ${onlyHeaderLogo && 'justify-center'}`}
          >
            <Logo />
          </div>

          {!onlyHeaderLogo && (
            <>
              <div className="order-1 sm:order-2 sm:flex-1">
                <CategoriesOnHeader />
              </div>
              <div className="order-2 flex items-center gap-2 sm:order-3 sm:gap-4">
                <HeaderCart />
              </div>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
