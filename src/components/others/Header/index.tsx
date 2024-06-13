import { IHeaderProps } from '@/types/components/Header';
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
          className={`flex items-center ${onlyHeaderLogo ? 'justify-center' : 'justify-between'}`}
        >
          <Logo />
          {!onlyHeaderLogo && (
            <div className="flex items-center gap-4">
              <HeaderCart />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
