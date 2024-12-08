import { FaPlay } from 'react-icons/fa';

const RestraindCreativeProcess = () => {
  return (
    <div className="w-full relative px-6 md:px-16 lg:px-20 h-[358px] text-left text-base font-inter bg-gray-100">
      {/* Background Section */}
      <div className="absolute inset-0">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          width={1918}
          height={558}
          alt="Background"
          src="images/cre1.png"
        />
      </div>

      {/* Content Section */}
      <div className="absolute inset-0 flex flex-col justify-center items-end    px-6 md:px-10 lg:px-32">
        {/* Title */}
        <div className="text-[24px] md:text-[32px] leading-[32px] md:leading-[40px] font-great-vibes text-primary-color mb-4">
          <span className="text-[#FF9F0D]">Restaurant Active Process</span>
        </div>
        
        {/* Headline */}
        <div className="text-3xl md:text-4xl font-bold text-left text-white leading-[48px] md:leading-[56px] mb-6">
          <p>
            <span className="text-[#FF9F0D]">We</span> Document Every Food
          </p>
          <p>Bean Process until it is saved</p>
        </div>
        
        {/* Description */}
        <div className="text-white text-base md:text-lg leading-[20px] md:leading-[24px] text-left mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pell.
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          {/* Read More Button */}
          <div className="rounded-full border border-[#FF9F0D] px-6 py-2 text-white text-sm font-bold hover:bg-[#FF9F0D] hover:text-black transition-all cursor-pointer">
            Read More
          </div>
          
          {/* Play Video Button with React Icon */}
          <div className="flex items-center gap-2 text-white text-sm font-bold cursor-pointer">
            <FaPlay size={20} className="w-5 h-5" />
            <span>Play Video</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestraindCreativeProcess;
