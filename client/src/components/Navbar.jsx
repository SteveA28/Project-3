import React, { useState } from 'react';
const Navbar = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const [asideOpen, setAsideOpen] = useState(true);
  const navItems = [
    { icon: 'bx-home', label: 'Dashboard', href: 'add path here' },
    { icon: 'bx-cart', label: 'Cart', href: 'add path here' },
    { icon: 'bx-shopping-bag', label: 'Shopping', href: 'add path here' },
    { icon: 'bx-heart', label: 'My Favourite', href: 'add path here' },
    { icon: 'bx-user', label: 'Profile', href: 'add path here' },
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
          <div>Logo</div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            className="h-9 w-9 overflow-hidden rounded-full"
          >
            <img src="https://plchldr.co/i/40x40?bg=111111" alt="Profile" />
          </button>
          {profileOpen && (
            <div className="absolute right-2 mt-1 w-48 divide-y divide-gray-200 rounded-md border border-gray-200 bg-white shadow-md">
              <div className="flex items-center space-x-2 p-2">
                <img src="https://plchldr.co/i/40x40?bg=111111" alt="Profile" className="h-9 w-9 rounded-full" />
                <div className="font-medium">Hafiz Haziq</div>
              </div>
              <div className="flex flex-col space-y-3 p-2">
                <a href="#" className="transition hover:text-blue-600">My Profile</a>
                <a href="#" className="transition hover:text-blue-600">Edit Profile</a>
                <a href="#" className="transition hover:text-blue-600">Settings</a>
                <button className="flex items-center space-x-2 transition hover:text-blue-600">
                  <i className="bx bx-log-out"></i>
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="flex">
        {asideOpen && (
          <aside className="flex w-72 flex-col space-y-2 border-r-2 border-gray-200 bg-white p-2">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-blue-600">
                <i className={`bx ${item.icon} text-2xl`}></i>
                <span>{item.label}</span>
              </a>
            ))}
          </aside>
        )}
        <div className="w-full p-4">
          {/* Main content goes here */}
        </div>
      </div>
    </main>
  );
};
export default Navbar;

