import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-sm p-4 flex justify-center space-x-8 text-white z-50">
      <Link to="hero" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 hover:scale-110 transition duration-200">
        Home
      </Link>
      <Link to="stars" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 hover:scale-110 transition duration-200">
        Stars
      </Link>
      <Link to="constellations" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 hover:scale-110 transition duration-200">
        Constellations
      </Link>
      <Link to="galaxies" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 hover:scale-110 transition duration-200">
        Galaxies
      </Link>
      <Link to="academy" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 hover:scale-110 transition duration-200">
       Academy
      </Link>
    </nav>
  );
};

export default Navbar;