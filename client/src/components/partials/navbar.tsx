import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 p-6 text-center">
            <Link to="/" className="text-white mr-4">
                Home
            </Link>
            <Link to="/cart" className="text-white mr-4">
                Cart
            </Link>
            <Link to="/checkout" className="text-white">
                Checkout
            </Link>
        </nav>
    );  
};

export default Navbar;