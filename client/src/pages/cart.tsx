import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/partials/navbar';
import Footer from '../components/partials/footer';
interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

interface CartItem extends Product {
    quantity: number;
}

const Cart: React.FC = () => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleRemoveFromCart = (productId: string) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        
        <div className="shopping-cart">
            <Navbar />
            <h1>Your Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} />
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
                    </div>
                ))
            )}
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/checkout">Proceed to Checkout</Link>
            <Footer />
        </div>
    );
};

export default Cart;