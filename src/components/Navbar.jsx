// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg">SpeedVitals</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">About</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
          <li>
            <button onClick={toggleDarkMode} className="text-white">
              Toggle Dark Mode
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
