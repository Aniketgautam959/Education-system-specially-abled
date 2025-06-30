import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 font-poppins">
    <Sidebar />
    <main className="p-4 md:ml-64 md:p-8 transition-all duration-300">
      {children || <Outlet />}
    </main>
  </div>
);

export default MainLayout; 