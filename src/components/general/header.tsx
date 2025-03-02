"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFF5F3] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link href="/">
          <span
            className="text-[#103741] font-bold text-2xl cursor-pointer"
            style={{ fontFamily: "'Lobster Two', cursive" }}
          >
            FitnessPro
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/about">
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/classes">
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              Classes
            </span>
          </Link>
          <Link href="/contact">
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              Contact
            </span>
          </Link>
        </div>

        {/* Join Now Button */}
        <Link
          href="/join"
          className="hidden md:block bg-[#FE5D37] text-white px-5 py-2 rounded-md font-medium hover:bg-[#e04c2f] transition"
        >
          Join Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#103741] text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF5F3] px-6 py-4 flex flex-col space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/classes" onClick={() => setIsOpen(false)}>
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              Classes
            </span>
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <span className="text-[#103741] font-medium hover:text-[#FE5D37] transition cursor-pointer">
              Contact
            </span>
          </Link>
          <Link
            href="/join"
            className="bg-[#FE5D37] text-white px-5 py-2 rounded-md font-medium hover:bg-[#e04c2f] transition text-center"
            onClick={() => setIsOpen(false)}
          >
            Join Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
