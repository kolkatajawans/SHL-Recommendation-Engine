import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">SHL Recommender</div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.shl.com/solutions/products/product-catalog/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-100 text-sm">
              SHL Catalog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
