import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const navItems = [
    { icon: 'bx-home', label: 'HOME', href: '/' }, // Added "HOME" button
    { icon: 'bx-log-in', label: 'LOGIN', href: '/login' }, // Added "LOGIN" button
    { icon: 'bx-user-plus', label: 'SIGN UP', href: '/signup' }, // Added "SIGN UP" button
  ];
  return (
    <main className=" w-full bg-gray-100 text-gray-700">
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-3xl"
            onClick={() => setAsideOpen(!asideOpen)}
          >
            <i className="bx bx-menu"></i>
          </button>
          {/* Palm tree next to TripSet */}
          <img src="https://pngimg.com/d/palm_tree_PNG93280.png" alt="Logo" className="h-8 w-8" />
          <div>TripSet</div>
        </div>
        <div className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <Link key={index} to={item.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-blue-600">
              <i className={`bx ${item.icon} text-xl align-middle`}></i>
              <span className="ml-1 align-middle">{item.label}</span>
            </Link>
          ))}
        </div>
      </header>
      <div className="flex">
        {asideOpen && (
          <aside className="w-72 border-r-2 border-gray-200 bg-white p-2">
            {}
          </aside>
        )}
        <div className="flex-grow">
          {}
        </div>
      </div>
    </main>
  );
};
export default Navbar;