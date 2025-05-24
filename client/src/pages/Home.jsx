import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hero1 from "../assets/visa1.jpeg";
import hero2 from "../assets/visa2.jpeg";
import hero3 from "../assets/visa3.jpeg";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero1, hero2, hero3];
  const navigate = useNavigate();

  const programs = [
    {
      title: "Student Visa Guidance",
      desc: "Step-by-step help for applying and securing student visas to Japan.",
      link: "/services#student-visa",
    },
    {
      title: "University Admissions",
      desc: "Get admission support into Japan's top universities and programs.",
      link: "/services#admissions",
    },
    {
      title: "Language & Culture Programs",
      desc: "Join immersive Japanese language and cultural exchange programs.",
      link: "/services#language",
    },
    {
      title: "Work Visa Consultation",
      desc: "Switch from study to work visa or apply for direct career visa.",
      link: "/services#work-visa",
    },
    {
      title: "Scholarship Assistance",
      desc: "Explore and apply for scholarships offered by Japanese institutions.",
      link: "/services#scholarship",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="h-[70vh] relative overflow-hidden">
        <img
          src={images[currentImage]}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover brightness-90 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/40 to-blue-800/60 backdrop-blur-sm"></div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <div className="max-w-2xl p-6 bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Globle One Company
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Japan's trusted educational & visa consulting partner
            </p>
            <Link
              to="/services"
              className="bg-white text-blue-900 font-semibold px-6 py-2 rounded-full hover:bg-blue-100 transition"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Counter value={1000} label="STUDENTS SERVED" />
          <Counter value={5} label="VISA CATEGORIES" />
          <Counter value={98} label="SUCCESS RATE" suffix="%" />
        </div>
      </section>

      {/* Program Boxes */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Our Programs
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {programs.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.link)}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition group cursor-pointer relative"
            >
              <h3 className="text-xl font-semibold text-blue-800 group-hover:text-blue-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 group-hover:opacity-100 opacity-70 transition-opacity duration-300">
                {item.desc}
              </p>
              <button className="mt-2 text-sm text-blue-700 group-hover:underline">
                View More →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Counter Component
function Counter({ value, label, suffix = "+" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = value > 100 ? 20 : 1;
    const interval = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(interval);
        current = value;
      }
      setCount(current);
    }, 30);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div>
      <h2 className="text-4xl font-bold text-blue-800">
        {count}
        {suffix}
      </h2>
      <p className="mt-2 text-blue-900 font-semibold tracking-wide">{label}</p>
    </div>
  );
}
