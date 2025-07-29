import React from 'react';

const Header = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="bg-white shadow-sm p-4 rounded-xl">
      <h1 className="text-2xl font-semibold text-gray-800">Welcome, Poornima</h1>
      <p className="text-gray-500 text-sm">{today}</p>
    </header>

  );
};

export default Header;
