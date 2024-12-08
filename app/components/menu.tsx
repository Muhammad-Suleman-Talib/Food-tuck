const OurMenu = () => {
  return (
    <div className="w-full relative py-16 text-center text-lg text-white font-inter bg-[#999999]">
      {/* Section Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-primary-color mb-2">
          <span className="text-[#FF9F0D]">From</span> Our Menu
        </h2>
        <p className="text-xl text-primary-color">
          <span className="text-[#FF9F0D]">Choose</span> & <span className="text-[#FF9F0D]">Pick</span>
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-8 mb-16 text-xl text-primary-color">
        {categories.map((category, index) => (
          <button
            key={index}
            className="hover:text-[#FF9F0D] transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-16">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-[#FF9F0D] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              width={80}
              height={80}
              className="rounded-md object-cover"
            />
            <div className="text-left">
              <h3 className="text-xl font-bold text-primary-color">
                <span className="text-[#FF9F0D]">{item.name}</span>
              </h3>
              <p className="text-sm text-[#979292]">{item.description}</p>
              <span className="block mt-2 text-lg font-semibold text-primary-color">
                <span className="text-[#FF9F0D]">{item.price}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Categories
const categories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Drink',
  'Snack',
  'Soups',
];

// Sample Menu Items
const menuItems = [
  {
    name: 'Lettuce Leaf',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$12.5',
    image: '/images/m1.png',
  },
  {
    name: 'Mild Butter',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$12.5',
    image: '/images/m2.png',
  },
  {
    name: 'Fresh Bread',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$12.5',
    image: '/images/m3.png',
  },
  {
    name: 'Fresh Breakfast',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$14.5',
    image: '/images/m7.png',
  },
  {
    name: 'Glow Cheese',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$12.5',
    image: '/images/m4.png',
  },
  {
    name: 'Slice Beef',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$12.5',
    image: '/images/m5.png',
  },
  {
    name: 'Mushroom Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$12.5',
    image: '/images/m6.png',
  },
  {
    name: 'Italian Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$14.5',
    image: '/images/m7.png',
  },
  {
    name: 'Italian Pizza',
    description: 'Lacus nisi, et ac dapibus velit in consequat.',
    price: '$14.5',
    image: '/images/m8.png',
  },
];

export default OurMenu;
