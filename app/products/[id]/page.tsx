'use client'

import { Params } from "next/dist/server/request/params";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaTrash, FaTrashAlt } from "react-icons/fa";

// Types for props and product items
type PageProps = {
  params: { id: string };
};
type PagePropsing = {
  id?: any;
  name?: any;
};
type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  imageSrc: string;
  flavors: string[];
  sizes: string[];
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
const products: Product[] = [
  {
    id: "1",
    title: "pasta",
    price: "599.00",
    imageSrc: "/images/pro1.png",
    description: "Refreshing lime from organic farms.",
    flavors: ["Classic", "Mint", "Ginger"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "2",
    title: "Country Burger",
    price: "650.00",
    imageSrc: "/images/pro2.png",
    description: "Delicious burger with fresh ingredients.",
    flavors: ["Original", "Spicy", "Cheesy"],
    sizes: ["Single", "Double", "Family"],
  },
  {
    id: "3",
    title: "Cheese Burger",
    price: "700.00",
    imageSrc: "/images/pro3.png",
    description: "Creamy and smooth butter made from fresh milk.",
    flavors: ["Salted", "Unsalted"],
    sizes: ["250g", "500g", "1kg"],
  },
  {
    id: "4",
    title: "Simple Burger",
    price: "350.00",
    imageSrc: "/images/pro4.png",
    description: "Rich and moist muffin with premium chocolate.",
    flavors: ["Dark Chocolate", "Milk Chocolate", "Hazelnut"],
    sizes: ["Single", "Pack of 6", "Pack of 12"],
  },
  {
    id: "5",
    title: "Masala Chat",
    price: "199.00",
    imageSrc: "/images/pine-apple.avif",
    description: "Juicy grilled chicken with fresh vegetables.",
    flavors: ["BBQ", "Spicy", "Garlic"],
    sizes: ["Single", "Double"],
  },
  {
    id: "6",
    title: "Pizza with Vegetables",
    price: "1500.00",
    imageSrc: "/images/pro6.png",
    description: "Freshly cut vegetables with a tangy dressing.",
    flavors: ["Citrus", "Creamy", "Vinaigrette"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "7",
    title: "Pasta Alfredo",
    price: "499.00",
    imageSrc: "/images/pro7.png",
    description: "Creamy Alfredo pasta with a rich cheese sauce.",
    flavors: ["Chicken", "Shrimp", "Vegetarian"],
    sizes: ["Single", "Family"],
  },
  {
    id: "8",
    title: "Chicken Wings",
    price: "650.00",
    imageSrc: "/images/pro8.png",
    description: "Spicy, crispy chicken wings served with sauce.",
    flavors: ["Buffalo", "Barbecue", "Garlic Parmesan"],
    sizes: ["6 pieces", "12 pieces", "24 pieces"],
  },
  {
    id: "9",
    title: "Chocolate Cake",
    price: "299.00",
    imageSrc: "/images/pro13.png",
    description: "Classic pizza with fresh mozzarella and basil.",
    flavors: ["donats", "nuts", "simple"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "10",
    title: "Lemon Juice",
    price: "150.00",
    imageSrc: "/images/pro10.png",
    description: "Succulent lamb patty with fresh veggies and sauce.",
    flavors: ["Mint", "Garlic", "Spicy"],
    sizes: ["Single", "Double"],
  },
  {
    id: "11",
    title: "Pizza with Broast",
    price: "1200.00",
    imageSrc: "/images/pro11.png",
    description: "Delicious sundae with ice cream and toppings.",
    flavors: ["Vanilla", "Chocolate", "Strawberry"],
    sizes: ["Single", "Double", "Family"],
  },
  {
    id: "12",
    title: "Chicken Burger",
    price: "250.00",
    imageSrc: "/images/pro12.png",
    description: "Classic Caesar salad with crisp romaine lettuce.",
    flavors: ["Classic", "Garlic", "Spicy"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "13",
    title: "Salad",
    price: "150.00",
    imageSrc: "/images/salad.jpeg",
    description: "Crispy fries served with a side of ketchup.",
    flavors: ["Plain", "Cheese", "Garlic"],
    sizes: ["Small", "Large"],
  },
  {
    id: "14",
    title: "Juice",
    price: "100.00",
    imageSrc: "/images/juice.jpeg",
    description: "Healthy vegetable soup served hot.",
    flavors: ["Spicy", "Creamy", "Herb"],
    sizes: ["Small", "Large"],
  },
  {
    id: "15",
    title: "Chicken Handi karahi",
    price: "1200.00",
    imageSrc: "/images/handi.jpeg",
    description: "Crispy fried fish fillets served with golden fries.",
    flavors: ["Plain", "Spicy", "Garlic"],
    sizes: ["Single", "Double"],
  },
  {
    id: "16",
    title: "Gol Gappa",
    price: "350.00",
    imageSrc: "/images/gol-gappa.jpg",
    description: "Juicy beef patty with melted cheese and fresh veggies.",
    flavors: ["Original", "Bacon", "Double Cheese"],
    sizes: ["Single", "Double"],
  },
  {
    id: "17",
    title: "Fries",
    price: "150.00",
    imageSrc: "/images/fries.jpg",
    description: "A mix of fresh fruits blended into a refreshing drink.",
    flavors: ["Tropical", "Berry", "Citrus"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "18",
    title: "Drinks",
    price: "180.00",
    imageSrc: "/images/drinks.jpeg",
    description: "Crispy chicken tenders served with dipping sauce.",
    flavors: ["Honey Mustard", "Buffalo", "BBQ"],
    sizes: ["6 pieces", "12 pieces", "18 pieces"],
  },
  {
    id: "19",
    title: "Cup Ice-cream",
    price: "300.00",
    imageSrc: "/images/cup-icecream.jpeg",
    description: "best flovore ice-cream in the resturant.",
    flavors: ["vanila", "chocolate", "mango"],
    sizes: ["Single", "Family"],
  },
  {
    id: "20",
    title: "Chocolate Ice-cream",
    price: "250.00",
    imageSrc: "/images/chocolate.jpeg",
    description: "Rich chocolate cake with layers of chocolate frosting.",
    flavors: ["Dark Chocolate", "Milk Chocolate", "White Chocolate"],
    sizes: ["Single Slice", "Whole Cake"],
  },
  {
    id: "21",
    title: "Chicken Handi Biryani",
    price: "900.00",
    imageSrc: "/images/chicken-handi-biryani.avif",
    description: "Fragrant rice with spiced meat, served with raita.",
    flavors: ["Chicken", "Beef", "Mutton"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "22",
    title: "BBQ",
    price: "299.00",
    imageSrc: "/images/BB.avif",
    description: "Tender chicken wrapped in a soft roti with fresh toppings.",
    flavors: ["Spicy", "BBQ", "Garlic"],
    sizes: ["Single", "Double"],
  },
  {
    id: "23",
    title: "Karahi",
    price: "800.00",
    imageSrc: "/images/karahi.jpg",
    description: "Deliciously spicy chicken or mutton cooked in a traditional karahi.",
    flavors: ["Chicken", "Mutton"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "24",
    title: "Bahari-Roll",
    price: "180.00",
    imageSrc: "/images/bahari-roll.jpg",
    description: "Tender chicken wrapped in pita bread with fresh toppings.",
    flavors: ["Garlic", "Spicy", "BBQ"],
    sizes: ["Single", "Double"],
  },
  {
    id: "25",
    title: "Broast",
    price: "360.00",
    imageSrc: "/images/broast-ori.webp",
    description: "Tasty beef tacos served with fresh salsa and cheese.",
    flavors: ["Spicy", "Cheese", "Mild"],
    sizes: ["Single", "Double"],
  },
  {
    id: "26",
    title: "Beef Burger",
    price: "899.00",
    imageSrc: "/images/beef-bur.jpeg",
    description: "Juicy chicken patty with fresh veggies and sauce.",
    flavors: ["Spicy", "BBQ", "Garlic"],
    sizes: ["Single", "Double"],
  },
  {
    id: "27",
    title: "Garlic Pizza",
    price: "1200.00",
    imageSrc: "/images/garlic.avif",
    description: "Classic pizza with a generous amount of melted cheese.",
    flavors: ["Cheddar", "Mozzarella", "Parmesan"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "28",
    title: "Koila-Karahi",
    price: "1350.00",
    imageSrc: "/images/koila-karahi.jpeg",
    description: "Tender ribs glazed with smoky BBQ sauce.",
    flavors: ["Original", "Spicy", "Honey"],
    sizes: ["Single", "Double"],
  },
  {
    id: "29",
    title: "Malai-Tikka",
    price: "350.00",
    imageSrc: "/images/Malai-tikka.avif",
    description: "Crispy falafel balls wrapped in pita with fresh veggies.",
    flavors: ["Spicy", "Mild", "Tahini"],
    sizes: ["Single", "Double"],
  },
  {
    id: "30",
    title: "Roll",
    price: "200.00",
    imageSrc: "/images/marphil.avif",
    description: "Crispy fries topped with chili and melted cheese.",
    flavors: ["Spicy", "Cheese", "Plain"],
    sizes: ["Small", "Large"],
  },
  {
    id: "31",
    title: "Pullao",
    price: "350.00",
    imageSrc: "/images/pulao.avif",
    description: "Fried rice with pineapple chunks and vegetables.",
    flavors: ["Vegetarian", "Chicken", "Prawn"],
    sizes: ["Small", "Medium", "Large"],
  },
  {
    id: "32",
    title: "Tikka",
    price: "250.00",
    imageSrc: "/images/Tikka.avif",
    description: "Beef patty with fresh veggies, cheese, and sauces.",
    flavors: ["Classic", "Bacon", "Cheddar"],
    sizes: ["Single", "Double"],
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
  ///ingnore// Added state for related products
  const unwrappedParams = React.use<PagePropsing>(params);  // Unwrap the promise

  // Fetch product and related products using async logic

  useEffect(() => {
    const fetchProduct = async () => {
      // Ensure params is defined and has an id
      if (!unwrappedParams || !unwrappedParams.id) {
        console.error('params or params.id is undefined');
        return;
      }

      // Ensure products is an array and is not empty
      if (!Array.isArray(products) || products.length === 0) {
        console.error('Products array is empty or not valid');
        return;
      }

      // Log products and params for debugging
      console.log('unwrappedParams:', unwrappedParams);
      console.log('products:', products);

      // Find the product by its id
      const currentProduct = products.find((item) => {
        if (!item.hasOwnProperty('id')) {
          console.error('Product is missing the id property:', item);
          return false;
        }
        return item.id === unwrappedParams.id;
      });

      if (!currentProduct) {
        console.error('Product not found with id:', unwrappedParams.id);
        return;
      }

      // Set the product data
      setProduct(currentProduct);

      // Filter related products excluding the current product
      const filteredRelatedProducts = products.filter((item) => item.id !== unwrappedParams.id);
      setRelatedProducts(filteredRelatedProducts);
    };

    fetchProduct();
  }, [unwrappedParams, products]); // Re-run when params or products change



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
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to Our Menu
        </h1>
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

          {/* Flavors */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Flavors</h3>
            <div className="flex flex-wrap gap-3">
              {product.flavors?.map((flavor) => (
                <button
                  key={flavor}
                  className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${selectedFlavor === flavor
                      ? "bg-yellow-500 text-white"
                      : "bg-yellow-100 text-yellow-800"
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
              {product.sizes?.map((size) => (
                <button
                  key={size}
                  className={`px-4 py-2 rounded-lg font-medium shadow-sm transition-all ${selectedSize === size
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-800"
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

          {/* Price and Button */}
          <div className="flex items-center space-x-4 mt-4">
            <span className="text-3xl font-bold text-yellow-500">₨ {product.price}</span>
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
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
              <Link href={`/products/${relatedProduct.id}`} passHref>
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
                  <Link href={`/products/${relatedProduct.id}`} passHref>
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


      {isCartOpen && (
        <div className="fixed top-0 right-0 w-80 bg-white shadow-lg p-6 h-full z-50 overflow-auto">
          <button
            onClick={() => setIsCartOpen(false)}
            className="absolute top-4 right-4 text-xl"
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
              <div className="space-y-6">
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
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.flavor} - {item.size}</p>
                      <p className="text-gray-700 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    {/* Remove Button */}
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      {/* Remove */}
                      <FaTrashAlt className="text-lg text-red-500" />
                    </button>
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
