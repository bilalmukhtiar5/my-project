import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 w-full">
      <ul className="flex justify-center space-x-8">
        <li>
          <a href="/" className="text-white hover:text-gray-200">
            HOME
          </a>
        </li>
        <li>
          <a href="/about" className="text-white hover:text-gray-200">
            ABOUT US
          </a>
        </li>
        <li>
          <a href="/products" className="text-white hover:text-gray-200">
            PRODUCTS
          </a>
        </li>
        <li>
          <a href="/contact" className="text-white hover:text-gray-200">
            CONTACT 
          </a>
        </li>
      </ul>
    </nav>
  );
}
  

export default Navbar;
