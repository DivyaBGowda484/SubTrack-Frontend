// src/components/layout/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <aside className="w-64 bg-white shadow h-screen fixed left-0 top-0 pt-20 px-6">
    <nav className="flex flex-col gap-4">
      <NavLink to="/dashboard" className={({ isActive }) => isActive ? "font-bold text-blue-600" : ""}>
        Dashboard
      </NavLink>
      <NavLink to="/subscriptions">Subscriptions</NavLink>
      <NavLink to="/expenses">Expenses</NavLink>
      <NavLink to="/profile">Profile</NavLink>
    </nav>
  </aside>
);

export default Sidebar;
