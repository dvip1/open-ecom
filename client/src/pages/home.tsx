import React, { useEffect, useState } from 'react';
import Navbar from '../components/partials/navbar';
import Footer from '../components/partials/footer';
import ProductCard from '../components/product_card';

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

const Home: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Fetch products from your API and set the products state
        // This is just a placeholder, replace with your actual API call
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div className="home">
            <Navbar />
            <h1>Welcome to our Shop!</h1>
            <p>Check out our most popular flavors below(ice cream):</p>
            <div className="product-list">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Home;