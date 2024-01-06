interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="product-card bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.name} />
            <div className="p-4">
                <h2 className="font-bold text-2xl mb-2">{product.name}</h2>
                <p className="text-gray-700">${product.price}</p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;