// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import heroImg from '../assets/japan-campus.jpg';

export default function Home() {
  return (
    <div>
      <section className="h-[80vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Globle One Company</h1>
          <p className="mt-4 text-lg">Japan's trusted educational & visa consulting partner</p>
          <Link to="/services" className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-full">Explore Services</Link>
        </div>
      </section>
    </div>
  );
}
