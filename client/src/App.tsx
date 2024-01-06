import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ProductDetails from './pages/product_details';
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import Custom404 from './pages/Custom404';
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Custom404 />} />
      </Routes>
    </Router>
  );
}

export default App;