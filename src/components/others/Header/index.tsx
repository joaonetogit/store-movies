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
          <div className="flex items-center gap-4">
            <img className="max-w-40" src="/logo-company.png" alt="Logo Company" />
          </div>
          <div className="flex items-center gap-4">
            <HeaderCart />
          </div>
        </div>
      </Container>
    </header>
  );
}
