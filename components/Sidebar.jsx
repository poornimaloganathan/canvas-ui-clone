import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome, FiBook, FiCalendar, FiMail, FiHelpCircle, FiMenu
} from 'react-icons/fi';

const menuItems = [
  { name: 'Dashboard', path: '/', icon: <FiHome /> },
  { name: 'Courses', path: '/courses', icon: <FiBook /> },
  { name: 'Calendar', path: '/calendar', icon: <FiCalendar /> },
  { name: 'Inbox', path: '/inbox', icon: <FiMail /> },
  { name: 'Help', path: '/help', icon: <FiHelpCircle /> },
];

const Sidebar = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="lg:hidden p-4 bg-[#006666] text-white">
        <button onClick={() => setMobileOpen(!isMobileOpen)}>
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Responsive Sidebar */}
      <div
        className={`bg-[#006666] text-white h-screen fixed top-0 transition-all duration-300 z-50
          ${isMobileOpen ? 'left-0 w-64' : 'left-[-100%]'}
          sm:static sm:w-20 lg:w-64`}
      >
        <nav className="flex flex-col gap-4 mt-4 px-4">
          {menuItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`flex items-center gap-4 p-2 rounded transition-all duration-200 
                ${isActive(item.path)
                  ? 'bg-[#20B2AA] text-black font-semibold'
                  : 'hover:bg-[#1A9A9A]'
                }`}
              onClick={() => setMobileOpen(false)} 
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden lg:inline">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
