import Container from '@/components/custom/Container';
import LayoutApp from '@/layouts/LayoutApp';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <LayoutApp>
      <Container>
        <div className="flex h-screen flex-col items-center justify-center gap-10">
          <div className="text-center">
            <h1 className="text-6xl">404</h1>
            <p className="text-lg">Page not found</p>
          </div>
          <Link className="text-lg underline" to="/">
            Go to Home
          </Link>
        </div>
      </Container>
    </LayoutApp>
  );
}
