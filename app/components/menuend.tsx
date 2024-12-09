import type { NextPage } from 'next';

const StarterMenu: NextPage = () => {
  return (
    <div className="w-full  relative   bg-[#878484]  text-left text-base text-gray-2 font-heading-5-24">
      
      {/* Container to position image on top for small screens and side-by-side for larger screens */}
      <div className="relative flex flex-col-reverse sm:flex-row items-center justify-between w-full h-auto">
        
        {/* Text Section */}
        <div className="flex flex-col w-full sm:w-[50%] p-4 sm:p-8">
          <b className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-1 leading-tight mb-4">
            Main Course
          </b>
          {/* Menu Items */}
          {[
            {
              title: "Optic Big Breakfast Combo Menu",
              description: "Toasted French bread topped with romano, cheddar",
              calories: "560 CAL",
              price: "$32",
            },
            {
              title: "Cashew Chicken With Stir-Fry",
              description: "Gorgonzola, ricotta, mozzarella, taleggio",
              calories: "700 CAL",
              price: "$43",
            },
            {
              title: "Vegetables & Green Salad",
              description: "Ground cumin, avocados, peeled and cubed",
              calories: "1000 CAL",
              price: "$14",
            },
            {
              title: "Spicy Vegan Potato Curry",
              description: "Spreadable cream cheese, crumbled blue cheese",
              calories: "560 CAL",
              price: "$35",
            }
          ].map((item, index) => (
            <div key={index} className="relative mt-8 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <div className="text-white">
                <div className="text-xl sm:text-2xl text-gray-100">{item.title}</div>
                <div className="mt-2 text-black-500">{item.description}</div>
                <div className="mt-2 text-black-500">{item.calories}</div>
                <div className="mt-2">
                  <span className="text-lg font-bold text-yellow-400">{item.price}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="mt-4 h-[1px] w-full border-t border-gray-600"></div>
            </div>
          ))}
        </div>
        
        {/* Image Section */}
        <div className="relative w-full sm:w-[50%] h-[300px] sm:h-[628px] lg:h-[750px]">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            width={448}
            height={626}
            alt="Background Image"
            src="images/end.png" // Replace with your actual image
          />
        </div>
      </div>
    </div>
  );
};

export default StarterMenu;
