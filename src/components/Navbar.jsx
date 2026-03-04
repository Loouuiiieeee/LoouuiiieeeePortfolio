import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-left text-3xl font-bold tracking-wide">
          <span>Loouuiiieeee</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#home"
            className="hover:text-gray-300 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-300 transition duration-300"
          >
            About Me
          </a>
          <a
            href="#services"
            className="hover:text-gray-300 transition duration-300"
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-gray-300 transition duration-300"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition duration-300"
          >
            Contact
          </a>

          {/* CTA Button */}
          <button className="ml-4 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
            Contact Me
          </button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-4 space-y-4 text-sm font-medium">
          <a href="#home" className="block hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="block hover:text-gray-300">
            About Me
          </a>
          <a href="#services" className="block hover:text-gray-300">
            Services
          </a>
          <a href="#projects" className="block hover:text-gray-300">
            Projects
          </a>
          <a href="#contact" className="block hover:text-gray-300">
            Contact
          </a>
          <button className="w-full bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
            Contact Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
