import { Link } from 'react-router-dom';
import Container from '../Container';
import HeaderCart from './HeaderCart';

export default function Header() {
  return (
    <header
      data-testid="header-test"
      className="py-6 border-0 border-b border-border drop-shadow-lg mb-8"
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link className="flex items-center gap-4" to="/">
            <img className="max-w-40" src="/logo-company.png" alt="Logo Company" />
          </Link>
          <div className="flex items-center gap-4">
            <HeaderCart />
          </div>
        </div>
      </Container>
    </header>
  );
}
