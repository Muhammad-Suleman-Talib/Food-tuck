
const FoodCategory = () => {
  return (
    <div className="relative w-full text-primary-color font-inter bg-[#737171] px-20 py-12">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span style={{color:'#FF9F0D'}}>Cho</span>
          <span className="text-white">ose Food Item</span>
        </h2>
        <p className="text-lg md:text-xl text-[#FF9F0D] font-great-vibes">
          Food Category
        </p>
      </div>

      {/* Food Category Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Food Card 1 */}
        <div className="relative group">
          <img
            className="rounded-md w-full h-[250px] md:h-[329px] object-cover"
            width={306}
            height={329}
            alt="Fast Food Dish"
            src="images/1.png"
          />
          <div className="absolute top-4 left-4 bg-white rounded-md text-primary-color text-sm font-semibold px-3 py-1 shadow-md">
            Save 30%
          </div>
          <div className="absolute bottom-4 left-4 bg-[#FF9F0D] rounded-md text-white px-4 py-2 text-sm font-semibold">
            Fast Food Dish
          </div>
        </div>

        {/* Food Card 2 */}
        <div className="relative group">
          <img
            className="rounded-md w-full h-[250px] md:h-[329px] object-cover"
            width={306}
            height={329}
            alt="Dessert"
            src="images/2.png"
          />
          <div className="absolute bottom-4 left-4 bg-[#FF9F0D] rounded-md text-white px-4 py-2 text-sm font-semibold">
            Sweet Desserts
          </div>
        </div>

        {/* Food Card 3 */}
        <div className="relative group">
          <img
            className="rounded-md w-full h-[250px] md:h-[329px] object-cover"
            width={306}
            height={329}
            alt="Healthy Dish"
            src="images/3.png"
          />
          <div className="absolute bottom-4 left-4 bg-[#FF9F0D] rounded-md text-white px-4 py-2 text-sm font-semibold">
            Healthy Food
          </div>
        </div>

        {/* Food Card 4 */}
        <div className="relative group">
          <img
            className="rounded-md w-full h-[250px] md:h-[329px] object-cover"
            width={306}
            height={329}
            alt="Beverages"
            src="images/4.png"
          />
          <div className="absolute bottom-4 left-4 bg-[#FF9F0D] rounded-md text-white px-4 py-2 text-sm font-semibold">
            Refreshing Drinks
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
