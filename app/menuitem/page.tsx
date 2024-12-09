import type { NextPage } from 'next';
import StarterMenu from '../components/menus';
import StarterMenus from '../components/menuend';
import Clients from '../components/client';
import StarterMenues from '../components/desert';
import DessertMenu from '../components/drinks';
import ClientsAndPartner from '../components/parthner';
const ShopList: NextPage = () => {
  return (
    <>
    <div className="w-full relative h-[410px] sm:h-[300px] md:h-[350px] lg:h-[410px] bg-[#0D0D0D] text-left text-29xl text-white font-heading-5-24">
      {/* Background image */}
      <div className="absolute inset-0 mt-4">
        <img
          src="images/menu1.png" // Replace with your image URL
          alt="Food Image"
        //   height={400}
        //   layout="fill"
        //   objectFit="cover"
        />
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16">
        <b className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[32px] font-heading-5-24 text-center">
          <span className="text-white">Food</span>
          <span className="text-[#FF9F0D]">MENU</span>
        </b>
      </div>
    </div>
    <StarterMenu/>
    <StarterMenus/>
    <Clients/>
    <StarterMenues/>
    <DessertMenu/>
    <ClientsAndPartner/>

    </>
  );
};

export default ShopList;
