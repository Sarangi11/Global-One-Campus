export default function About() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">About Us</h2>

      {/* Grid layout for image + description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Image */}
        <div className="w-full h-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1674824835422-1447f5901086?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGphcGFufGVufDB8fDB8fHww"
            alt="About Globle One"
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right - Sidebar Box */}
        <div className="bg-white border-l-4 border-blue-800 shadow p-6 rounded-xl">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">Globle One Company</h3>
          <p className="text-gray-700 mb-3">
            Globle One Company is a leading Japanese consultancy providing services in educational planning, visa acquisition, and program consultation.
          </p>
          <p className="text-gray-700 mb-3">
            Our goal is to support international students and professionals in achieving their dreams in Japan through reliable and friendly service.
          </p>
          <p className="text-gray-700">
            We work closely with top universities, language institutes, and government bodies to ensure your transition into Japanese academic and work environments is smooth and successful.
          </p>
        </div>
      </div>
    </div>
  );
}
