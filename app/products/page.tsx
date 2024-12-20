  
'use client'
  import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaSearch } from "react-icons/fa"; // Importing the search icon

const productsData = [
  { id: "1", title: "Pasta", price: 599, imageSrc: "/images/pro1.png" },
  { id: "2", title: "Country Burger", price: 650, imageSrc: "/images/pro2.png" },
  { id: "3", title: "Cheese Burger", price: 700, imageSrc: "/images/pro3.png" },
  { id: "4", title: "Simple Burger", price: 350, imageSrc: "/images/pro4.png" },
  { id: "5", title: "Masala Chat", price: 199, imageSrc: "/images/pine-apple.avif" },
  { id: "6", title: "Pizza with Vegetables", price: 1500, imageSrc: "/images/pro6.png" },
  { id: "7", title: "Pasta Alfredo", price: 499, imageSrc: "/images/pro7.png" },
  { id: "8", title: "Chicken Wings", price: 650, imageSrc: "/images/pro8.png" },
  { id: "9", title: "Chocolate Cake", price: 299, imageSrc: "/images/pro13.png" },
  { id: "10", title: "Lemon Juice", price: 150, imageSrc: "/images/pro10.png" },
  { id: "11", title: "Pizza with Broast", price: 1200, imageSrc: "/images/pro11.png" },
  { id: "12", title: "Chicken Burger", price: 250, imageSrc: "/images/pro12.png" },
  { id: "13", title: "Salad", price: 150, imageSrc: "/images/salad.jpeg" },
  { id: "14", title: "Juice", price: 100, imageSrc: "/images/juice.jpeg" },
  { id: "15", title: "Chicken Handi karahi", price: 1200, imageSrc: "/images/handi.jpeg" },
  { id: "16", title: "Gol Gappa", price: 350, imageSrc: "/images/gol-gappa.jpg" },
  { id: "17", title: "Fries", price: 150, imageSrc: "/images/fries.jpg" },
  { id: "18", title: "Drinks", price: 180, imageSrc: "/images/drinks.jpeg" },
  { id: "19", title: "Cup Ice-cream", price: 300, imageSrc: "/images/cup-icecream.jpeg" },
  { id: "20", title: "Chocolate Ice-cream", price: 250, imageSrc: "/images/chocolate.jpeg" },
  { id: "21", title: "Chicken Handi Biryani", price: 900, imageSrc: "/images/chicken-handi-biryani.avif" },
  { id: "22", title: "BBQ", price: 299, imageSrc: "/images/BB.avif" },
  { id: "23", title: "Karahi", price: 800, imageSrc: "/images/karahi.jpg" },
  { id: "24", title: "Bahari-Roll", price: 180, imageSrc: "/images/bahari-roll.jpg" },
  { id: "25", title: "Broast", price: 360, imageSrc: "/images/broast-ori.webp" },
  { id: "26", title: "Beef Burger", price: 899, imageSrc: "/images/beef-bur.jpeg" },
  { id: "27", title: "Garlic Pizza", price: 1200, imageSrc: "/images/garlic.avif" },
  { id: "28", title: "Koila-Karahi", price: 1350, imageSrc: "/images/koila-karahi.jpeg" },
  { id: "29", title: "Malai-Tikka", price: 350, imageSrc: "/images/Malai-tikka.avif" },
  { id: "30", title: "Roll", price: 200, imageSrc: "/images/marphil.avif" },
  { id: "31", title: "Pullao", price: 350, imageSrc: "/images/pulao.avif" },
  { id: "32", title: "Tikka", price: 250, imageSrc: "/images/Tikka.avif" },
];



const ShopPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("Newest");
  const [products, setProducts] = useState(productsData);

  // Handle Search
  const handleSearch = (query:any) => {
    setSearchQuery(query);
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  // Handle Sort
  const handleSort = (option:any) => {
    setSortOption(option);
    let sortedProducts = [...products];

    switch (option) {
      case "Newest":
        sortedProducts = productsData; // Original order
        break;
      case "Oldest":
        sortedProducts = [...productsData].reverse();
        break;
      case "Price: Low to High":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="container min-w-full mx-auto p-6 bg-[#8f8d8d]">
      {/* Heading Section */}
      <div className="text-center mt-16">
        <h1 className="text-5xl font-extrabold text-gray-800">
          <span className="text-[#FF9F0D]">Welcome to Our</span> Shop
        </h1>
        <p className="text-xl text-gray-600 mt-5">
          Browse our latest products and find your favorites!
        </p>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
        {/* Search */}
        <div className="relative mb-4 md:mb-0">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="border border-gray-300 rounded-md pl-10 pr-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-xl text-gray-700">Sort By:</span>
          <select
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={product.id} passHref>
            <div className="relative bg-[#F7F7F7] rounded-lg shadow-lg overflow-hidden group cursor-pointer transition-transform transform hover:scale-105">
              <img
                className="h-[200px] w-full object-cover"
                src={product.imageSrc}
                alt={product.title}
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xl font-semibold text-yellow-500">
                      Rs {product.price.toFixed(2)}
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

export default ShopPage;
