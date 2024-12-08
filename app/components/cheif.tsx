import type { NextPage } from 'next';

const MeetOurChef: NextPage = () => {
  return (
    <div className="w-full relative bg-[#999999] py-16 text-center text-lg text-gray-800 font-inter">
      {/* Title Section */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-[#FF9F0D] leading-tight">Meet Our Chef</h2>
        <p className="text-xl text-gray-600">The culinary experts behind our creations</p>
      </div>

      {/* Chef Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        <div className="relative group">
          <img
            className="w-full h-full object-cover rounded-lg"
            width={312}
            height={391}
            alt="Chef 1"
            src="images/c2.png"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-lg">
            <b className="text-lg text-[#FF9F0D]">D. Estwood</b>
            <p className="text-sm text-gray-500">Chief Chef</p>
          </div>
        </div>

        <div className="relative group">
          <img 
            className="w-full h-full object-cover rounded-lg"
            width={312}
            height={391}
            alt="Chef 2"
            src="images/c1.png"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-lg">
            <b className="text-lg text-[#FF9F0D]">M. William</b>
            <p className="text-sm text-gray-500">Advertising Chef</p>
          </div>
        </div>

        <div className="relative group">
          <img 
            className="w-full h-full object-cover rounded-lg"
            width={312}
            height={391}
            alt="Chef 3"
            src="images/c3.png"
          />
          <div className="absolute bottom-0 left-0 w-full bg-white p-4 rounded-b-lg">
            <b className="text-lg text-[#FF9F0D]">W. Readfroad</b>
            <p className="text-sm text-gray-500">Chef</p>
          </div>
        </div>
      </div>

      {/* "See More" Button */}
      <div className="mt-12">
        <button className="bg-[#FF9F0D] text-white px-8 py-2 rounded-full text-lg transition hover:bg-[#e6890b]">
          See More
        </button>
      </div>
    </div>
  );
};

export default MeetOurChef;
