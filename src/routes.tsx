import { createBrowserRouter } from 'react-router-dom';
import BuySuccess from './pages/BuySuccess.tsx';
import Cart from './pages/Cart.tsx';
import Category from './pages/Category.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import ProductID from './pages/ProductID.tsx';

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
    path: '/product/:title',
    element: <ProductID />,
  },
  {
    path: '/product/category/:category',
    element: <Category />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
