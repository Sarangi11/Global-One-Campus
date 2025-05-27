import { useState } from "react";
import campusImg from "../assets/japan-campus.jpg";

const services = [
  {
    title: "Educational Consulting",
    desc: "Get personalized admission guidance, course selection support, and assistance through your entire application process.",
  },
  {
    title: "Visa Programs",
    desc: "Expert help for applying for student, work, or long-term stay visas with a focus on accuracy and fast approvals.",
  },
  {
    title: "Cultural Exchange",
    desc: "Participate in immersive Japanese language and culture programs ranging from 2 weeks to 1 year.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-800">
        Our Services
      </h2>

      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Globle One Future Campus is dedicated to guiding students and professionals every step
        of the way — from choosing the right program to getting their visa approved. Discover
        how our team supports your journey to Japan.
      </p>
      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(index)}
            className="bg-white p-6 rounded-xl shadow-md border border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group"
          >
            <div className="mb-4 w-12 h-1 bg-blue-600 rounded-full group-hover:w-20 transition-all duration-300"></div>
            <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-800">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-3 text-sm">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Selected Service Section */}
      {selected !== null && (
        <div className="mt-12 bg-blue-50 p-8 rounded-xl shadow-inner text-center">
          <img
            src={campusImg}
            alt="Selected service"
            className="mx-auto w-full md:w-2/3 rounded-xl shadow-md mb-6"
          />
          <h4 className="text-2xl font-bold text-blue-700">
            {services[selected].title}
          </h4>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            {services[selected].desc}
          </p>
        </div>
      )}
    </div>
  );
}
