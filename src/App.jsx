import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PolicyPage from "./pages/PolicyPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HelpCenterPage from "./pages/HelpCenterPage";
import ProductPage from "./pages/ProductPage";
import ContactPage from "./pages/ContactPage";
import {
  CustomerLayout,
  AccountDetails,
  Orders,
  Inbox,
  Wishlist,
  Vouchers,
} from "./pages/customer";
import Shop from "./pages/Shop";
import FullPolicyPage from "./pages/FullPolicyPage";

const App = () => {
  const Router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: '/shop', element: <Shop /> },
        { path: '/product/:id', element: <ProductPage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/policy", element: <PolicyPage /> },
        { path: "/privacy-policy", element: <FullPolicyPage /> },
        { path: "/cart", element: <CartPage /> },
        { path: "/checkout", element: <CheckoutPage /> },
        { path: "/help-center", element: <HelpCenterPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/customer", element: <CustomerLayout /> },
        { path: "/account", element: <AccountDetails /> },
        { path: "/orders", element: <Orders /> },
        { path: "inbox", element: <Inbox /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "vouchers", element: <Vouchers /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
