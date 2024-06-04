import { createBrowserRouter } from 'react-router-dom';
import BuySuccess from './pages/BuySuccess.tsx';
import Cart from './pages/Cart.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/buy',
    element: <BuySuccess />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
