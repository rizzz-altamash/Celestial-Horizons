import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".navbar", {
      y: -70,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    })
    .from(".options", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.5") // Start the options animation slightly before navbar finishes 
    .from(".para",{
      y:30,
      opacity:0,
      stagger:0.2,
    }, "-=0.7")
    .from(".scrollicon",{
      y:70,
      opacity:0,
      stagger:0.2,
    }, "-=0.3")
    .from(".downarrow",{
      y:-155,
      opacity:0,
    })

  });

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-sm p-4 flex justify-center space-x-8 text-white z-50">
      <ul className='flex justify-center gap-x-6 md:gap-x-12 lg:gap-x-16'>
      <li className='options'>
        <Link to="hero" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
        Home
        </Link>
      </li>
      <li className='options'>
        <Link to="stars" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
        Stars
        </Link>
      </li>
      <li className='options'>
        <Link to="constellations" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
        Constellations
        </Link>
      </li>
      <li className='options'>
        <Link to="galaxies" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
        Galaxies
        </Link>
      </li>
      <li className='options'>
        <Link to="academy" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
        Academy
        </Link>
      </li>
      </ul>
    </nav>
  );
};

export default Navbar;