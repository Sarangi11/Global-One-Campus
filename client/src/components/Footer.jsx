import logo from '../assets/logo.jpg'; // update with your actual logo path

export default function Footer() {
  return (
    <footer className="bg-white text-blue-900 px-6 py-10 shadow-inner">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm">&copy; {new Date().getFullYear()} Globle One Future Company</p>
        </div>

        {/* Right - Contact Info */}
        <div className="text-sm space-y-2">
          <h4 className="text-lg font-semibold text-blue-800">Contact Us</h4>
          <p>📞 +81 123 456 789</p>
          <p>📍 Tokyo Tower, Minato-ku, Tokyo, Japan</p>
          <p>📧 info@globleone.co.jp</p>
        </div>
      </div>
    </footer>
  );
}
