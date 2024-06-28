import React from "react";

const Header = ({ cartItems }) => {
  return (
    <header className="App-header flex justify-between p-4 bg-gray-800 text-white">
      <div className="text-lg font-bold">Shop</div>
      <div className="relative">
        {cartItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 rounded-full text-white text-xs w-5 h-5 flex items-center justify-center">
            {cartItems}
          </span>
        )}
        <svg
          className="w-6 h-6 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 6m1.6 7L7 21h10l1-8M10 21a2 2 0 104 0M6 9h12"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default Header;
