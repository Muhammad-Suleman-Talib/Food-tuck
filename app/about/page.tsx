import type { NextPage } from 'next';
import { FaPlay } from 'react-icons/fa';
import WhyChooseUse from '../components/aboutchose';
import TeamMember from '../components/social';

const AboutUs: NextPage = () => {
  return (
    <>
    <div className="w-full relative h-auto text-left text-base bg-[#878484] font-sans p-4 flex flex-col-reverse md:flex-row md:items-center md:space-x-8">
      {/* Images Section */}
      <div className="relative mt-8 w-full md:w-1/2 order-1 md:order-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            className="rounded-md object-cover w-full"
            width={336}
            height={336}
            alt="Healthy Food"
            src="/images/ab1.png"
          />
          <div className="flex flex-col space-y-4">
            <img
              className="rounded-md object-cover"
              width={309}
              height={271}
              alt="Balanced Meal"
              src="/images/ab2.png"
            />
            <img
              className="rounded-md object-cover"
              width={309}
              height={382}
              alt="Fresh Ingredients"
              src="/images/ab3.png"
            />
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="mt-8 md:mt-0 md:w-1/2 order-2 md:order-2">
        <div className="text-primary-color text-lg font-miniver flex items-center">
          <span>About us</span>
          <div className="ml-4 bg-primary-color w-8 h-[2px]" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-800 mt-4 leading-snug">
          <span className="text-primary-color">Good Food</span> is the{" "}
          <span className="text-yellow-500">Foundation</span> of a{" "}
          <span className="text-primary-color">Healthy Life</span>
        </h2>
        <p className="text-black-500 mt-4 leading-relaxed">
          Eating well is not just about survival; it's about nourishing your
          body and soul. Discover the joys of balanced meals with ingredients
          that fuel your health and happiness. Let's make healthy living a
          habit!
        </p>

        <div className="flex items-center space-x-4 mt-6">
          <button className="bg-primary-color text-white py-3 px-6 rounded-md font-bold hover:bg-primary-hover">
            Show more
          </button>
          <div className="flex items-center cursor-pointer">
            {/* Video Icon Section */}
            <div className="relative flex items-center justify-center w-16 h-16 bg-primary-color rounded-full">
              <FaPlay className="text-white text-2xl" />
            </div>
            <span className="font-bold text-gray-800 ml-2">Watch video</span>
          </div>
        </div>
      </div>
    </div>
    <WhyChooseUse/>
    <TeamMember/>
    </>
  );
};

export default AboutUs;
