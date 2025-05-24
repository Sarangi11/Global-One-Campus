// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Us</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Your Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Your Message" rows="5" className="w-full border p-3 rounded"></textarea>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Send</button>
      </form>
    </div>
  );
}
