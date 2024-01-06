import React, { useEffect, useState } from 'react';

interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

const ProductDetails: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        // Fetch product details from your API and set the product state
        // This is just a placeholder, replace with your actual API call
        fetch('/api/products/1')
            .then(response => response.json())
            .then(data => setProduct(data));
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
            <img src={product.imageUrl} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default ProductDetails;