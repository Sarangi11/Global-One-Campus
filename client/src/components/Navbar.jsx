import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // update with your logo path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-bold text-blue-900 text-xl">Globle One</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-blue-800 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-900 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-blue-800 font-medium">
          <Link to="/" onClick={() => setIsOpen(false)} className="block">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block">About</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="block">Services</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}
