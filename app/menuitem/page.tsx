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
    <div className="w-full relative h-[410px] sm:h-[250px] md:h-[250px] lg:h-[310px] bg-[#0D0D0D] text-left text-29xl text-white font-heading-5-24">
  {/* Background image using Tailwind */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('images/menu1.png')" }} // Replace with your image path
  >
    {/* This ensures the image is displayed properly */}
  </div>

  {/* Overlay text */}
  <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 bg-black bg-opacity-50">
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
