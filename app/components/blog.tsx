import type { NextPage } from 'next';
import Image from 'next/image';
import { FaRegComment, FaShareAlt, FaThumbsUp } from 'react-icons/fa';

const Blog: NextPage = () => {
  return (
    <div className="w-full h-[550px]  relative bg-[#999999] text-left text-base font-inter">
      {/* Main Title */}
      <div className="absolute top-[10px] left-[50%] transform -translate-x-1/2 text-4xl font-bold text-primary-color text-center">
        <span className="text-[#FF9F0D]">La</span>
        <span className="text-white ">test News & Blog</span>
      </div>

      {/* Blog Section Title */}
      <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 text-[32px] font-great-vibes text-primary-color text-center">
        <span className="text-[#FF9F0D]">Blog </span>Post
      </div>

      {/* Blog Post Cards in One Line */}
      <div className="flex justify-between gap-8 absolute top-[160px] left-[50%] transform -translate-x-1/2 w-full px-4">
        <div className="w-1/3 relative bg-white border border-white shadow-lg rounded-lg overflow-hidden">
          {/* Image for the First Post */}
          <div className="relative w-full h-[349px]">
            <Image
              className="object-cover w-full h-full"
              src="/images/bl1.png" // Use the correct path for your image
              alt="Blog Post 1"
              width={423}
              height={349}
            />
          </div>

          {/* Blog Content for First Post */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="text-[#FF9F0D] text-xs">10 February 2022</div>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
            </h3>
            <p className="text-white text-sm mb-4">Learn More</p>

            {/* Social Icons using React Icons */}
            <div className="absolute bottom-4 left-4 flex gap-4">
              <FaRegComment className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
              <FaShareAlt className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
              <FaThumbsUp className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        <div className="w-1/3 relative bg-white border border-white shadow-lg rounded-lg overflow-hidden">
          {/* Image for the Second Post */}
          <div className="relative w-full h-[349px]">
            <Image
              className="object-cover w-full h-full"
              src="/images/bl2.png" // Use the correct path for your image
              alt="Blog Post 2"
              width={423}
              height={349}
            />
          </div>

          {/* Blog Content for Second Post */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="text-[#FF9F0D] text-xs">15 February 2022</div>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              Curabitur rutrum velit ac congue malesuada
            </h3>
            <p className="text-white text-sm mb-4">Learn More</p>

            {/* Social Icons using React Icons */}
            <div className="absolute bottom-4 left-4 flex gap-4">
              <FaRegComment className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
              <FaShareAlt className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
              <FaThumbsUp className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        <div className="w-1/3 relative bg-white border border-white shadow-lg rounded-lg overflow-hidden">
          {/* Image for the Third Post */}
          <div className="relative w-full h-[349px]">
            <Image
              className="object-cover w-full h-full"
              src="/images/bl3.png" // Use the correct path for your image
              alt="Blog Post 3"
              width={423}
              height={349}
            />
          </div>

          {/* Blog Content for Third Post */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between bg-gradient-to-t from-black via-transparent to-transparent">
            <div className="text-[#FF9F0D] text-xs">20 February 2022</div>
            <h3 className="text-2xl font-bold text-white mt-2 mb-4">
              Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
            </h3>
            <p className="text-white text-sm mb-4">Learn More</p>

            {/* Social Icons using React Icons */}
            <div className="absolute bottom-4 left-4 flex gap-4">
              <FaRegComment className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
              <FaShareAlt className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
              <FaThumbsUp className="text-[#FF9F0D] text-xl cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
