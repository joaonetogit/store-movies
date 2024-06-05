import Container from '@/components/others/Container';
import LayoutApp from '@/layouts/LayoutApp';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <LayoutApp>
      <Container>
        <div className="-mt-[15vh] -mb-[20vh] h-screen flex items-center justify-center flex-col gap-10">
          <div className="text-center">
            <h1 className="text-6xl">404</h1>
            <p className="text-lg">Page not found</p>
          </div>
          <Link className="underline text-lg" to="/">
            Go to Home
          </Link>
        </div>
      </Container>
    </LayoutApp>
  );
}
