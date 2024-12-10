import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa'; // Importing React Icon for checkmark

const AboutUs = () => {
  return (
    <div className="relative w-full min-h-[650px] text-left font-inter bg-[#999999] px-6 md:px-20 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Section with Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-color leading-tight mb-4">
            <span className="text-[#FF9F0D]">We</span> Create the Best
            <br />
            Foody Products
          </h2>

          <div className="text-xl sm:text-2xl text-primary-color font-great-vibes mb-6">About Us</div>

          <p className="text-base sm:text-lg mb-6 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-3 text-base sm:text-lg text-gray-700">
              <FaCheckCircle className="text-[#FF9F0D]" />
              <span>Quality Ingredients</span>
            </div>
            <div className="flex items-center gap-3 text-base sm:text-lg text-gray-700">
              <FaCheckCircle className="text-[#FF9F0D]" />
              <span>Fresh and Healthy</span>
            </div>
            <div className="flex items-center gap-3 text-base sm:text-lg text-gray-700">
              <FaCheckCircle className="text-[#FF9F0D]" />
              <span>Fast Delivery</span>
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-[#FF9F0D] text-white rounded-[30px] py-3 px-8 text-lg hover:bg-[#ff7c00] transition duration-300">
             
              <Link href='/products'> Read More</Link>
            </button>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <img
            className="rounded-md w-full h-[220px] sm:h-[330px] object-cover"
            alt="Food image 1"
            src="images/main.png"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <img
              className="rounded-md w-full sm:w-1/2 h-[160px] sm:h-[194px] object-cover"
              alt="Food image 2"
              src="images/right.png"
            />
            <img
              className="rounded-md w-full sm:w-1/2 h-[160px] sm:h-[194px] object-cover"
              alt="Food image 3"
              src="images/left.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
