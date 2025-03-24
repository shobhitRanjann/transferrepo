'use client';

import React, { useState, lazy, useEffect } from 'react';
import dynamic from 'next/dynamic';
// import { usePathname, useRouter } from 'next/navigation';

const IncreaseViews = dynamic(() => import('../increaseview/increaseview'), { ssr: false });
const Dashboard = lazy(() => import('../(frontsidebar)/dahboard/dashboard'));

export default function SidebarFrontPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") || "" : ""
  ); // 'day', 'night', or 'system'
  // const router = useRouter();
  // const pathname = usePathname(); // Get current route
  const [activetab, setActivetab] = useState('Dashboard');

  // Get active tab from URL

  // Load theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day');
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (theme === 'day') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle theme
  const handleThemeToggle = () => {
    setTheme(theme === 'day' ? 'night' : 'day');
  };

  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation
  const handleTabClick = (tabName: string) => {
    // const path = `/${tabName.toLowerCase().replace(/\s+/g, "-")}`;
    // if (pathname !== path) {
    //   router.push(path); // Change URL
    // }
    setActivetab(tabName)
    if (window.innerWidth < 1024) {
      setIsOpen(false); // Close sidebar on mobile
    }
    
  };

  return (
    <div className="relative min-h-screen flex dark:bg-gray-600">
      {/* Blurred background when sidebar is open (mobile only) */}
      {isOpen && <div className="lg:hidden fixed inset-0 backdrop-blur-md z-10" onClick={toggleSidebar}></div>}

      {/* Sidebar */}
      <div
        className={`fixed inset-0 top-0 z-20 min-h-screen bg-blue-500 dark:bg-gray-800 text-white p-4 transform transition-transform duration-300
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} lg:opacity-100 lg:translate-x-0 lg:w-64 w-1/2`}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Sidebar</h2>
        <ul>
          {["Dashboard", "Youtube View Increaser", "Tambola App", "Random Chat"].map((item) => {
            return (
              <li key={item} className="mb-2">
                <button
                  className={`text-lg transition-colors px-0 py-0 block rounded-md w-full text-left ${activetab === item ? "bg-white text-blue-500 font-semibold" : "hover:text-gray-300"
                    }`}
                  onClick={() => handleTabClick(item)}
                >
                  {item}
                </button>
              </li>
            );
          })}

          {/* Theme Toggle */}
          <label className="ui-switch">
            <input type="checkbox" />
            <div className="slider" onClick={handleThemeToggle}>
              <div className="circle" />
            </div>
          </label>
        </ul>
      </div>

      {/* Main Content */}
      <div className={`flex-1 p-4 lg:ml-64 transition-all duration-300 ease-in-out ${isOpen && window.innerWidth < 1024 ? 'blur-sm' : ''}`}>
        <div className='mt-9'>
          {/* Dynamic Page Content */}
          {activetab === 'Dashboard' && <Dashboard/>}
          {activetab === "Youtube View Increaser" && <IncreaseViews/>}
          
        </div>
      </div>

      {/* Hamburger Icon for Mobile */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="lg:hidden absolute top-4 left-4 text-black p-4 focus:outline-none z-30"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
    </div>
  );
}
