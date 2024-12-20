// 'use client';
// import { useRouter } from "next/navigation";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// // Mock Data (Replace with API calls in a real app)
// const products = [
//   {
//     id: "1",
//     title: "Fresh Lime",
//     price: "$38.00",
//     originalPrice: "$45.00",
//     description: "Refreshing and organic lime sourced from the best farms.",
//     imageSrc: "/images/pro1.png",
//     rating: 4,
//   },
//   {
//     id: "2",
//     title: "Country Burger",
//     price: "$45.00",
//     imageSrc: "/images/pro2.png",
//     description: "Delicious burger made with country-fresh ingredients.",
//     rating: 5,
//   },
//   // Add more product data here
// ];

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;

//   // Find product by ID
//   const product = products.find((item) => item.id === id);

//   if (!product) return <div>Product not found!</div>;

//   return (
//     <div className="container mx-auto p-6">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Product Image */}
//         <div className="relative">
//           <img
//             className="w-full rounded-lg object-cover"
//             src={product.imageSrc}
//             alt={product.title}
//           />
//           {product.originalPrice && (
//             <span className="absolute top-4 left-4 bg-red-500 text-white py-1 px-3 text-sm rounded-full">
//               Sale
//             </span>
//           )}
//         </div>

//         {/* Product Info */}
//         <div>
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             {product.title}
//           </h1>
//           <div className="flex items-center gap-2 mb-4">
//             {Array.from({ length: 5 }, (_, i) => (
//               <FaStar
//                 key={i}
//                 className={`${
//                   i < product.rating ? "text-yellow-500" : "text-gray-300"
//                 }`}
//               />
//             ))}
//             <span className="text-gray-600">(Rating: {product.rating})</span>
//           </div>
//           <p className="text-gray-600 text-lg mb-6">{product.description}</p>
//           <div className="text-xl font-semibold text-yellow-500 mb-4">
//             {product.price}
//             {product.originalPrice && (
//               <span className="line-through text-gray-400 ml-2">
//                 {product.originalPrice}
//               </span>
//             )}
//           </div>
//           <div className="flex items-center gap-4 mb-6">
//             <input
//               type="number"
//               className="w-20 border border-gray-300 rounded-lg p-2 text-gray-700 text-center"
//               min="1"
//               defaultValue="1"
//             />
//             <button className="bg-primary-color text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-yellow-600 transition-all">
//               <FaShoppingCart /> Add to Cart
//             </button>
//             <button className="text-gray-500 hover:text-red-500 transition-all">
//               <FaHeart size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
