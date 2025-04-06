import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">&copy; {new Date().getFullYear()} SHL Assessment Recommender</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.shl.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm">
              SHL Website
            </a>
            <a href="https://www.shl.com/solutions/products/product-catalog/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm">
              Product Catalog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;