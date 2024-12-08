import { FaHamburger, FaUtensils, FaWineGlassAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="relative w-full bg-[#999999] px-6 py-12 lg:px-20 lg:py-20 text-primary-color">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span style={{color:'#FF9F0D'}}>Ex</span>
          <span className="text-gray-800">traordinary Taste</span>
        </h2>
        <p className="text-lg md:text-xl  font-great-vibes" style={{color:'#FF9F0D'}}>
          Why Choose Us
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <img
              className="rounded-md w-full object-cover shadow-lg"
              width={362}
              height={356}
              alt="Extraordinary Taste"
              src="images/w1.png"
            />
          </div>
          <img
            className="rounded-md w-full object-cover shadow-md"
            width={244}
            height={306}
            alt="Fast Food"
            src="images/w3.png"
          />
          <div className="grid grid-cols-2 gap-2">
            <img
              className="rounded-md object-cover shadow-sm"
              width={161}
              height={168}
              alt="Beverage"
              src="images/w5.png"
            />
            <img
              className="rounded-md object-cover shadow-sm"
              width={161}
              height={166}
              alt="Side Dish"
              src="images/w6.png"
            />
          </div>
         
          <img
            className="rounded-md w-full object-cover shadow-md"
            width={221}
            height={226}
            alt="Refreshing Drinks"
            src="images/w4.png"
          />
           <img
            className="rounded-md w-full object-cover shadow-md"
            width={281}
            height={231}
            alt="Healthy Food"
            src="images/w2.png"
          />
          
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center">
          {/* Description */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span style={{color:'#FF9F0D'}}>  Extra</span>
          <span className="text-gray-800">ordinary Taste</span>
        </h2>
          <p className="text-lg md:text-xl mb-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Features */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-orange-500 p-4 rounded-full shadow-md">
                <FaHamburger className="text-white text-3xl" />
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-800">
                Fast Food
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-500 p-4 rounded-full shadow-md">
                <FaUtensils className="text-white text-3xl" />
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-800">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-red-500 p-4 rounded-full shadow-md">
                <FaWineGlassAlt className="text-white text-3xl" />
              </div>
              <p className="mt-2 text-sm font-semibold text-gray-800">Dinner</p>
            </div>
          </div>

          {/* Experience Box */}
          <div className="bg-white rounded-lg shadow-lg flex items-center py-4 px-6">
            <div className="bg-orange-500 w-2 rounded-md h-full"></div>
            <div className="ml-6">
              <h3 className="text-4xl font-bold " style={{color:'#FF9F0D'}}>30+</h3>
              <p className="text-gray-800 text-lg">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
