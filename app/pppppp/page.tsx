import type { NextPage } from 'next';
import { FaSortAmountDownAlt, FaFilter, FaTags, FaRupeeSign, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa"; // Importing icons

// ProductCard Component
const ProductCard = ({ title, price, originalPrice, imageSrc }: any) => (
  <div className="relative w-full  bg-white rounded-lg shadow-lg overflow-hidden group">
    <img className="h-[200px] w-full object-cover group-hover:scale-105 transition-transform" width={312} height={267} alt={title} src={imageSrc} />
    <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black via-transparent to-transparent w-full">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <div className="text-base text-primary-color">
        <span className="text-xl font-semibold text-yellow-500">{price}</span>
        {originalPrice && <span className="line-through text-gray-400 ml-2">{originalPrice}</span>}
      </div>
      {/* Icons for Actions */}
      <div className="absolute top-2 right-2 flex gap-3">
        <FaHeart className="text-xl text-white hover:text-red-500 cursor-pointer transition-all" />
        <FaShoppingCart className="text-xl text-white hover:text-green-500 cursor-pointer transition-all" />
        <FaStar className="text-xl text-white hover:text-yellow-500 cursor-pointer transition-all" />
      </div>
    </div>
  </div>
);

// Shop Component
const Shop: NextPage = () => {
  return (
    <div className="container mx-auto p-4 bg-[#8f8d8d] min-w-full ">
      {/* Heading Section */}
      <div className="text-center mt-2">
      <div className="text-center mt-16">
  <h1 className="text-5xl font-extrabold ">
    <span className="text-[#FF9F0D] ">Welcome to Our</span> Shop
  </h1>
  <p className="text-xl text-gray-700 mt-5">Browse our latest products and find your favorites!</p>
</div>

</div>

{/* Filter Section */}
<div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
  {/* Sort By Section */}
  <div className="flex items-center gap-2 mb-4 md:mb-0">
    <FaSortAmountDownAlt className="text-xl text-primary-color" />
    <label className="mr-2 text-xl">Sort By:</label>
    <select className="border border-gray-300 rounded-md p-2 text-gray-700">
      <option>Newest</option>
      <option>Oldest</option>
    </select>
  </div>

  {/* Show Section */}
  <div className="flex items-center gap-2 mb-4 md:mb-0">
    <FaFilter className="text-xl text-primary-color" />
    <label className="mr-2 text-xl">Show:</label>
    <select className="border border-gray-300 rounded-md p-2 text-gray-700">
      <option>Default</option>
      <option >Price: Low to High</option>
      <option>Price: High to Low</option>
    </select>
  </div>
</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard title="Fresh Lime" price="$38.00" originalPrice="$45.00" imageSrc="/images/pro1.png" />
        <ProductCard title="Country Burger" price="$45.00" imageSrc="/images/pro2.png" />
        <ProductCard title="Cheese Butter" price="$10.00" imageSrc="/images/pro3.png" />
        <ProductCard title="Chocolate Muffin" price="$28.00" imageSrc="/images/pro4.png" />
        <ProductCard title="Drink" price="$23.00" originalPrice="$45.00" imageSrc="/images/pro11.png" />
        <ProductCard title="Sandwiches" price="$25.00" imageSrc="/images/pro11.png" />
        <ProductCard title="Pizza" price="$43.00" imageSrc="/images/pro12.png" />
        <ProductCard title="Chicken Chup" price="$12.00" imageSrc="/images/pro10.png" />
        <ProductCard title="Drink" price="$23.00" originalPrice="$45.00" imageSrc="/images/pro5.png" />
        <ProductCard title="Sandwiches" price="$25.00" imageSrc="/images/pro6.png" />
        <ProductCard title="Pizza" price="$43.00" imageSrc="/images/pro7.png" />
        <ProductCard title="Chicken Chup" price="$12.00" imageSrc="/images/pro8.png" />
        <ProductCard title="Sandwiches" price="$25.00" imageSrc="/images/pro11.png" />
        <ProductCard title="Pizza" price="$43.00" imageSrc="/images/pro12.png" />
        <ProductCard title="Chicken Chup" price="$12.00" imageSrc="/images/pro10.png" />
        <ProductCard title="Drink" price="$23.00" originalPrice="$45.00" imageSrc="/images/pro5.png" />
      </div>

      {/* Price Filter */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Filter By Price</h2>
        <div className="flex items-center gap-4 mb-4">
          <input type="text" placeholder="From" className="border border-gray-300 rounded-md p-2 text-gray-700" />
          <input type="text" placeholder="To" className="border border-gray-300 rounded-md p-2 text-gray-700" />
          <button className="bg-primary-color text-white rounded-md p-2 flex items-center gap-2">
            <FaTags /> Filter
          </button>
        </div>
      </div>

      {/* Latest Products Section */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Latest Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <ProductCard title="Pizza" price="$35.00" imageSrc="/images/pro11.png" />
          <ProductCard title="Cupcake" price="$35.00" imageSrc="/images/pro12.png" />
          <ProductCard title="Cookies" price="$35.00" imageSrc="/images/pro6.png" />
          <ProductCard title="Burger" price="$35.00" imageSrc="/images/pro11.png" />
          <ProductCard title="Fresh Lime" price="$38.00" originalPrice="$45.00" imageSrc="/images/pro1.png" />
        <ProductCard title="Country Burger" price="$45.00" imageSrc="/images/pro2.png" />
        <ProductCard title="Cheese Butter" price="$10.00" imageSrc="/images/pro3.png" />
        <ProductCard title="Chocolate Muffin" price="$28.00" imageSrc="/images/pro4.png" />
          
        </div>
      </div>
    </div>
  );
};

export default Shop;
