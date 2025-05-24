// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
   <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
  <div className="max-w-screen-xl mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold text-blue-900">Globle One Company</h1>
    <div className="space-x-6 text-blue-700">
     <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
