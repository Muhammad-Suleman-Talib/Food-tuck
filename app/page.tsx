import { FaSearch, FaShoppingCart } from 'react-icons/fa'; // Importing React Icons
import AboutUs from './components/about'
import FoodCategory from './components/category'
import WhyChooseUs from './components/wychose';
import Clients from './components/client';
import OurMenu from './components/menu';
import MeetOurChef from './components/cheif';
import Testimonials from './components/testimonial';
import RestraindCreativeProcess from './components/creative';
import Blog from './components/blog';
import Footer from './components/footer';
import Topnewsletter from './components/footer';
import Smile from './components/category';
import Footera from './components/footer';
const HeaderHero = () => {
  return (
    <>
  <div className="relative w-full min-h-[690px] text-white font-inter">
      {/* Background Section */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Background Image"
          src="unsplash:qom5MPOER-I.png"
        /> */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="absolute top-[20%] md:top-[27%] left-0 w-full flex flex-col md:flex-row items-center px-6 md:px-12 gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#FF9F0D]">The Art of Speed</span>
            <br />
            Food Quality
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#FF9F0D] text-white rounded-full py-2 px-6 text-lg font-semibold hover:bg-[#ff7c00] transition duration-300">
              See Menu
            </button>
            <p className="text-sm sm:text-lg">Quick & Amusing!</p>
          </div>
        </div>

        {/* Hero Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] rounded-full overflow-hidden border-8 border-[#FF9F0D] shadow-lg">
            <img
              className="absolute top-0 left-0 w-full h-full object-cover"
              alt="Hero Image"
              src="/images/img.png"
            />
            <div className="absolute inset-0 w-[90%] h-[90%] m-auto rounded-full overflow-hidden">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                alt="Leaf Overlay"
                src="images/res.png"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full h-[70px] md:h-[87px] flex justify-between items-center px-6 md:px-12 bg-transparent">
        <div className="flex gap-4 sm:gap-8 text-sm md:text-lg font-semibold">
          <div>Menu</div>
          <div>Blog</div>
          <div>Pages</div>
          <div>About</div>
          <div>Shop</div>
          <div>Contact</div>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-white">
            <FaSearch size={20} />
          </div>
          <div className="text-white">
            <FaShoppingCart size={20} />
          </div>
        </div>
      </div>

      {/* Logo */}
      <div className="absolute top-4 left-[50%] transform -translate-x-1/2 text-3xl sm:text-4xl md:text-5xl font-semibold text-[#FF9F0D]">
        Food<span className="text-white">tuck</span>
      </div>

      {/* Indicator */}
      <div className="absolute bottom-6 left-[5%] w-[15px] h-[15px] rounded-full bg-[#FF9F0D]"></div>
    </div>
    <AboutUs/>
    <FoodCategory/>
    <WhyChooseUs/>
    <Clients/>
    <OurMenu/>
    <MeetOurChef/>
    <Testimonials/>
    <RestraindCreativeProcess/>
    <Blog/>
    <Footera/>
    </>
  );
};

export default HeaderHero;