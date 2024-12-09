import type { NextPage } from "next";
import { FaPizzaSlice, FaHamburger, FaIceCream, FaCocktail } from "react-icons/fa"; // Importing food-related icons

const ClientsAndPartner: NextPage = () => {
  return (
    <div className="w-full relative py-10 px-4 lg:px-20 text-white bg-[#999999] ">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-yellow-400">We Work With The Best People</h2>
        <p className="text-xl text-gray-400 mt-2">Partners & Clients</p>
      </div>

      {/* Partner Logos and Icons Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Food Icons to Represent Clients */}
        <div className="flex justify-center items-center">
          <FaPizzaSlice className="text-yellow-400 text-5xl" />
        </div>
        <div className="flex justify-center items-center">
          <FaHamburger className="text-yellow-400 text-5xl" />
        </div>
        <div className="flex justify-center items-center">
          <FaIceCream className="text-yellow-400 text-5xl" />
        </div>
        <div className="flex justify-center items-center">
          <FaCocktail className="text-yellow-400 text-5xl" />
        </div>

        {/* Partner Logo Images */}
        <div className="flex justify-center items-center">
          <img
            src="/images/pa1.png"
            width={150}
            height={80}
            alt="Partner Logo 1"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/pa1.png"
            width={150}
            height={80}
            alt="Partner Logo 2"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/pa2.png"
            width={150}
            height={80}
            alt="Partner Logo 3"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/pa5.png"
            width={150}
            height={80}
            alt="Partner Logo 4"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/pa4.png"
            width={150}
            height={80}
            alt="Partner Logo 5"
            className="object-contain"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/images/pa3.png"
            width={150}
            height={80}
            alt="Partner Logo 6"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientsAndPartner;
