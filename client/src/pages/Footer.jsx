// src/components/Footer.jsx
import logo from '../assets/logo.png'; // ← replace with your actual logo path

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-6 py-10">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left Side - Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm">&copy; {new Date().getFullYear()} Globle One Company</p>
        </div>

        {/* Right Side - Contact Info */}
        <div className="text-sm space-y-2">
          <h4 className="text-lg font-semibold text-white">Contact Us</h4>
          <p>📞 +81 123 456 789</p>
          <p>📍 1-1 Tokyo Tower, Minato-ku, Tokyo, Japan</p>
          <p>📧 info@globleone.co.jp</p>
        </div>
      </div>
    </footer>
  );
}
