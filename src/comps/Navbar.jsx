import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const menuTimelineRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".navbar", {
      y: -70,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
    })
    .from(".navlogo", {
      x:-300,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    }, "-=0.3")
    .from(".desktop-options", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    }, "-=0.5")
    .from(".para",{
      y: 30,
      opacity: 0,
      stagger: 0.2,
    }, "-=0.7")
    .from(".scrollicon",{
      y: 70,
      opacity: 0,
      stagger: 0.2,
    }, "-=0.3")
    .from(".downarrow",{
      y: -170,
      opacity: 0,
      scale: 3,
    });

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".indicator",{
      opacity: 0,
      scale: 0,
      scrollTrigger:{
        trigger: ".indicator",
        start: "top 70%",
        end: "top 30%",
        scrub:2,
      }
    });

    // Reusable timeline for mobile menu animations 
    menuTimelineRef.current = gsap.timeline({ paused: true });
    menuTimelineRef.current
      .to(".line1", {
        rotation: 45,
        y: 8,
        duration: 0.3,
        transformOrigin: "center"
      }, 0)
      .to(".line2", { 
        opacity: 0, 
        duration: 0.15 
      }, 0)
      .to(".line3", {
        rotation: -45,
        y: -8,
        duration: 0.3,
        transformOrigin: "center"
      }, 0)
      .fromTo(".mobile-menu-container", {
        opacity: 0
      }, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      }, 0.2)
      .fromTo(".mobile-options", {
        x: 200,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.3)
      .fromTo(".mobile-options-divider", {
        x: 200,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out"
      }, 0.3);

  }, []);

  useEffect(() => {
    if (menuTimelineRef.current) {
      if (menuOpen) {
        menuTimelineRef.current.play();
      } else {
        menuTimelineRef.current.reverse();
      }
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar fixed top-0 left-0 w-full bg-opacity-50 backdrop-blur-sm p-4 flex justify-between items-center text-white z-50">
        {/* Logo or brand name could go here */}
        <div className="navlogo text-xl font-extrabold tracking-wide text-purple-300">
          Celestial <span className="text-white">Horizons</span>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="focus:outline-none w-8 h-8 flex flex-col justify-center items-center relative"
            aria-label="Toggle menu"
          >
            <span className="line1 block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></span>
            <span className="line2 block w-6 h-0.5 bg-white mb-1.5 transition-all duration-300"></span>
            <span className="line3 block w-6 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        </div>
        
        {/* Desktop menu */}
        <ul className='hidden md:flex justify-center gap-x-6 md:gap-x-8 lg:gap-x-12'>
          <li className='desktop-options'>
            <Link to="hero" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
            Home
            </Link>
          </li>
          <li className='desktop-options'>
            <Link to="stars" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
            Stars
            </Link>
          </li>
          <li className='desktop-options'>
            <Link to="constellations" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
            Constellations
            </Link>
          </li>
          <li className='desktop-options'>
            <Link to="galaxies" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
            Galaxies
            </Link>
          </li>
          <li className='desktop-options'>
            <Link to="academy" smooth={true} duration={1000} className="cursor-pointer hover:text-purple-400 transition duration-200">
            Academy
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      <div 
      ref={mobileMenuRef}
      className={`mobile-menu-container fixed top-15.5 left-0 right-0 bottom-0 h-51 border-t-2 border-purple-400 bg-opacity-50 backdrop-blur-sm p-4 z-50 md:hidden transform ${menuOpen ? "" : "pointer-events-none"}`}
      >
      <ul className='flex flex-col space-y-1 font-semibold text-white'
      style={{
        textShadow: `
          -1px -1px 0 black,
          1px -1px 0 black,
          -1px  1px 0 black,
          1px  1px 0 black
        `
      }}
      >
        <li className='mobile-options'>
          <Link 
            to="hero" 
            smooth={true} 
            duration={1000} 
            className="block text-lg cursor-pointer hover:text-purple-400 transition duration-200"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <div className='h-0.5 bg-gradient-to-l from-transparent to-purple-400 mobile-options-divider'></div>
        
        <li className='mobile-options'>
          <Link 
            to="stars" 
            smooth={true} 
            duration={1000} 
            className="block text-lg cursor-pointer hover:text-purple-400 transition duration-200"
            onClick={closeMenu}
          >
            Stars
          </Link>
        </li>
        <div className='h-0.5 bg-gradient-to-l from-transparent to-purple-400 mobile-options-divider'></div>

        <li className='mobile-options'>
          <Link 
            to="constellations" 
            smooth={true} 
            duration={1000} 
            className="block text-lg cursor-pointer hover:text-purple-400 transition duration-200"
            onClick={closeMenu}
          >
            Constellations
          </Link>
        </li>
        <div className='h-0.5 bg-gradient-to-l from-transparent to-purple-400 mobile-options-divider'></div>

        <li className='mobile-options'>
          <Link 
            to="galaxies" 
            smooth={true} 
            duration={1000} 
            className="block text-lg cursor-pointer hover:text-purple-400 transition duration-200"
            onClick={closeMenu}
          >
            Galaxies
          </Link>
        </li>
        <div className='h-0.5 bg-gradient-to-l from-transparent to-purple-400 mobile-options-divider'></div>
        
        <li className='mobile-options'>
          <Link 
            to="academy" 
            smooth={true} 
            duration={1000} 
            className="block text-lg cursor-pointer hover:text-purple-400 transition duration-200"
            onClick={closeMenu}
          >
            Academy
          </Link>
        </li>
        <div className='h-0.5 bg-gradient-to-l from-transparent to-purple-400 mobile-options-divider'></div>
      </ul>
      </div>
    </>
  );
};

export default Navbar;