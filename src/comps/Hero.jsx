import React, { useState, useEffect } from 'react';
import ScrollDownIndicator from './ScrolldownIndicator';

const HeroSection = () => {
  const headings = [
    "Welcome to Celestial Horizons",
    "Explore the Wonders of the Cosmos"
  ];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = deleting ? 70 : 130;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < headings[index].length) {
        setText(prev => prev + headings[index][charIndex]);
        setCharIndex(prev => prev + 1);
      } else if (deleting && charIndex > 0) {
        setText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      } else if (!deleting && charIndex === headings[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setIndex(prev => (prev + 1) % headings.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <div id="hero" className="flex flex-col items-center justify-center h-screen text-white text-center">
      <h1 className="text-4xl md:text-6xl font-bold">{text}
        <span className="animate-blink text-[rgba(255,255,255,0.7)] font-normal">|</span>
      </h1>
      <p className="para text-lg md:text-xl mt-4">Discover the secrets of the universe</p>
      <p className="para text-lg md:text-xl ">Journey through the cosmos with us as we explore the mysteries of the night sky</p>
      <p className="para text-lg md:text-xl ">From the ancient myths to the cutting-edge discoveries, the universe awaits your exploration</p>

      <ScrollDownIndicator/>

      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          display: inline-block;
          animation: blink 0.8s step-end infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;