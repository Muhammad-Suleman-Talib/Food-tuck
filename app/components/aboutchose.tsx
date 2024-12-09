import type { NextPage } from 'next';
import Image from "next/image";
import { FaLeaf, FaUtensils } from "react-icons/fa";
import { GiCook } from "react-icons/gi";

const WhyChooseUse: NextPage = () => {
  return (
    <div className="w-full text-left bg-[#878484] text-gray-700 font-sans py-16 px-4 md:px-16">
      {/* Title Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Why <span className="text-yellow-500">Choose Us</span>
        </h2>
        <p className="text-base text-black-500 mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-500 rounded-full mx-auto mb-6">
            <FaLeaf size={40} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Clean Environment</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-500 rounded-full mx-auto mb-6">
            <FaUtensils size={40} />
          </div>
          <h3 className="text-2xl font-semibold text-black-800 mb-4">120 Items of Food</h3>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <div className="flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-500 rounded-full mx-auto mb-6">
            <GiCook size={40} />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Best Chefs</h3>
          <p className="text-black-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUse;
