// src/pages/Services.jsx
import { useState } from 'react';
import campusImg from '../assets/japan-campus.jpg';

const services = [
  { title: 'Educational Consulting', desc: 'Get admission guidance, course selection and application help.' },
  { title: 'Visa Programs', desc: 'Apply for student, work, or long-term stay visas with expert support.' },
  { title: 'Cultural Exchange', desc: 'Join short and long-term Japanese language and culture programs.' }
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-700">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} onClick={() => setSelected(index)}
            className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>

      {selected !== null && (
        <div className="mt-10 p-6 bg-gray-100 rounded-xl text-center">
          <img src={campusImg} className="mx-auto w-full md:w-2/3 rounded-xl mb-4" alt="campus" />
          <h4 className="text-2xl font-bold text-blue-700">{services[selected].title}</h4>
          <p className="mt-2 text-gray-700">{services[selected].desc}</p>
        </div>
      )}
    </div>
  );
}
