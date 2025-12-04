import { useState } from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#0e0e0e] text-white py-4 fixed top-0 left-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
          <Link to="/"><img src="/Image/white-logo-reeni (1).png" alt="Logo" /></Link>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/about" className="hover:text-pink-500">About</Link>
          <Link to="/servises" className="hover:text-pink-500 flex items-center gap-1">Services ▾</Link>
          <Link to="/blog" className="hover:text-pink-500 flex items-center gap-1">Blog ▾</Link>
          <Link to="/project" className="hover:text-pink-500 flex items-center gap-1">Project ▾</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3">
            <FaInstagram className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
            <FaLinkedinIn className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
            <FaTwitter className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
            <FaFacebookF className="text-4xl bg-[#1a1a1a] p-2 rounded-full" />
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden bg-pink-600 w-10 h-10 rounded-full flex justify-center items-center"
          >
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-[#111] transition-all duration-300 ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
        <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-semibold">
          <Link to="/" className="hover:text-pink-500" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-pink-500" onClick={() => setOpen(false)}>About</Link>
          <Link to="/servises" className="hover:text-pink-500" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/blog" className="hover:text-pink-500" onClick={() => setOpen(false)}>Blog</Link>
          <Link to="/project" className="hover:text-pink-500" onClick={() => setOpen(false)}>Project</Link>
          <Link to="/contact" className="hover:text-pink-500" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}


