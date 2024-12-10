'use client';

import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [animate, setAnimate] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false); // State for success message

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    setSuccessMessage(true); // Show success message
    setTimeout(() => setSuccessMessage(false), 5000); // Hide message after 5 seconds
    setFormData({ name: '', email: '', message: '' }); // Clear the form
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-[#737171] text-white min-h-screen py-24">
      <div className="container mx-auto px-6 md:px-12">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#FF9F0D]">Contact Us</h1>
          <p className="text-sm mt-2 text-gray-200">
            Let’s get connected! Reach out through the form or follow us on social media.
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="text-center mb-8">
            <p className="bg-green-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg inline-block">
              Your message has been sent to the admin! 😊
            </p>
          </div>
        )}

        {/* Side-by-Side Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
          {/* Form Section */}
          <div
            className={`lg:w-1/2 transform transition duration-1000 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-lg shadow-lg transition-all hover:shadow-xl"
            >
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-black rounded focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
                  placeholder="Your Message"
                  rows={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF9F0D] text-white py-2 px-4 rounded shadow-md hover:bg-orange-500 transition"
              >
                Submit
              </button>
            </form>

            {/* Social Media Section */}
            <div className="text-center mt-8">
              <h3 className="text-lg font-semibold text-[#FF9F0D]">Follow Us</h3>
              <div className="flex justify-center gap-6 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF9F0D] transition">
                  <FaFacebook />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF9F0D] transition">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF9F0D] transition">
                  <FaInstagram />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-[#FF9F0D] transition">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div
            className={`lg:w-1/2 transform transition duration-1000 ${
              animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093714!2d144.95373631531677!3d-37.81627944202161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57759d9b6f5d4d8!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1631154923255!5m2!1sen!2sau"
                width="100%"
                height="454" /* Matches form height */
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
