import type { NextPage } from 'next';
import { FaQuoteRight, FaStar, FaHeart, FaCommentDots } from 'react-icons/fa';

const Testimonials: NextPage = () => {
  return (
    <div className="relative w-full bg-[#999999] py-12 text-left font-sans">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        What our clients are <span className="text-[#FF9F0D]">saying</span>
      </h2>

      {/* Testimonial Container */}
      <div className="max-w-4xl mx-auto flex flex-col  lg:flex-row items-center shadow-lg bg-white rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative w-full  lg:w-1/2 h-80 lg:h-auto">
          <img
            className="object-cover w-full h-full"
            alt="Client"
            src="images/t2.png"
          />
          {/* Overlay Icons */}
          <div className="absolute top-4 left-4 flex items-center space-x-2 text-[#FF9F0D]">
            <FaStar size={24} />
            <FaHeart size={24} />
            <FaCommentDots size={24} />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="w-full lg:w-1/2 p-8 text-gray-600 flex flex-col justify-center">
          {/* Quote Icon */}
          <div className="flex justify-center mb-4 text-[#FF9F0D]">
            <FaQuoteRight size={48} />
          </div>

          {/* Testimonial Text */}
          <p className="mb-6 text-lg leading-7 text-center lg:text-left">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus."
          </p>

          {/* Stars */}
          <div className="flex justify-center lg:justify-start mb-6 text-[#FF9F0D]">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} size={20} />
            ))}
          </div>

          {/* Client Name and Profession */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl font-bold text-gray-800">Alamin Hasan</h3>
            <p className="text-sm text-gray-500">Food Specialist</p>
          </div>

          {/* Decorative Dots */}
          <div className="flex justify-center lg:justify-start mt-6 text-gray-300">
            <div className="w-16 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
