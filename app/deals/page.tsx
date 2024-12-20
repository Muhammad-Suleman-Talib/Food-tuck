'use client';

import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const dealsData = [
    { id: "d1", title: "One Person Deal", price: 399, description: "1 Burger + Fries + Drink", imageSrc: "/images/deal1.jpg", category: "One Person" },
    { id: "d2", title: "Two Person Deal", price: 799, description: "2 Burgers + Fries + 2 Drinks", imageSrc: "/images/deal2.webp", category: "Two Persons" },
    { id: "d3", title: "Three Person Deal", price: 1199, description: "3 Burgers + Fries + 3 Drinks", imageSrc: "/images/deal3.jpg", category: "Three Persons" },
    { id: "d4", title: "Family Deal", price: 1999, description: "4 Burgers + Large Fries + 4 Drinks + Dessert", imageSrc: "/images/deal4.webp", category: "Family" },
    { id: "d5", title: "Snack Lover Deal", price: 499, description: "1 Pizza Slice + Fries + Drink", imageSrc: "/images/deal5.jpeg", category: "One Person" },
    { id: "d6", title: "Pizza Combo Deal", price: 1599, description: "1 Large Pizza + 2 Drinks + Garlic Bread", imageSrc: "/images/deal6.jpg", category: "Two Persons" },
    { id: "d7", title: "Mega Burger Feast", price: 2499, description: "5 Burgers + Large Fries + 5 Drinks", imageSrc: "/images/deal7.jpg", category: "Family" },
    { id: "d8", title: "Cheesy Delight", price: 899, description: "Cheese Pizza + Fries + Soft Drink", imageSrc: "/images/deal8.jpg", category: "Two Persons" },
    { id: "d9", title: "Student Special", price: 349, description: "1 Sandwich + Fries + Drink", imageSrc: "/images/deal9.avif", category: "One Person" },
    { id: "d10", title: "Brunch Deal", price: 999, description: "2 Waffles + 2 Coffees + Juice", imageSrc: "/images/deal10.webp", category: "Two Persons" },
    { id: "d11", title: "Couple's Delight", price: 1799, description: "2 Pizzas + 2 Desserts + Drinks", imageSrc: "/images/deal11.webp", category: "Two Persons" },
    { id: "d12", title: "Ultimate Party Pack", price: 2999, description: "2 Large Pizzas + 4 Drinks + Dessert", imageSrc: "/images/deal12.webp", category: "Family" },
    { id: "d13", title: "Breakfast Combo", price: 399, description: "Omelette + Toast + Coffee", imageSrc: "/images/deal13.webp", category: "One Person" },
    { id: "d14", title: "Grill Special", price: 1599, description: "2 Grilled Sandwiches + Fries + Drinks", imageSrc: "/images/deal14.webp", category: "Two Persons" },
    { id: "d15", title: "Kids' Special", price: 699, description: "1 Kids Pizza + Fries + Milkshake", imageSrc: "/images/deal15.jpeg", category: "One Person" },
    { id: "d16", title: "Seafood Feast", price: 2199, description: "Fish + Prawns + Fries + Drink", imageSrc: "/images/deal16.jpeg", category: "Three Persons" },
    { id: "d17", title: "Hot & Spicy", price: 499, description: "Spicy Wings + Fries + Drink", imageSrc: "/images/deal17.jpeg", category: "One Person" },
    { id: "d18", title: "Sweet Tooth Deal", price: 999, description: "2 Ice Creams + 2 Brownies + Drinks", imageSrc: "/images/deal18.webp", category: "Two Persons" },
    { id: "d19", title: "Desi Delight", price: 1299, description: "Biryani + Seekh Kebab + Drink", imageSrc: "/images/deal19.jpeg", category: "Two Persons" },
    { id: "d20", title: "Midnight Snack", price: 599, description: "1 Burger + Fries + Drink", imageSrc: "/images/deal20.jpeg", category: "One Person" },
    { id: "d21", title: "Classic Combo", price: 1899, description: "3 Burgers + Fries + Drinks", imageSrc: "/images/deal21.jpg", category: "Three Persons" },
    { id: "d22", title: "Health Booster", price: 899, description: "Grilled Chicken Salad + Juice", imageSrc: "/images/deal22.jpg", category: "One Person" },
    { id: "d23", title: "Movie Night Pack", price: 2499, description: "2 Pizzas + Popcorn + Drinks", imageSrc: "/images/deal23.jpg", category: "Family" },
    { id: "d24", title: "Steak Night Deal", price: 2999, description: "2 Steaks + Fries + Drinks", imageSrc: "/images/deal24.jpeg", category: "Two Persons" },
    { id: "d25", title: "Mini Party Deal", price: 3999, description: "3 Large Pizzas + 6 Drinks + Garlic Bread", imageSrc: "/images/deal25.jpeg", category: "Family" },
    { id: "d26", title: "Gourmet Special", price: 499, description: "Gourmet Sandwich + Chips + Drink", imageSrc: "/images/deal26.avif", category: "One Person" },
    { id: "d27", title: "Lunch Saver", price: 1099, description: "Biryani + Chicken Curry + Drinks", imageSrc: "/images/deal27.jpeg", category: "Two Persons" },
    { id: "d28", title: "Evening Delight", price: 1599, description: "Tea + Samosas + Fries + Cake", imageSrc: "/images/deal28.webp", category: "Three Persons" },
    { id: "d29", title: "Birthday Bash", price: 4999, description: "Cake + Pizzas + Snacks + Drinks", imageSrc: "/images/deal29.jpeg", category: "Family" },
    { id: "d30", title: "Weekend Feast", price: 5999, description: "4 Pizzas + Garlic Bread + Drinks + Dessert", imageSrc: "/images/deal30.jpeg", category: "Family" },
];

const DealsPage = () => {
  const [deals, setDeals] = useState(dealsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryChange = (category:any) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const filteredDeals = deals.filter((deal) => {
    const matchesCategory = selectedCategory === "All" || deal.category === selectedCategory;
    const matchesSearch = deal.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = ["All", ...new Set(deals.map((deal) => deal.category))];

  return (
    <div className="container min-w-full mx-auto p-6 bg-[#8f8d8d]">
      <div className="text-center mt-16">
        <h1 className="text-5xl font-extrabold text-gray-800">
          <span className="text-[#FF9F0D]">Amazing Deals</span> for You!
        </h1>
        <p className="text-xl text-gray-600 mt-5">
          Choose the best deal that suits your needs!
        </p>
      </div>

      <div className="flex justify-between items-center mt-8">
        <select
          className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-yellow-500"
          onChange={(e) => handleCategoryChange(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <div className="relative">
          <input
            type="text"
            placeholder="Search deals..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:ring-yellow-500"
          />
          <FaSearch className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {filteredDeals.map((deal) => (
          <Link href={`/deals/${deal.id}`} key={deal.id} passHref>
            <div className="relative bg-[#F7F7F7] rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
              <img
                className="h-[200px] w-full object-cover"
                src={deal.imageSrc}
                alt={deal.title}
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {deal.title}
                  </h3>
                  <p className="text-sm text-gray-600">{deal.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-semibold text-yellow-500">
                      Rs {deal.price.toFixed(2)}
                    </span>
                    <button className="flex items-center gap-2 bg-[#8f8d8d] text-white rounded-md p-2 hover:bg-[#6d6b6b] transition-all focus:outline-none">
                      <FaShoppingCart className="text-lg" />
                      <span className="text-sm font-semibold">Add to Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
