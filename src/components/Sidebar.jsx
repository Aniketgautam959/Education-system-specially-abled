import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-30 md:hidden bg-white/80 backdrop-blur-md p-2 rounded-lg shadow-lg"
        onClick={() => setOpen(!open)}
        aria-label="Open sidebar"
      >
        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white/80 backdrop-blur-md shadow-lg z-20 transform transition-transform duration-300 md:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} md:block`}
        onClick={() => setOpen(false)}
      >
        <header className="p-6">
          <Link to="/">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 cursor-pointer">AbleVista</h2>
          </Link>
        </header>
        <nav className="mt-8 px-4" aria-label="Main Navigation">
          <Link to="/" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            {/* Home Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 bg-blue-50 text-blue-700 mb-2">
            {/* Dashboard Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 13a4 4 0 008 0V7a4 4 0 10-8 0v6z" />
            </svg>
            <span>Dashboard</span>
          </Link>
          <Link to="/courses" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            {/* Courses Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span>My Courses</span>
          </Link>
          <Link to="/progress" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            {/* Progress Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Progress</span>
          </Link>
          <Link to="/resources" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            {/* Resources Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            <span>Resources</span>
          </Link>
          <Link to="/settings" className="flex items-center space-x-3 py-3 px-4 rounded-xl transition duration-200 hover:bg-blue-50 text-gray-700 mb-2">
            {/* Settings Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Settings</span>
          </Link>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="text-sm font-medium text-blue-800 mb-2">Need Help?</h3>
            <p className="text-xs text-blue-600 mb-3">Contact our support team for assistance</p>
            <button className="w-full py-2 px-3 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
              Get Support
            </button>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden" onClick={() => setOpen(false)}></div>}
    </>
  );
};

export default Sidebar; 