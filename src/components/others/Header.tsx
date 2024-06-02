import { Link } from 'react-router-dom';
import Container from './Container';
import { ModeToggle } from './ModeToggle';

export default function Header() {
  return (
    <header data-testid="header-test" className="py-4">
      <Container>
        <div className="flex items-center gap-4 pb-4 border-0 border-b border-border">
          <h1>MovieStore</h1>
          <ModeToggle />
        </div>
        <div className="pt-4">
          <nav>
            <ul className="flex items-center gap-2">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
