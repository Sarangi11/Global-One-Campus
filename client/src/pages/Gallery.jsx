import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
// Add more as you import
// import img10 ... img15

const galleryImages = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9,
  // Add more here...
];

export default function Gallery() {
  return (
    <div className="bg-white py-16 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
        Campus Gallery
      </h2>

      {/* Brief Professional Intro */}
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Globle One Future Campus is more than just a consultancy — it’s a gateway to success in Japan. 
        Take a closer look at our vibrant community, world-class learning environment, and cultural experiences 
        that define our values and vision. This gallery offers a glimpse into our mission to empower futures.
      </p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-md border border-blue-1000 transform transition duration-500 hover:scale-105 hover:shadow-2xl group"
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
