import React, { useState } from 'react';
import Navbar from '../components/partials/navbar';
import Footer from '../components/partials/footer';
interface ShippingInfo {
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

const Checkout: React.FC = () => {
    const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
        name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setShippingInfo({
            ...shippingInfo,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Submit the shipping info
        console.log(shippingInfo);
    };

    return (
        <div className='bg-gray-100 min-h-screen overflow-auto'>
            <Navbar />
            <div className="checkout  flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold mb-8">Checkout</h1>
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-md">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <label className="block">
                            <span className="text-gray-700">Name:</span>
                            <input type="text" name="name" value={shippingInfo.name} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-200 border-solid border-2 shadow-sm" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">Address:</span>
                            <input type="text" name="address" value={shippingInfo.address} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-200 border-solid border-2 shadow-sm" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">City:</span>
                            <input type="text" name="city" value={shippingInfo.city} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-200 border-solid border-2 shadow-sm" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">State:</span>
                            <input type="text" name="state" value={shippingInfo.state} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-200 border-solid border-2 shadow-sm" />
                        </label>
                        <label className="block">
                            <span className="text-gray-700">ZIP Code:</span>
                            <input type="text" name="zip" value={shippingInfo.zip} onChange={handleChange} required className="mt-1 block w-full rounded-md border-slate-200 border-solid border-2 shadow-sm" />
                        </label>
                    </div>
                    <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Place Order</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;