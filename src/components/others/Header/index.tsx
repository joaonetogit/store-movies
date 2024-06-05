import { IHeaderProps } from '@/types/components/Header';
import { Link } from 'react-router-dom';
import Container from '../Container';
import HeaderCart from './HeaderCart';

export default function Header({ onlyHeaderLogo = false }: IHeaderProps) {
  return (
    <header
      data-testid="header-test"
      className="w-full fixed top-0 right-0 py-6 border-0 border-b border-border drop-shadow-lg bg-white dark:bg-black"
    >
      <Container>
        <div
          className={`flex items-center ${onlyHeaderLogo ? 'justify-center' : 'justify-between'}`}
        >
          <Link className="flex items-center gap-4" to="/">
            <h1 className="text-4xl font-bold">Movie Store</h1>
          </Link>
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
