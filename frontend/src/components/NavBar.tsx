import React from 'react';
import logop from '../assets/logop.png';

const NavBar: React.FC = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src={logop} 
            alt="Programming Pathshala Logo"
            className="h-10 w-8"
          />
          <span className="text-lg font-semibold" style={{color: '#444BAB'}}>Programming Pathshala</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by videos or problems"
              className="w-full p-2 pl-10 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-400"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M8 16a8 8 0 100-16 8 8 0 000 16zm5.707-10.707a1 1 0 10-1.414-1.414L8 8.586 6.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          {/* Notification Icon */}
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-2.485-1.355-4.675-3.5-5.914V4a1.5 1.5 0 00-3 0v1.086A6.002 6.002 0 006 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v2a2 2 0 11-4 0v-2m4 0H9"
              />
            </svg>
          </button>

          {/* Subscribe Button */}
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
            Subscribe Now
          </button>

          {/* Switch Learning Path */}
          <a href="#" className="text-blue-500 hover:underline">
            Switch Learning Path
          </a>

          {/* User Profile */}
          <div className="relative">
            <button className="flex items-center text-gray-600 hover:text-gray-800">
              <img
                src="path/to/user-avatar.png" // Replace with user avatar path
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="ml-2">Gouri Sharma</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
