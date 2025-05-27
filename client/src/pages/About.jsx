import { useEffect, useState } from "react";

export default function About() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("about-section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setShowContent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="about-section" className="bg-white px-6 py-16 max-w-6xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
        About Globle One Company
      </h2>

      {/* Layout: Video + Description */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Video Section */}
        <div
          className={`transition-transform duration-1000 ease-in-out transform ${
            showContent ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <div className="rounded-xl border-2 border-blue-300 bg-blue-50 shadow-lg overflow-hidden">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[400px] object-cover"
            >
              <source
                src="https://videos.pexels.com/video-files/31387395/13393331_640_360_30fps.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2 italic">
            Experience the beauty and opportunity of Japan
          </p>
        </div>

        {/* Description Box */}
        <div
          className={`transition-transform duration-1000 ease-in-out transform ${
            showContent ? "scale-100 opacity-100" : "scale-90 opacity-0"
          } bg-white border-l-4 border-blue-300 shadow-md p-6 rounded-xl`}
        >
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Who We Are
          </h3>
          <p className="text-gray-700 mb-4">
            <strong>Globle One Company</strong> is a trusted Japanese consultancy offering
            expert support to students, professionals, and families looking to pursue
            education and career opportunities in Japan.
          </p>

          <h4 className="text-lg font-semibold text-blue-600 mb-2">
            Our Commitment
          </h4>
          <p className="text-gray-700 mb-4">
            We provide transparent, reliable, and ethical guidance to help clients
            confidently navigate the Japanese education and immigration systems.
          </p>

          <h4 className="text-lg font-semibold text-blue-600 mb-2">What We Offer</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Student & Work Visa Consultation</li>
            <li>University & Language School Admission Support</li>
            <li>Scholarship Application Assistance</li>
            <li>Culture & Career Integration Guidance</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
