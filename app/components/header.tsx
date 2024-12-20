'use client';

import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle menu toggle
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <nav className="w-full bg-[#737171] text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 h-[70px] flex items-center justify-between">
        {/* Display Section */}
        <div className="text-2xl font-bold text-[#FF9F0D]">
          Food<span className="text-white">tuck</span>
        </div>

        {/* Links Section */}
        <div className="hidden md:flex items-center gap-6 flex-grow justify-center">
          <Link href="/" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            Home
          </Link>
          <Link href="/menuitem" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            Menu
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            Products
          </Link>
          <Link href="/deals" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            deals
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            About
          </Link>
         
          <Link href="/chef" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            Chefs
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            Contact
          </Link>
          <Link href="/signin" className="text-sm font-medium hover:text-[#FF9F0D] transition">
            Login
          </Link>
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden md:flex items-center gap-6">
          <FaSearch className="text-lg cursor-pointer hover:text-[#FF9F0D] transition" />
          <FaShoppingCart className="text-lg cursor-pointer hover:text-[#FF9F0D] transition" />
        </div>

        {/* Hamburger Menu Button */}
        <button
<<<<<<< HEAD
          className="md:hidden text-2xl text-white focus:outline-none z-60"
=======
          className="md:hidden text-2xl text-white focus:outline-none z-60" // Add z-index to make sure it's visible
>>>>>>> 9facdfe5f4a3f89b839729c314a5a7aac76128ec
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#737171] w-full py-4 z-50 transition-all duration-300 ease-in-out">
          {/* Display Section (Static) */}
          <div className="text-xl font-bold text-center text-[#FF9F0D] mb-4">
            Food<span className="text-white">tuck</span>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center gap-4">
            <Link href="/" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Home
            </Link>
            <Link href="/menuitem" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Menu
            </Link>
            <Link href="/products" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Products
            </Link>
            <Link href="/deals" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Deals
            </Link>
            <Link href="/about" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              About
            </Link>
            
            <Link href="/chef" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Chefs
            </Link>
            <Link href="/contact" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Contact
            </Link>
            <Link href="/signin" onClick={handleMenuClose} className="text-sm font-medium hover:text-[#FF9F0D] transition">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
