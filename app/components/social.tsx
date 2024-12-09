import type { NextPage } from "next";
import { FaFacebookF, FaTwitter, FaYoutube, FaPinterest } from "react-icons/fa";

const TeamMember: NextPage = () => {
  return (
    <div className="w-full bg-[#878484]  py-16">
      {/* Hero Section */}
      <div className="relative w-full h-[460px] bg-yellow-100">
        {/* <img
          src="/unsplash:OzBLe_Eg1mg.png"
          alt="Team Background"
          className="object-cover w-full h-full"
        /> */}
        <div className="absolute inset-0 bg-yellow-100/70 z-10 flex flex-col items-center justify-center text-center text-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-600">Team Member</h1>
          <p className="mt-4 max-w-lg text-base text-yellow-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
        </div>
      </div>

      {/* Team Cards Section */}
      <div className="container bg-[#878484]  mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Team Member Card */}
        {[
          { name: "Mark Henry", role: "Owner", img: "/images/ch2.png" },
          { name: "Lucky Helen", role: "Chef", img: "images/ch5.png" },
          { name: "Moon Henry", role: "Founder", img: "/images/ch8.png" },
          { name: "Tom Monrow", role: "Specialist", img: "/images/ch9.png" },
        ].map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl duration-300"
          >
            <div className="relative">
              <img
                src={member.img}
                alt={member.name}
                width={312}
                height={398}
                className="object-cover w-full h-56 rounded-t-lg"
              />
              {/* Profile Image Placeholder */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent p-4">
                <img
                  src={member.img}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-white mx-auto object-cover"
                />
              </div>
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>

              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mt-4 text-orange-500">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="hover:text-orange-700 transition-colors cursor-pointer" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="hover:text-orange-700 transition-colors cursor-pointer" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="hover:text-orange-700 transition-colors cursor-pointer" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaPinterest className="hover:text-orange-700 transition-colors cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
