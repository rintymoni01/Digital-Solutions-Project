import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0e0e0e] text-white py-4 fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <div className=" ">
         <img src="/Image/white-logo-reeni (1).png" alt="" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          <a href="#" className="hover:text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500 flex items-center gap-1">Services ▾</a>
          <a href="#" className="hover:text-pink-500 flex items-center gap-1">Blog ▾</a>
          <a href="#" className="hover:text-pink-500 flex items-center gap-1">Project ▾</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </nav>

        {/* Social + Mobile Button */}
        <div className="flex items-center gap-4">
          
          {/* Social Icons */}
          <div className="hidden lg:flex items-center  gap-3">
            <FaInstagram className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
            <FaLinkedinIn className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
            <FaTwitter className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
            <FaFacebookF className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden bg-pink-600 w-10 h-10 rounded-full flex justify-center items-center"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#111] transition-all duration-300 ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-semibold">
          <a href="#" className="hover:text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Services</a>
          <a href="#" className="hover:text-pink-500">Blog</a>
          <a href="#" className="hover:text-pink-500">Project</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
