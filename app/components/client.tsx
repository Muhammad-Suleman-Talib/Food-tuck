import { FaPizzaSlice, FaDrumstickBite, FaIceCream, FaHamburger } from "react-icons/fa";

const Clients = () => {
  return (
    <div className="relative bg-[#999999] text-white py-16 px-6 lg:px-20">
      {/* Background Image */}
      {/* <img
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        width={1920}
        height={468}
        alt="Background"
        src="Group 1000002107.png"
      /> */}
      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#FF9F0D" }}>
          Our Achievements
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 font-bold">
          Discover why people love us and what makes us stand out!
        </p>
      </div>
      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-yellow-500 p-4 rounded-full mb-4">
            <FaPizzaSlice className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Varieties of Pizza</h3>
          <p className="text-4xl font-bold text-yellow-500">320</p>
        </div>
        {/* Card 2 */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-red-500 p-4 rounded-full mb-4">
            <FaDrumstickBite className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Chicken Dishes</h3>
          <p className="text-4xl font-bold text-red-500">420</p>
        </div>
        {/* Card 3 */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-blue-500 p-4 rounded-full mb-4">
            <FaIceCream className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Ice Cream Served</h3>
          <p className="text-4xl font-bold text-blue-500">220</p>
        </div>
        {/* Card 4 */}
        <div className="flex flex-col items-center bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="bg-green-500 p-4 rounded-full mb-4">
            <FaHamburger className="text-white text-4xl" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Burgers Sold</h3>
          <p className="text-4xl font-bold text-green-500">30+</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
