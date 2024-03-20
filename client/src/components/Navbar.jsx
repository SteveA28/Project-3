import React, { useState } from 'react';
const Navbar = () => {
  const [asideOpen, setAsideOpen] = useState(false);
  const navItems = [
    { icon: 'bx-home', label: 'HOME', href: 'add path here' },
    { icon: 'bx-user-plus', label: 'SIGN UP', href: 'add path here' },
  ];
  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-700">
      <header className="flex w-full items-center justify-between border-b-2 border-gray-200 bg-white p-2">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="text-3xl"
            onClick={() => setAsideOpen(!asideOpen)}
          >
            <i className="bx bx-menu"></i>
          </button>
          <div>TripSet</div>
        </div>
        <div className="flex items-center space-x-4">
          {navItems.map((item, index) => (
            <a key={index} href={item.href} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 hover:text-blue-600">
              <i className={`bx ${item.icon} text-xl align-middle`}></i>
              <span className="ml-1 align-middle">{item.label}</span>
            </a>
          ))}
        </div>
      </header>
      <div className="flex">
        {/* Render aside only when asideOpen is true */}
        {asideOpen && (
          <aside className="w-72 border-r-2 border-gray-200 bg-white p-2">
            {/* Side menu items if needed */}
          </aside>
        )}
        <div className="flex-grow p-4">
          {/* Main content goes here */}
        </div>
      </div>
    </main>
  );
};
export default Navbar;