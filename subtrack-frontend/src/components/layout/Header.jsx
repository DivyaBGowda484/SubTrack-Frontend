// src/components/layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">SubTrack</Link>
    <nav className="space-x-4">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
      <Link to="/logout" className="hover:underline">Logout</Link>
    </nav>
  </header>
);

export default Header;
