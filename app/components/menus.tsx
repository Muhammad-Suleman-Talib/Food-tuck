import type { NextPage } from "next";
import { FaUtensils } from "react-icons/fa";

const StarterMenu: NextPage = () => {
  return (
    <div className="w-full bg-[#878484] py-10 px-4 lg:px-20 text-gray-200">
      {/* Layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/menu2.png" // Replace with the correct image path
            alt="Starter Menu Background"
            width={600}
            height={750}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Starter Menu
          </h2>
          <p className="text-black-400 text-lg">
            Explore our exclusive starter menu featuring dishes crafted with
            premium ingredients and exceptional flavors.
          </p>

          {/* Menu Items */}
          {[
            {
              title: "Alder Grilled Chinook Salmon",
              description: "Toasted French bread topped with romano, cheddar",
              calories: "560 CAL",
              price: "$32",
            },
            {
              title: "Berries and Creme Tart",
              description: "Gorgonzola, ricotta, mozzarella, taleggio",
              calories: "700 CAL",
              price: "$43",
            },
            {
              title: "Tormentoso Bush Pizza Pintoage",
              description: "Ground cumin, avocados, peeled and cubed",
              calories: "1000 CAL",
              price: "$14",
            },
            {
              title: "Spicy Vegan Potato Curry",
              description: "Spreadable cream cheese, crumbled blue cheese",
              calories: "560 CAL",
              price: "$35",
            },
          ].map((item, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaUtensils className="text-yellow-400 text-xl" />
                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <span className="text-gray-400 text-lg">{item.calories}</span>
              </div>
              <p className="mt-2 text-black-400">{item.description}</p>
              <div className="text-yellow-400 font-bold text-xl mt-2">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
