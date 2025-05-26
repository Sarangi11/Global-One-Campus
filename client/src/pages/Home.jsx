import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hero1 from "../assets/visa1.jpeg";
import hero2 from "../assets/visa2.jpeg";
import hero3 from "../assets/visa3.jpeg";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ Now use them here
  const images = [hero1, hero2, hero3];
  const navigate = useNavigate();

  const programs = [
    {
      title: "Student Visa Guidance",
      desc: "Help with applying and securing your Japan student visa.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
      link: "/services#student-visa",
    },
    {
      title: "University Admissions",
      desc: "Support for admission into top Japanese universities.",
      image: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amFwYW58ZW58MHx8MHx8fDA%3D",
      link: "/services#admissions",
    },
    {
      title: "Language & Culture Programs",
      desc: "Join immersive Japanese language & cultural courses.",
      image: "https://plus.unsplash.com/premium_photo-1690749740487-01bbb8e51e71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFwYW58ZW58MHx8MHx8fDA%3D",
      link: "/services#language",
    },
    {
      title: "Work Visa Consultation",
      desc: "Switch from study to work visa or apply for job visa.",
      image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGphcGFufGVufDB8fDB8fHww",
      link: "/services#work-visa",
    },
    {
      title: "Scholarship Assistance",
      desc: "Find and apply for scholarships in Japanese institutions.",
      image: "https://images.unsplash.com/photo-1522547902298-51566e4fb383?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGphcGFufGVufDB8fDB8fHww",
      link: "/services#scholarship",
    },
  ];

  // Hero background slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      {/* Hero Section */}
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
            <p className="text-lg md:text-xl mb-6 text-white">
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

      {/* Programs Section */}
      <section className="py-16 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Our Programs
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {programs.map((item, i) => (
            <div
              key={i}
              onClick={() => navigate(item.link)}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition transform group cursor-pointer"
            >
              {/* Image with overlay */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <span className="text-white font-semibold">View More</span>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 text-blue-900">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-700 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Counter component
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
