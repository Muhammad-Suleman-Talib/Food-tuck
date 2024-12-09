import type { NextPage } from "next";
import { FaUserTie } from "react-icons/fa"; // Import an icon to display next to the chef's name

const chefsData = [
  { name: "Tahmina Rumi", role: "Chef", image: "images/ch11.png" },
  { name: "Kets William Roy", role: "Chef", image: "images/ch2.png" },
  { name: "Jorina Begum", role: "Chef", image: "images/ch3.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "images/ch4.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "images/ch5.png" },
  { name: "M. Mohammad", role: "Chef", image: "images/ch6.png" },
  { name: "Motin Molladsf", role: "Chef", image: "images/ch7.png" },
  { name: "Ataur Rahman", role: "Chef", image: "images/ch8.png" },
  { name: "Munna Kathy", role: "Chef", image: "images/ch9.png" },
  { name: "William Rumi", role: "Chef", image: "images/ch10.png" },
  { name: "Monalisa Holly", role: "Chef", image: "images/ch11.png" },
  { name: "Motin Molladsf", role: "Chef", image: "images/ch12.png" },
  { name: "Ataur Rahman", role: "Chef", image: "images/ch1.png" },
  { name: "Munna Kathy", role: "Chef", image: "images/ch5.png" },
  { name: "William Rumi", role: "Chef", image: "images/ch8.png" },
  { name: "Monalisa Holly", role: "Chef", image: "images/ch3.png" },
];

const Chef: NextPage = () => {
  return (
    <div className="w-full px-6 py-10 bg-[#999999]  to-gray-200">
      {/* Heading Section */}
      <div className="text-center mt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Meet Our <span className="text-[#FF9F0D]">La</span> Cuisine Experts
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-600">
          Discover the talented chefs behind our culinary creations.
        </p>
      </div>

      {/* Chefs Section */}
      <div className="grid mt-8 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {chefsData.map((chef, index) => (
          <div
            key={index}
            className="group bg-white shadow-xl rounded-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300"
          >
            {/* Image */}
            <img
              className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
              src={chef.image}
              alt={chef.name}
              style={{ objectFit: "cover" }} // Ensures consistent image cropping
            />
            {/* Content */}
            <div className="p-4 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#FF9F0D] transition-colors duration-300 flex justify-center items-center gap-2">
                <FaUserTie className="text-[#FF9F0D]" /> {chef.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
