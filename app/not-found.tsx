import type { NextPage } from 'next';
import Link from 'next/link'; // Import Link component
import { FaHome } from 'react-icons/fa';

const NotFound: NextPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
      {/* 404 Error Heading */}
      <h1 className="text-6xl md:text-7xl font-bold mb-6 text-yellow-500">
        <span className="text-yellow-500">404</span> Error
      </h1>
      
      {/* Error Description */}
      <p className="text-xl md:text-2xl text-white mb-6 max-w-xl text-center">
        Oops! The page you're looking for doesn't exist. You may have mistyped the URL or the page has been moved.
      </p>

      {/* Back to Home Button */}
      <Link href="/">
        <div className="px-8 py-3 bg-yellow-500 text-lg text-gray-900 rounded-full hover:bg-yellow-600 transition duration-300 flex items-center gap-2">
          <FaHome /> Back to Home
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
