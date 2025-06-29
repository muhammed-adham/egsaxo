import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PolicyPage from './pages/PolicyPage';
import CartPage from './pages/CartPage';
import HelpCenterPage from './pages/HelpCenterPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {
  CustomerLayout,
  AccountDetails,
  Orders,
  Inbox,
  Wishlist,
  Vouchers
} from './pages/customer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/policy" element={<PolicyPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/customer" element={<CustomerLayout />}>
            <Route path="account" element={<AccountDetails />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inbox" element={<Inbox />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="vouchers" element={<Vouchers />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
