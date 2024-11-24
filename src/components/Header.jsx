import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4 py-3">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-lg sm:text-2xl flex items-center gap-1">
            <span className="text-gray-100">Home</span>
            <span className="text-indigo-400">Finder</span>
          </h1>
        </Link>

        {/* Search Bar */}
        <form className="flex items-center bg-gray-800 p-2 rounded-full shadow-sm border border-gray-700">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none w-24 sm:w-64 px-2 text-sm text-gray-300"
          />
          <button type="submit" className="p-1">
            <FaSearch className="text-gray-400 hover:text-indigo-400 transition duration-200" />
          </button>
        </form>

        {/* Navigation */}
        <ul className="flex items-center gap-6">
          <Link to="/">
            <li className="text-gray-300 hover:text-indigo-400 hover:underline text-sm sm:text-base transition duration-200">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="text-gray-300 hover:text-indigo-400 hover:underline hidden sm:inline text-sm sm:text-base transition duration-200">
              About
            </li>
          </Link>
          <Link to="/Signin">
            <li className="text-gray-300 hover:text-indigo-400 hover:underline text-sm sm:text-base transition duration-200">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
      
    </header>
  );
}

export default Header;
