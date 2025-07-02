import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PolicyPage from './pages/PolicyPage';
import CartPage from './pages/CartPage';
import HelpCenterPage from './pages/HelpCenterPage';
import {
  CustomerLayout,
  AccountDetails,
  Orders,
  Inbox,
  Wishlist,
  Vouchers
} from './pages/customer';

const App = () => {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/policy', element: <PolicyPage /> },
        { path: '/cart', element: <CartPage /> },
        { path: '/help-center', element: <HelpCenterPage /> },
        { path: '/customer', element: <CustomerLayout /> },
        { path: '/account', element: <AccountDetails /> },
        { path: '/orders', element: <Orders /> },
        { path: 'inbox', element: <Inbox /> },
        { path: 'wishlist', element: <Wishlist /> },
        { path: 'vouchers', element: <Vouchers /> }

      ]
    }
  ])

  return (
    <>
    <RouterProvider router={Router}/>
    </>
  );
}

export default App;
