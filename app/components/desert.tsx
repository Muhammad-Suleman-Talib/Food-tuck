import type { NextPage } from "next";
import Image from "next/image";
import { FaIceCream } from "react-icons/fa";

const StarterMenues: NextPage = () => {
  return (
    <div className="w-full bg-[#878484] py-10 px-4 lg:px-20 text-white">
      {/* Left Section with Image */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="w-full lg:w-1/3">
          <img
            className="rounded-lg shadow-lg"
            width={448}
            height={626}
            alt="Delicious Dessert"
            src="images/desrt.png"
          />
        </div>

        {/* Right Section with Menu Items */}
        <div className="w-full lg:w-2/3 space-y-8">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold text-primary-color">Dessert</h2>
            <p className="text-black mt-2">
              Indulge in our finest selection of desserts crafted with love.
            </p>
          </div>

          {/* Menu Items */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex justify-between items-center border-b border-gray-600 border-dashed pb-4">
              <div className="flex items-center gap-2">
                <FaIceCream className="text-yellow-400 text-xl" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Fig and Lemon Cake
                  </h3>
                  <p className="text-black text-sm">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <span className="text-black text-sm">560 CAL</span>
                </div>
              </div>
              <div className="text-yellow-400 font-bold text-2xl">$32</div>
            </div>

            {/* Item 2 */}
            <div className="flex justify-between items-center border-b border-gray-600 border-dashed pb-4">
              <div className="flex items-center gap-2">
                <FaIceCream className="text-yellow-400 text-xl" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Creamy Mascarpone Cake
                  </h3>
                  <p className="text-black text-sm">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <span className="text-black text-sm">700 CAL</span>
                </div>
              </div>
              <div className="text-yellow-400 font-bold text-2xl">$43</div>
            </div>

            {/* Item 3 */}
            <div className="flex justify-between items-center border-b border-gray-600 border-dashed pb-4">
              <div className="flex items-center gap-2">
                <FaIceCream className="text-yellow-400 text-xl" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Pastry, Blueberries, Lemon Juice
                  </h3>
                  <p className="text-black text-sm">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <span className="text-black text-sm">1000 CAL</span>
                </div>
              </div>
              <div className="text-yellow-400 font-bold text-2xl">$14</div>
            </div>

            {/* Item 4 */}
            <div className="flex justify-between items-center border-b border-gray-600 border-dashed pb-4">
              <div className="flex items-center gap-2">
                <FaIceCream className="text-yellow-400 text-xl" />
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Pain au Chocolat
                  </h3>
                  <p className="text-black text-sm">
                    Spreadable cream cheese, crumbled blue cheese
                  </p>
                  <span className="text-black text-sm">560 CAL</span>
                </div>
              </div>
              <div className="text-yellow-400 font-bold text-2xl">$35</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarterMenues;
