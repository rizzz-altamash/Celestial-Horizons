import React, { useState, useEffect, useRef } from 'react';
import { constellationData } from '../data/constellationData';
import { astronomyLessons } from '../data/astronomyLessons';
import { advancedTopics } from '../data/astronomyLessons';
import { telescopeGuides } from '../data/telescopeGuide';
import TelescopeComparisonTool from './TelescopeComparisionTool';

const CosmicAcademyPage = () => {
  const canvasRef = useRef(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTab, setActiveTab] = useState('astronomy');
  const [showAdvancedTopics, setShowAdvancedTopics] = useState(false);
  const [showComparisonTool, setShowComparisonTool] = useState(false);

  const handleAdvancedTopicsClick = () => {
    setShowAdvancedTopics(true);
  };
  const handleCloseAdvancedTopics = () => {
    setShowAdvancedTopics(false);
  };
  
  // Nebula background animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create nebula effect
    const particles = [];
    const particleCount = 77; // 100
    const colorPalette = [
      'rgba(255, 100, 100, 0.8)', // Red
      'rgba(255, 150, 50, 0.8)',  // Orange
      'rgba(100, 100, 255, 0.8)', // Blue
      'rgba(200, 100, 255, 0.8)'  // Purple
    ];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        blur: Math.random() * 5 + 2
      });
    }
    
    function drawNebula() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create base dark gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 30, 1)');
      gradient.addColorStop(1, 'rgba(30, 10, 40, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles with glow effect
      particles.forEach(particle => {
        ctx.save();
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = particle.blur;
        ctx.fill();
        ctx.restore();
        
        // Move particles slightly
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
      });
      
      requestAnimationFrame(drawNebula);
    }
    
    drawNebula();
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  return (
    <div id='academy' className="relative text-white min-h-screen overflow-hidden">
      {/* Animated nebula background */}
      <canvas 
        ref={canvasRef} 
        className="fixed top-0 left-0 w-full h-full -z-10"
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Title with meteor effect */}
        <div className="relative mb-16">
          <h1 className="academyheading text-5xl md:text-7xl font-bold text-center">
            <span className="relative inline-block">
              Cosmic Academy
              <span className="meteor-trail absolute -inset-2 blur-xl bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/0 -z-10 rounded-full"></span>
            </span>
          </h1>
          <p className="academypara text-xl text-center mt-4 text-purple-200 max-w-3xl mx-auto">
            Explore the mysteries of the cosmos through interactive lessons and ancient stories
          </p>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
        <button 
            onClick={() => setActiveTab('astronomy')}
            className={`conceptstab relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'astronomy' 
                ? 'bg-blue-800 text-white shadow-glow-blue' 
                : 'bg-blue-900/30 text-blue-200 hover:bg-blue-800/50'
            }`}
          >
            Astronomy Concepts
          </button>
          <button 
            onClick={() => setActiveTab('constellations')}
            className={`mythologytab relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'constellations' 
                ? 'bg-purple-800 text-white shadow-glow-purple' 
                : 'bg-purple-900/30 text-purple-200 hover:bg-purple-800/50'
            }`}
          >
            Constellation Mythology
          </button>
          <button 
            onClick={() => setActiveTab('telescopes')}
            className={`telescopetab relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === 'telescopes' 
                ? 'bg-teal-800 text-white shadow-glow-teal' 
                : 'bg-teal-900/30 text-teal-200 hover:bg-teal-800/50'
            }`}
          >
            Telescope Guide
          </button>
        </div>
        
        {/* Astronomy Concepts Section */}
        {activeTab === 'astronomy' && (
        <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {astronomyLessons.map((lesson, index) => (
              <div 
                key={lesson.id}
                className="nebula-card p-6 rounded-2xl relative overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
                >
                <div className={`absolute top-7 right-7.5 px-2 py-1 rounded-full text-xs font-medium ${
                    lesson.level === 'Beginner' ? 'bg-green-800/60 text-green-200' :
                    lesson.level === 'Intermediate' ? 'bg-yellow-800/60 text-yellow-200' :
                    'bg-red-800/60 text-red-200'
                }`}>
                    {lesson.level}
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                  {lesson.title}
                </h3>
                
                <div className='h-0.25 mb-1.5 bg-gradient-to-r from-purple-500 via-blue-600 to-purple-500'></div>
                
                <p className="mb-4 text-blue-100 leading-relaxed">
                    {lesson.content}
                </p>
                
                <div className="flex justify-between items-center">
                    <a 
                    href={`${lesson.id=='celestial-sphere' ? "https://en.wikipedia.org/wiki/Celestial_sphere" : lesson.id=='light-years' ? "https://en.wikipedia.org/wiki/Light-year" : lesson.id=='stellar-evolution' ? "https://en.wikipedia.org/wiki/Stellar_evolution" : "https://en.wikipedia.org/wiki/Cosmology"}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="concept-button px-4 py-2 bg-blue-700/40 hover:bg-blue-600/50 rounded-lg transition-colors duration-300 flex items-center">

                    <span>Learn More</span>

                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                    </a>
                    
                    <div className="concept-number text-6xl font-bold absolute bottom-2 right-4 text-blue-700/20">
                    {index + 1}
                    </div>
                </div>
              </div>
            ))}
            </div>
            
            {/* Advanced Topics Section - Modified to expand with animation hehe */}
            <div 
            className={`mt-12 relative overflow-hidden transition-all duration-700 ease-in-out
            ${showAdvancedTopics 
                ? 'fixed inset-0 z-50 p-0 m-0 border-1 rounded-2xl bg-blue-950/95 overflow-y-auto' 
                : 'p-8 rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 border border-blue-500/30'
            }`}
            >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/api/placeholder/1200/400')] opacity-10 mix-blend-overlay"></div>
            
            {/* Content container with padding that adjusts based on expanded state lesss go */}
            <div className={`relative ${showAdvancedTopics ? 'max-w-7xl mx-auto px-4 py-12' : ''}`}>
                
                {/* Header section */}
                {showAdvancedTopics ? (
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-4xl h-11 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-300">
                    Advanced Cosmology Concepts
                    </h2>
                    <button 
                    onClick={handleCloseAdvancedTopics}
                    className="p-2 rounded-full bg-blue-800/50 hover:bg-blue-700/70 transition-colors"
                    >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    </button>
                </div>
                ) : (
                <div>
                    <h3 className="text-3xl font-bold mb-4 text-center text-blue-200">Ready for Advance Concepts?</h3>
                    <p className="text-lg text-center mb-6 max-w-3xl mx-auto text-blue-100">
                    Explore quantum gravity, multiverse theory, dark energy, and other cutting-edge concepts in modern cosmology.
                    </p>
                </div>
                )}

                {/* Conditional content based on expansion state */}
                {showAdvancedTopics ? (
                <>
                    {/* Introduction text */}
                    <div className="mb-12 text-center">
                    <p className="text-xl text-blue-100 max-w-4xl mx-auto">
                        Welcome to the frontier of modern cosmology, where our fundamental understanding of the universe 
                        meets its limits. These advanced topics represent the cutting edge of theoretical physics 
                        and astronomical research, where many questions remain unanswered.
                    </p>
                    </div>

                    {/* Advanced topics grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {advancedTopics.map((topic) => (
                      <div 
                        key={topic.id}
                        className="p-6 rounded-2xl bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/30 backdrop-blur"
                        >
                        <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">
                            {topic.title}
                        </h3>

                        <div className='h-0.25 bg-blue-500/30 mb-3'></div>
                        
                        <div className="space-y-6">
                            <div>
                            <h4 className="text-xl font-semibold mb-2 text-blue-200">Overview</h4>
                            <p className="text-blue-100 leading-relaxed">
                                {topic.content}
                            </p>
                            </div>
                            
                            <div>
                            <h4 className="text-xl font-semibold mb-2 text-blue-200">Deep Dive</h4>
                            <p className="text-blue-100 leading-relaxed">
                                {topic.deepDive}
                            </p>
                            </div>
                            
                            <div className="pt-4">
                              <a 
                              href={`${topic.id == 'quantum-gravity' ? "https://en.wikipedia.org/wiki/Quantum_gravity" : topic.id == 'multiverse' ? "https://en.wikipedia.org/wiki/Multiverse" : topic.id == 'dark-energy' ? "https://en.wikipedia.org/wiki/Dark_energy" : topic.id == 'cosmic-inflation' ? "https://en.wikipedia.org/wiki/Cosmic_inflation" : topic.id == 'primordial-black-holes' ? "https://en.wikipedia.org/wiki/Primordial_black_hole" : "https://en.wikipedia.org/wiki/Cosmic_string"}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-[35%] px-4 py-2 bg-blue-700/40 hover:bg-blue-600/50 rounded-lg transition-colors duration-300 flex items-center">

                                <span>Dive Deeper</span>

                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                              </a>
                            </div>
                        </div>
                      </div>
                    ))}
                    </div>

                    {/* Additional resources section */}
                    <div className="mt-16 p-8 rounded-2xl bg-blue-900/40 border border-blue-500/30">
                    <h3 className="text-2xl font-bold mb-4 text-center text-blue-200">Recommended Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                        <div className="p-4 rounded-xl bg-blue-800/30 border border-blue-600/30">
                        <h4 className="font-semibold text-blue-300 mb-2">Books & Publications</h4>
                        <ul className="space-y-2 text-blue-100">
                            <li>• "The Elegant Universe" by Brian Greene</li>
                            <li>• "Our Mathematical Universe" by Max Tegmark</li>
                            <li>• "The Cosmic Landscape" by Leonard Susskind</li>
                            <li>• "Something Deeply Hidden" by Sean Carroll</li>
                        </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-blue-800/30 border border-blue-600/30">
                        <h4 className="font-semibold text-blue-300 mb-2">Online Courses</h4>
                        <ul className="space-y-2 text-blue-100">
                            <li>• Advanced Cosmology (MIT OpenCourseWare)</li>
                            <li>• Quantum Field Theory (Stanford)</li>
                            <li>• General Relativity (CalTech)</li>
                            <li>• Particle Physics & Cosmology (CERN)</li>
                        </ul>
                        </div>
                        <div className="p-4 rounded-xl bg-blue-800/30 border border-blue-600/30">
                        <h4 className="font-semibold text-blue-300 mb-2">Research Journals</h4>
                        <ul className="space-y-2 text-blue-100">
                            <li>• Physical Review Letters</li>
                            <li>• The Astrophysical Journal</li>
                            <li>• Classical and Quantum Gravity</li>
                            <li>• Journal of Cosmology & Astroparticle Physics</li>
                        </ul>
                        </div>
                    </div>
                    </div>

                    {/* Close button at bottom */}
                    <div className="mt-12 text-center">
                    <button 
                        onClick={handleCloseAdvancedTopics}
                        className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full font-medium shadow-sm hover:shadow-md duration-300 hover:scale-103 hover:-translate-y-0.5"
                    >
                        Return to Astronomy Concepts
                    </button>
                    </div>
                </>
                ) : (
                <div className="flex justify-center">
                    <button 
                    onClick={handleAdvancedTopicsClick}
                    className="px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-700 rounded-full font-medium shadow-md hover:shadow-lg duration-300 group hover:scale-103 hover:-translate-y-0.5"
                    >
                    <span className="flex items-center ">
                        Reveal The Secrets
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                        </svg>
                    </span>
                    </button>
                </div>
                )}
            </div>
            </div>
        </div>
        )}

        {/* Constellation Mythology Section */}
        {activeTab === 'constellations' && (
          <div className="mb-16">
            <div className="flex flex-wrap -mx-4">
              {/* Sidebar - Constellation List */}
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div className="nebula-card p-6 rounded-2xl h-full">
                  <h3 className="text-2xl font-semibold mb-6 text-center text-purple-200">
                    Choose a Constellation
                  </h3>
                  <ul className="space-y-3">
                    {constellationData.map(constellation => (
                      <li key={constellation.id}>
                        <button
                          onClick={() => setActiveLesson(constellation.id)}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                            activeLesson === constellation.id
                              ? 'bg-purple-700/50 shadow-constellation'
                              : 'bg-purple-900/30 hover:bg-purple-800/40'
                          }`}
                        >
                          <div className="flex items-center">
                            <div className={`constellation-icon w-8 h-8 mr-3 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center ${
                              activeLesson === constellation.id ? 'animate-constellation-pulse' : ''
                            }`}>
                              <span className="text-xs">★</span>
                            </div>
                            <span className="font-medium">{constellation.name}</span>
                          </div>
                          <p className="text-sm text-purple-300 mt-1">{constellation.title}</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Main Content - Constellation Details */}
              <div className="w-full md:w-2/3 px-4">
                {activeLesson ? (
                  <div className="nebula-card p-6 rounded-2xl relative overflow-hidden">
                    {/* Find the active constellation */}
                    {(() => {
                      const constellation = constellationData.find(c => c.id === activeLesson);
                      return (
                        <>
                          <div className="flex flex-col md:flex-row md:items-start mb-8 gap-6">
                            <div className="md:w-2/3">
                              <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                                The Story of {constellation.name}
                              </h3>
                              <p className="mb-6 leading-relaxed text-purple-100">
                                {constellation.mythology}
                              </p>
                              <div className="mb-6">
                                <h4 className="text-xl font-semibold mb-2 text-purple-200">Notable Stars</h4>
                                <div className="flex flex-wrap gap-2">
                                  {constellation.stars.map(star => (
                                    <span key={star} className="px-3 py-1 bg-purple-800/40 rounded-full text-sm text-purple-200 border border-purple-500/30">
                                      {star}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                            {/* <div className="md:w-1/3">
                              <div className="relative rounded-xl overflow-hidden group">
                                <img 
                                  src={constellation.image} 
                                  alt={constellation.name} 
                                  className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
                                <div className="h-1 absolute bottom-3 left-3 right-3">
                                  <h4 className="text-xl font-semibold text-white">{constellation.name}</h4>
                                  <p className="text-sm text-purple-200">{constellation.title}</p>
                                </div>
                              </div>
                            </div> */}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-500/30">
                              <h4 className="text-xl font-semibold mb-3 text-purple-200">Fun Facts</h4>
                              <ul className="space-y-2">
                                {constellation.funFacts.map((fact, index) => (
                                  <li key={index} className="flex items-start">
                                    <span className="inline-block mt-1 w-4 h-4 mr-2 text-purple-300">✦</span>
                                    <span className="text-purple-100">{fact}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="bg-purple-900/30 p-5 rounded-xl border border-purple-500/30">
                              <h4 className="text-xl font-semibold mb-3 text-purple-200">Where to Find It</h4>
                              <p className="text-purple-100">
                                {constellation.whereTo}
                              </p>
                              {/* <div className="mt-4">
                                <button className="px-4 py-2 bg-purple-700/50 hover:bg-purple-600/50 rounded-lg transition-colors duration-300 flex items-center">
                                  <span>Interactive Star Map</span>
                                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                  </svg>
                                </button>
                              </div> */}
                            </div>
                          </div>
                        </>
                      );
                    })()}
                  </div>
                ) : (
                  <div className="nebula-card p-8 rounded-2xl flex items-center justify-center min-h-[400px]">
                    <div className="text-center">
                      <div className="inline-block relative mb-6">
                        <div className="w-16 h-16 border-2 border-purple-400 rounded-full flex items-center justify-center">
                          <span className="text-2xl">★</span>
                        </div>
                        <div className="absolute inset-0 rounded-full animate-pulse-slow bg-purple-500/20"></div>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 text-purple-200">Select a Constellation</h3>
                      <p className="text-purple-300 max-w-md">
                        Discover the ancient myths and scientific facts behind the patterns in our night sky.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Telescope Guide Section */}
        {activeTab === 'telescopes' && (
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Side Content - Quick Tips */}
              <div className="lg:col-span-1">
                <div className="nebula-card p-6 rounded-2xl relative overflow-hidden bg-gradient-to-b from-teal-900/40 to-blue-900/40 border border-teal-500/30 h-[40.4rem]">
                  <h3 className="text-2xl font-semibold mb-6 text-teal-200">
                    Quick Tips for Beginners
                  </h3>
                  
                  <ul className="space-y-5">
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-teal-800/60 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-200">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-teal-100 mb-1">Start Simple</h4>
                        <p className="text-teal-200 text-sm">Learn the night sky with binoculars before investing in a telescope</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-teal-800/60 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-200">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-teal-100 mb-1">Focus on Stability</h4>
                        <p className="text-teal-200 text-sm">A stable mount is as important as good optics that's why stability is must</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-teal-800/60 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-200">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-teal-100 mb-1">Prioritize Aperture</h4>
                        <p className="text-teal-200 text-sm">Aperture (diameter of main lens/mirror) determines how much light your telescope can gather</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-teal-800/60 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-200">4</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-teal-100 mb-1">Less Magnification</h4>
                        <p className="text-teal-200 text-sm">Lower magnification with a wider field of view makes objects easier to find</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start">
                      <div className="w-10 h-10 bg-teal-800/60 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-teal-200">5</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-teal-100 mb-1">Be Patient</h4>
                        <p className="text-teal-200 text-sm">Astronomy requires patience and practice - don't expect Hubble-like views immediately</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-8 pb-4 text-center">
                    <button 
                    onClick={() => setShowComparisonTool(true)}
                    className="mt-6.5 px-4 py-2 bg-teal-700/40 hover:bg-teal-600/50 rounded-lg transition-colors duration-300 inline-flex items-center">
                      <span>Telescopes Comparision Tool</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                      </svg>
                    </button>
                  </div>

                  <TelescopeComparisonTool
                  isVisible={showComparisonTool} 
                  onClose={() => setShowComparisonTool(false)} 
                  />

                </div>
              </div>
              
              {/* Main Content - Telescope Guides */}
              <div className="lg:col-span-2">
                {telescopeGuides.map(guide => (
                  <div 
                    key={guide.id}
                    className="nebula-card p-6 rounded-2xl relative overflow-hidden mb-8 bg-gradient-to-r from-teal-900/40 to-blue-900/40 border border-teal-500/30"
                  >
                    <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-300">
                      {guide.title}
                    </h3>
                    
                    <div className="flex flex-col md:flex-row gap-6 mb-6">
                      
                      <div className="md:w-2/3">
                        <p className="text-teal-100 leading-relaxed mb-4">
                          {guide.content}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                          <a 
                          href={`${guide.id=='telescope-types' ? "https://en.wikipedia.org/wiki/List_of_telescope_types" : "https://en.wikipedia.org/wiki/List_of_telescope_parts_and_construction"}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-teal-700/40 hover:bg-teal-600/50 rounded-lg transition-colors duration-300 flex items-center">
                            <span>Read More</span>
                            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                          </a>
                        </div>
                      </div>
                      {/* <div className="md:w-1/3">
                        <div className="relative rounded-xl overflow-hidden">
                          <img 
                            src={guide.image} 
                            alt={guide.title} 
                            className="w-full h-auto"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-900/30 to-transparent"></div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CosmicAcademyPage;