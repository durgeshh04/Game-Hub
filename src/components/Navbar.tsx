import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <img
              className="w-10 h-10 rounded-full"
              src={logo}
              alt="Company Logo"
            />
            <span className="text-xl font-extrabold text-green-400 tracking-wide">
              Eagle Gaming
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Home
            </a>
            <a
              href="#games"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Games
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-green-400 transition"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-green-400 transition"
            >
              Contact
            </a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex">
            <button className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-xl font-semibold text-gray-900 shadow">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-green-400"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          <a href="#home" className="block text-gray-300 hover:text-green-400">
            Home
          </a>
          <a href="#games" className="block text-gray-300 hover:text-green-400">
            Games
          </a>
          <a href="#about" className="block text-gray-300 hover:text-green-400">
            About
          </a>
          <a
            href="#contact"
            className="block text-gray-300 hover:text-green-400"
          >
            Contact
          </a>
          <button className="w-full bg-green-400 hover:bg-green-500 px-4 py-2 rounded-xl font-semibold text-gray-900 shadow">
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
