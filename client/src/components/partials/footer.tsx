import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-5 fixed inset-x-0 bottom-0">
            <div className="container mx-auto text-center">
                <p className="text-gray-600">© 2021 ECS batch. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;