'use client';

import { useState, useEffect } from "react";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import Link from "next/link";
import { use } from "react"; // Import use from React

// Types for props and product items
type PageProps = {
  params: Promise<{ id: string }>;
};

type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  flavors: string[];
  sizes: string[];
  category: string; // Added category field
};

type CartItem = {
  id: string;
  title: string;
  price: string;
  imageSrc: string;
  flavor: string;
  size: string;
  quantity: number;
};

// Sample products (replace this with your actual product data source)
const products:Product[] = [
    { 
      id: "d1", 
      title: "One Person Deal", 
      price: "399", 
      description: "1 Burger + Fries + Drink", 
      imageSrc: "/images/deal1.jpg", 
      category: "One Person", 
      flavors: ["Classic", "Cheese", "Spicy"], 
      sizes: ["Small"] 
    },
    { 
      id: "d2", 
      title: "Two Person Deal", 
      price: "799", 
      description: "2 Burgers + Fries + 2 Drinks", 
      imageSrc: "/images/deal2.webp", 
      category: "Two Persons", 
      flavors: ["BBQ", "Cheese", "Spicy"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d3", 
      title: "Three Person Deal", 
      price: "1199", 
      description: "3 Burgers + Fries + 3 Drinks", 
      imageSrc: "/images/deal3.jpg", 
      category: "Three Persons", 
      flavors: ["Classic", "Cheese", "BBQ"], 
      sizes: ["Large"] 
    },
    { 
      id: "d4", 
      title: "Family Deal", 
      price: "1999", 
      description: "4 Burgers + Large Fries + 4 Drinks + Dessert", 
      imageSrc: "/images/deal4.webp", 
      category: "Family", 
      flavors: ["Classic", "Cheese", "BBQ"], 
      sizes: ["Large"] 
    },
    { 
      id: "d5", 
      title: "Snack Lover Deal", 
      price: "499", 
      description: "1 Pizza Slice + Fries + Drink", 
      imageSrc: "/images/deal5.jpeg", 
      category: "One Person", 
      flavors: ["Cheese", "Pepperoni", "Veggie"], 
      sizes: ["Small"] 
    },
    { 
      id: "d6", 
      title: "Pizza Combo Deal", 
      price: "1599", 
      description: "1 Large Pizza + 2 Drinks + Garlic Bread", 
      imageSrc: "/images/deal6.jpg", 
      category: "Two Persons", 
      flavors: ["Cheese", "Pepperoni", "BBQ Chicken"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d7", 
      title: "Mega Burger Feast", 
      price: "2499", 
      description: "5 Burgers + Large Fries + 5 Drinks", 
      imageSrc: "/images/deal7.jpg", 
      category: "Family", 
      flavors: ["Classic", "BBQ", "Cheese"], 
      sizes: ["Large"] 
    },
    { 
      id: "d8", 
      title: "Cheesy Delight", 
      price: "899", 
      description: "Cheese Pizza + Fries + Soft Drink", 
      imageSrc: "/images/deal8.jpg", 
      category: "Two Persons", 
      flavors: ["Cheese", "Pepperoni", "Veggie"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d9", 
      title: "Student Special", 
      price: "349", 
      description: "1 Sandwich + Fries + Drink", 
      imageSrc: "/images/deal9.avif", 
      category: "One Person", 
      flavors: ["Classic", "Chicken", "Veggie"], 
      sizes: ["Small"] 
    },
    { 
      id: "d10", 
      title: "Brunch Deal", 
      price: "999", 
      description: "2 Waffles + 2 Coffees + Juice", 
      imageSrc: "/images/deal10.webp", 
      category: "Two Persons", 
      flavors: ["Vanilla", "Chocolate", "Cinnamon"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d11", 
      title: "Couple's Delight", 
      price: "1799", 
      description: "2 Pizzas + 2 Desserts + Drinks", 
      imageSrc: "/images/deal11.webp", 
      category: "Two Persons", 
      flavors: ["Cheese", "Pepperoni", "Veggie"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d12", 
      title: "Ultimate Party Pack", 
      price: "2999", 
      description: "2 Large Pizzas + 4 Drinks + Dessert", 
      imageSrc: "/images/deal12.webp", 
      category: "Family", 
      flavors: ["Cheese", "BBQ", "Veggie"], 
      sizes: ["Large"] 
    },
    { 
      id: "d13", 
      title: "Breakfast Combo", 
      price: "399", 
      description: "Omelette + Toast + Coffee", 
      imageSrc: "/images/deal13.webp", 
      category: "One Person", 
      flavors: ["Classic", "Cheese", "Veggie"], 
      sizes: ["Small"] 
    },
    { 
      id: "d14", 
      title: "Grill Special", 
      price: "1599", 
      description: "2 Grilled Sandwiches + Fries + Drinks", 
      imageSrc: "/images/deal14.webp", 
      category: "Two Persons", 
      flavors: ["Classic", "Cheese", "BBQ"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d15", 
      title: "Kids' Special", 
      price: "699", 
      description: "1 Kids Pizza + Fries + Milkshake", 
      imageSrc: "/images/deal15.jpeg", 
      category: "One Person", 
      flavors: ["Cheese", "Pepperoni"], 
      sizes: ["Small"] 
    },
    { 
      id: "d16", 
      title: "Seafood Feast", 
      price: "2199", 
      description: "Fish + Prawns + Fries + Drink", 
      imageSrc: "/images/deal16.jpeg", 
      category: "Three Persons", 
      flavors: ["Garlic", "Spicy", "Lemon"], 
      sizes: ["Large"] 
    },
    { 
      id: "d17", 
      title: "Hot & Spicy", 
      price: "499", 
      description: "Spicy Wings + Fries + Drink", 
      imageSrc: "/images/deal17.jpeg", 
      category: "One Person", 
      flavors: ["Hot", "Spicy", "Mild"], 
      sizes: ["Small"] 
    },
    { 
      id: "d18", 
      title: "Sweet Tooth Deal", 
      price: "999", 
      description: "2 Ice Creams + 2 Brownies + Drinks", 
      imageSrc: "/images/deal18.jpeg", 
      category: "Two Persons", 
      flavors: ["Chocolate", "Vanilla", "Strawberry"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d19", 
      title: "Desi Delight", 
      price: "1299", 
      description: "Biryani + Seekh Kebab + Drink", 
      imageSrc: "/images/deal19.jpeg", 
      category: "Two Persons", 
      flavors: ["Spicy", "Mild", "Tangy"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d20", 
      title: "Midnight Snack", 
      price: "599", 
      description: "1 Burger + Fries + Drink", 
      imageSrc: "/images/deal20.jpeg", 
      category: "One Person", 
      flavors: ["Classic", "BBQ", "Cheese"], 
      sizes: ["Small"] 
    },
    { 
      id: "d21", 
      title: "Classic Combo", 
      price: "1899", 
      description: "3 Burgers + Fries + Drinks", 
      imageSrc: "/images/deal21.jpg", 
      category: "Three Persons", 
      flavors: ["Classic", "Cheese", "BBQ"], 
      sizes: ["Large"] 
    },
    { 
      id: "d22", 
      title: "Health Booster", 
      price: "899", 
      description: "Grilled Chicken Salad + Juice", 
      imageSrc: "/images/deal22.jpg", 
      category: "One Person", 
      flavors: ["Lemon", "Vinegar", "Olive"], 
      sizes: ["Small"] 
    },
    { 
      id: "d23", 
      title: "Movie Night Pack", 
      price: "2499", 
      description: "2 Pizzas + Popcorn + Drinks", 
      imageSrc: "/images/deal23.jpg", 
      category: "Family", 
      flavors: ["Cheese", "Pepperoni", "Veggie"], 
      sizes: ["Large"] 
    },
    { 
      id: "d24", 
      title: "Steak Night Deal", 
      price: "2999", 
      description: "2 Steaks + Fries + Drinks", 
      imageSrc: "/images/deal24.jpeg", 
      category: "Two Persons", 
      flavors: ["Grilled", "BBQ", "Pepper"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d25", 
      title: "Mini Party Deal", 
      price: "3999", 
      description: "3 Large Pizzas + 6 Drinks + Garlic Bread", 
      imageSrc: "/images/deal25.jpeg", 
      category: "Family", 
      flavors: ["Cheese", "Pepperoni", "BBQ"], 
      sizes: ["Large"] 
    },
    { 
      id: "d26", 
      title: "Gourmet Special", 
      price: "499", 
      description: "Gourmet Sandwich + Chips + Drink", 
      imageSrc: "/images/deal26.avif", 
      category: "One Person", 
      flavors: ["Classic", "Chicken", "Veggie"], 
      sizes: ["Small"] 
    },
    { 
      id: "d27", 
      title: "Lunch Saver", 
      price: "1099", 
      description: "Biryani + Chicken Curry + Drinks", 
      imageSrc: "/images/deal27.jpeg", 
      category: "Two Persons", 
      flavors: ["Spicy", "Mild", "Tangy"], 
      sizes: ["Medium"] 
    },
    { 
      id: "d28", 
      title: "Evening Delight", 
      price: "1599", 
      description: "Tea + Samosas + Fries + Cake", 
      imageSrc: "/images/deal28.webp", 
      category: "Three Persons", 
      flavors: ["Classic", "Cinnamon", "Chocolate"], 
      sizes: ["Large"] 
    },
    { 
      id: "d29", 
      title: "Birthday Bash", 
      price: "4999", 
      description: "Cake + Pizzas + Snacks + Drinks", 
      imageSrc: "/images/deal29.jpeg", 
      category: "Family", 
      flavors: ["Vanilla", "Chocolate", "Strawberry"], 
      sizes: ["Large"] 
    },
    { 
      id: "d30", 
      title: "Weekend Feast", 
      price: "5999", 
      description: "4 Pizzas + Garlic Bread + Drinks + Dessert", 
      imageSrc: "/images/deal30.jpeg", 
      category: "Family", 
      flavors: ["Cheese", "Pepperoni", "BBQ"], 
      sizes: ["Large"] 
    }
  ];
  
const ProductDetailsPage = ({ params }: PageProps) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

  // Unwrap params using React.use()
  const { id } = use(params);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        console.error('Product ID is missing');
        return;
      }

      const currentProduct = products.find((item) => item.id === id);
      if (!currentProduct) {
        console.error('Product not found');
        return;
      }

      setProduct(currentProduct);

      // Filter related products by excluding the current product and grouping by category
      const filteredRelatedProducts = products.filter(
        (item) => item.id !== id && item.category === currentProduct.category
      );
      setRelatedProducts(filteredRelatedProducts);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-lg text-gray-600">We couldn’t find the product you’re looking for.</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedFlavor || !selectedSize) {
      alert("Please select flavor and size!");
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      imageSrc: product.imageSrc,
      flavor: selectedFlavor,
      size: selectedSize,
      quantity,
    };

    setCart((prevCart) => [...prevCart, cartItem]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    const newCart = [...cart];
    const index = newCart.findIndex(item => item.id === id);
    if (index !== -1) {
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  const calculateTotal = () => {
    const total = cart.reduce((acc, item) => {
      const price = parseFloat(item.price || "0");
      return acc + price * item.quantity;
    }, 0);
    const deliveryCharges = 150; // Delivery charges in RS
    return { total, deliveryCharges, grandTotal: total + deliveryCharges };
  };

  return (
    <div className="container mx-auto p-6 py-11 mt-7">
      {/* Page Heading */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Product Details</h1>
        <p className="text-lg text-gray-600">Explore our premium collection of delicious dishes.</p>
      </header>

      {/* Product Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Product Image */}
        <div className="relative">
          <img
            className="w-full rounded-lg object-cover shadow-lg"
            src={product.imageSrc}
            alt={product.title}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-800">{product.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-lg text-gray-600 font-semibold">Deals: {product.category}</p>

          {/* Flavors */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flavors</h3>
            <div className="flex flex-wrap gap-3">
              {product.flavors.map((flavor) => (
                <button
                  key={flavor}
                  className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${
                    selectedFlavor === flavor ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-800"
                  }`}
                  onClick={() => setSelectedFlavor(flavor)}
                >
                  {flavor}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sizes</h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${
                    selectedSize === size ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mt-4">
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              onClick={() => setQuantity(Math.max(quantity - 1, 1))}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg font-semibold w-full"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-16">
  <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
    <span className="text-yellow-500">Related Products</span>
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {relatedProducts.slice(0, 4).map((relatedProduct) => (
      <div
        key={relatedProduct.id}
        className="group bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      >
        {/* Link for Image */}
        <Link href={`/deals/${relatedProduct.id}`} passHref>
          <img
            className="w-full h-64 object-cover group-hover:opacity-90"
            src={relatedProduct.imageSrc}
            alt={relatedProduct.title}
          />
        </Link>
        
        <div className="p-4">
          {/* Product Title */}
          <h3 className="text-lg font-bold text-gray-700 group-hover:text-yellow-500 mb-2">
            {relatedProduct.title}
          </h3>
          
          {/* Price and View Details Button */}
          <div className="flex justify-between items-center">
            <span className="text-yellow-500 font-semibold">₨ {relatedProduct.price}</span>
            
            {/* Link for "View Details" Button */}
            <Link href={`/deals/${relatedProduct.id}`} passHref>
              <button className="text-yellow-500 font-medium hover:text-yellow-600">
                 <FaShoppingCart className="text-lg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Cart Modal */}
      {isCartOpen && (
  <div className="fixed top-0 right-0 w-80 bg-white shadow-lg p-6 h-full z-50 overflow-auto">
    <button
      onClick={() => setIsCartOpen(false)}
      className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      aria-label="Close Cart"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-600 hover:text-gray-800"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    {/* Cart Header */}
    <div className="px-6 py-4 border-b">
      <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
    </div>

    {/* Cart Content */}
    <div className="px-4 py-4">
      {cart.length === 0 ? (
        <p className="text-lg text-gray-600 text-center mt-8">Your cart is empty.</p>
      ) : (
        <div className="space-y-6  ">
          {cart.map((item) => (
          <div
          key={item.id}
          className="flex items-center p-4 bg-gray-100 rounded-lg shadow-md"
        >
          {/* Item Image */}
          <img
            src={item.imageSrc}
            alt={item.title}
            className="w-16 h-16 object-cover rounded-lg border"
          />
          {/* Item Info */}
          <div className="ml-2 flex-1">
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600">{item.flavor} - {item.size}</p>
            <div className="flex items-center justify-between text-gray-700 text-sm">
              <p className="mr-2">Quantity: {item.quantity}</p>
              {/* Trash Icon next to Quantity */}
              <button
                onClick={() => handleRemoveFromCart(item.id)} // Calls the remove function for the specific item
                className="text-red-500 hover:text-red-700"
                aria-label="Remove Item"
              >
                <FaTrashAlt className="h-5 w-5 ml-2" /> {/* Adjusted size of trash icon */}
              </button>
            </div>
          </div>
        </div>
        
          
          ))}

          {/* Total Summary */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <div className="flex justify-between text-gray-700 mb-2">
              <span className="text-sm font-medium">Total:</span>
              <span className="text-sm font-semibold">₨ {calculateTotal().total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 mb-2">
              <span className="text-sm font-medium">Delivery Charges:</span>
              <span className="text-sm font-semibold">₨ {calculateTotal().deliveryCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-800 text-lg font-bold">
              <span>Grand Total:</span>
              <span>₨ {calculateTotal().grandTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <Link href="/checkout">
            <button className="mt-6 w-full bg-yellow-500 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  </div>
)}


    </div>
  );
};

export default ProductDetailsPage;

