import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';

const ConstellationsPage = () => {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".constellationsheading",{
      y:100,
      opacity:0,
      scale:1.5,
      duration:300,
      scrollTrigger:{
        trigger:".constellationsheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".constellationsintro",{
      opacity:0,
      scale:0.5,
      duration:300,
      scrollTrigger:{
        trigger:".constellationsintro",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".constellationcategoriesheading",{
      y:50,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".constellationcategoriesheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".zodiac",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".zodiac",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".northern",{
      x:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".northern",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".southern",{
      x:-250,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".southern",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".seasonal",{
      x:250,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".seasonal",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".culturalsignificanceheading",{
      y:100,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".culturalsignificanceheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".timelineconnector2",{
      opacity:0,
      scale:0.5,
      duration:300,
      scrollTrigger:{
        trigger:".timelineconnector2",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".dot2",{
      opacity:0,
      scale:0,
      duration:300,
      scrollTrigger:{
        trigger:".dot2",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".ancientdiv",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".ancientdiv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".mythologicaldiv",{
      x:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".mythologicaldiv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".agriculturaldiv",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".agriculturaldiv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".notableconstellationsheading",{
      y:50,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".notableconstellationsheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".orion",{
      x:300,
      y:100,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".orion",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".cassiopeia",{
      x:-300,
      y:100,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".cassiopeia",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".ursamajor",{
      y:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".ursamajor",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".cygnus",{
      x:200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".cygnus",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".crux",{
      x:-200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".crux",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".scorpius",{
      y:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".scorpius",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".pegasus",{
      x:200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".pegasus",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".draco",{
      x:-200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".draco",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".aquila",{
      y:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".aquila",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".leo",{
      x:200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".leo",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".taurus",{
      x:-200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".taurus",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".ursaminor",{
      y:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".ursaminor",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".andromeda",{
      x:200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".andromeda",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".hydrus",{
      x:-200,
      y:-150,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".hydrus",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".lyra",{
      y:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".lyra",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
  })


  return (
    <div id='constellations' className="relative text-white min-h-screen overflow-hidden">
      
      {/* Gradient overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-900/10 via-purple-900/20 to-black/60 -z-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Title with cosmic glow effect */}
        <h1 className="constellationsheading text-4xl md:text-6xl font-bold mb-8 text-center">
          <span className="inline-block relative">
            Celestial Constellations
            <span className="absolute -inset-1 blur-xl bg-indigo-500/20 -z-10 rounded-full"></span>
          </span>
        </h1>
        
        {/* Introduction Section */}
        <section className="constellationsintro mb-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-900/10 backdrop-blur-sm -z-10"></div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-indigo-200">What Are Constellations?</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Constellations are groups of stars that form recognizable patterns in the night sky. 
              Throughout history, cultures around the world have connected these celestial dots to 
              create images of mythological figures, animals, and objects.
            </p>
            <p className="text-lg leading-relaxed">
              These stellar patterns have served as navigation tools, calendars, and storytelling devices 
              for thousands of years. Today, astronomers recognize 88 official constellations that 
              map the entire celestial sphere.
            </p>
          </div>
        </section>
        
        {/* Constellation Types Section */}
        <section className="mb-16">
          <h2 className="constellationcategoriesheading text-2xl md:text-3xl font-semibold mb-8 text-center text-indigo-200">
            Constellation Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="zodiac cosmic-card bg-gradient-to-br from-indigo-900/40 to-indigo-700/20 p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm hover:from-indigo-800/50 hover:to-indigo-600/30 transition duration-300">
              <div className="cosmic-orb bg-indigo-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-indigo-300">Zodiac Constellations</h3>
              <p className="leading-relaxed">
                The 12 constellations that lie along the ecliptic, the path the Sun 
                appears to follow through the sky. These include Aries, Taurus, Gemini, 
                Cancer, Leo, Virgo, Libra, Scorpius, Sagittarius, Capricornus, Aquarius, and Pisces.
              </p>
            </div>
            <div className="northern cosmic-card bg-gradient-to-br from-violet-900/40 to-violet-700/20 p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm hover:from-violet-800/50 hover:to-violet-600/30 transition duration-300">
              <div className="cosmic-orb bg-violet-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-violet-300">Northern Constellations</h3>
              <p className="leading-relaxed">
                Patterns visible from the Northern Hemisphere, including Ursa Major (the Great Bear), 
                Ursa Minor (the Little Bear), Cassiopeia, Cepheus, Draco, and others. Many of these 
                are circumpolar, meaning they never set below the horizon.
              </p>
            </div>
            <div className="southern cosmic-card bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:from-blue-800/50 hover:to-blue-600/30 transition duration-300">
              <div className="cosmic-orb bg-blue-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-blue-300">Southern Constellations</h3>
              <p className="leading-relaxed">
                Constellations visible primarily from the Southern Hemisphere, including the 
                Southern Cross (Crux), Centaurus, Carina, and Pavo. Many were documented by European 
                explorers during the Age of Discovery in the 16th and 17th centuries.
              </p>
            </div>
            <div className="seasonal cosmic-card bg-gradient-to-br from-cyan-900/40 to-cyan-700/20 p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-sm hover:from-cyan-800/50 hover:to-cyan-600/30 transition duration-300">
              <div className="cosmic-orb bg-cyan-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-cyan-300">Seasonal Constellations</h3>
              <p className="leading-relaxed">
                Constellations that are most prominent during particular seasons. For example, 
                Orion dominates winter skies in the Northern Hemisphere, while Cygnus (the Swan) 
                is a prominent summer constellation.
              </p>
            </div>
          </div>
        </section>
        
        {/* Historical Significance Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="culturalsignificanceheading text-2xl md:text-3xl font-semibold mb-8 text-center text-indigo-200">Cultural Significance</h2>
          <div className="relative">
            {/* Timeline connector */}
            <div className="timelineconnector2 absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-yellow-500 via-blue-500 to-teal-500 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="ancientdiv md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-medium mb-3 text-yellow-300">Ancient <br/> Navigators</h3>
                  <div className="cosmic-card bg-gradient-to-br from-yellow-800/40 to-yellow-600/20 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Sailors and travelers used the stars as natural compasses long before the 
                      invention of modern navigation tools. The North Star (Polaris) in Ursa Minor 
                      has guided countless voyagers by indicating the direction of true north.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="dot2 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-yellow-500 border-2 border-white z-10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="mythologicaldiv md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-medium mb-3 text-blue-300 md:text-left">Mythological <br/> Storytelling</h3>
                  <div className="cosmic-card bg-gradient-to-br from-blue-800/40 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Across cultures, constellations were used to preserve and share important myths 
                      and legends. The Greeks saw heroes like Perseus and Orion in the stars, while 
                      Indigenous Australians saw dreamtime stories in the Milky Way and its surroundings.
                    </p>
                  </div>
                </div>
                <div className="dot2 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-2 border-white z-10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="agriculturaldiv md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-medium mb-3 text-teal-300">Agricultural <br/> Calendars</h3>
                  <div className="cosmic-card bg-gradient-to-br from-teal-800/40 to-teal-600/20 p-6 rounded-2xl border border-teal-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Farmers used the rising and setting of specific constellations to mark seasonal 
                      changes and determine the best times for planting and harvesting. The appearance 
                      of Orion in the evening sky, for example, signaled the onset of winter in 
                      the Northern Hemisphere.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="dot2 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-teal-500 border-2 border-white z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Famous Constellations Section with animations */}
        <section className="mb-16">
          <h2 className="notableconstellationsheading text-2xl md:text-3xl font-semibold mb-8 text-center text-indigo-200">Notable Constellations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Orion - Connect-the-dots animation */}
            <div className="orion cosmic-card relative p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-900/40 to-transparent overflow-hidden group">
              <div className="constellation-dots opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/4 left-1/4"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/4 left-1/3"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/5 left-2/5"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-2/6 left-1/2"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-2/5 left-1/5"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-2/5 left-3/5"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/2 left-1/3"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-3/5 left-1/5"></div>
                <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-3/5 left-3/5"></div>
                <div className="absolute w-1 h-20 bg-blue-500/20 rounded-full top-1/4 left-1/3 rotate-12 blur-sm animate-orion-connect opacity-0 group-hover:opacity-60 transition-opacity duration-1000"></div>
                <div className="absolute w-1 h-16 bg-blue-500/20 rounded-full top-1/5 left-2/5 rotate-45 blur-sm animate-orion-connect opacity-0 group-hover:opacity-60 transition-opacity duration-1000 delay-100"></div>
                <div className="absolute w-1 h-10 bg-blue-500/20 rounded-full top-2/6 left-2/5 rotate-90 blur-sm animate-orion-connect opacity-0 group-hover:opacity-60 transition-opacity duration-1000 delay-200"></div>
                <div className="absolute w-1 h-20 bg-blue-500/20 rounded-full top-2/5 left-1/5 rotate-120 blur-sm animate-orion-connect opacity-0 group-hover:opacity-60 transition-opacity duration-1000 delay-300"></div>
                <div className="absolute w-1 h-14 bg-blue-500/20 rounded-full top-2/5 left-3/5 rotate-135 blur-sm animate-orion-connect opacity-0 group-hover:opacity-60 transition-opacity duration-1000 delay-400"></div>
                <div className="absolute w-1 h-16 bg-blue-500/20 rounded-full top-1/2 left-1/4 rotate-150 blur-sm animate-orion-connect opacity-0 group-hover:opacity-60 transition-opacity duration-1000 delay-500"></div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-blue-200">Orion</h3>
              <p className="leading-relaxed">The Hunter, one of the most recognizable constellations, contains bright stars including Betelgeuse and Rigel. The distinctive three stars of Orion's Belt make it easy to spot in winter skies.</p>
            </div>
            
            {/* Ursa Major - Rotating animation */}
            <div className="ursamajor cosmic-card relative p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-24 h-24 border border-purple-400/30 rounded animate-ursa-rotate">
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full top-0 left-0"></div>
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full top-0 right-0"></div>
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full bottom-0 left-1/4"></div>
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full bottom-0 right-1/4"></div>
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full top-1/4 left-1/3"></div>
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full top-1/2 right-1/3"></div>
                  <div className="absolute w-2 h-2 bg-purple-300 rounded-full bottom-1/4 left-1/2"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-purple-200">Ursa Major</h3>
              <p className="leading-relaxed">The Great Bear, containing the famous asterism known as the Big Dipper or Plough. This constellation is circumpolar in much of the Northern Hemisphere, visible year-round.</p>
            </div>
            
            {/* Cassiopeia - W-shaped twinkling */}
            <div className="cassiopeia cosmic-card relative p-6 rounded-2xl border border-pink-500/30 backdrop-blur-sm bg-gradient-to-br from-pink-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-20">
                  <div className="absolute w-2 h-2 bg-pink-300 rounded-full top-0 left-0 animate-cassiopeia-twinkle"></div>
                  <div className="absolute w-2 h-2 bg-pink-300 rounded-full top-1/2 left-1/4 animate-cassiopeia-twinkle delay-100"></div>
                  <div className="absolute w-2 h-2 bg-pink-300 rounded-full top-0 left-1/2 animate-cassiopeia-twinkle delay-200"></div>
                  <div className="absolute w-2 h-2 bg-pink-300 rounded-full top-1/2 left-3/4 animate-cassiopeia-twinkle delay-300"></div>
                  <div className="absolute w-2 h-2 bg-pink-300 rounded-full top-0 right-0 animate-cassiopeia-twinkle delay-400"></div>
                  <div className="absolute w-1 h-12 bg-pink-500/20 rotate-45 top-0 left-0 blur-sm animate-cassiopeia-connect opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-10 bg-pink-500/20 rotate-135 top-1/4 left-1/4 blur-sm animate-cassiopeia-connect opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-12 bg-pink-500/20 rotate-45 top-0 left-1/2 blur-sm animate-cassiopeia-connect opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-pink-500/20 rotate-135 top-1/4 left-3/4 blur-sm animate-cassiopeia-connect opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-pink-200">Cassiopeia</h3>
              <p className="leading-relaxed">This distinctive W-shaped constellation represents a queen from Greek mythology. It's circumpolar from most of the Northern Hemisphere and is visible year-round opposite the Big Dipper.</p>
            </div>
            
            {/* Cygnus - Flying swan animation */}
            <div className="cygnus cosmic-card relative p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-indigo-300 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-cygnus-twinkle"></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full top-1/4 left-1/4 animate-cygnus-twinkle delay-100"></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full top-1/4 right-1/4 animate-cygnus-twinkle delay-200"></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 animate-cygnus-twinkle delay-300"></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full bottom-1/4 left-1/3 animate-cygnus-twinkle delay-400"></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full bottom-1/4 right-1/3 animate-cygnus-twinkle delay-500"></div>
                  <div className="absolute w-2 h-2 bg-indigo-300 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-cygnus-twinkle delay-600"></div>
                  <div className="absolute w-1 h-10 bg-indigo-500/20 top-0 left-1/2 transform -translate-x-1/2 blur-sm animate-cygnus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-8 bg-indigo-500/20 rotate-45 top-1/4 left-1/3 blur-sm animate-cygnus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-8 bg-indigo-500/20 rotate-135 top-1/4 right-1/3 blur-sm animate-cygnus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-indigo-500/20 top-1/2 left-1/2 transform -translate-x-1/2 blur-sm animate-cygnus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-indigo-200">Cygnus</h3>
              <p className="leading-relaxed">The Swan, also known as the Northern Cross, is a prominent summer constellation in the Northern Hemisphere. Its brightest star, Deneb, forms part of the Summer Triangle asterism.</p>
            </div>
            
            {/* Scorpius - Curving tail animation */}
            <div className="scorpius cosmic-card relative p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm bg-gradient-to-br from-red-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-red-400 rounded-full top-0 left-0 animate-scorpius-twinkle"></div>
                  <div className="absolute w-2 h-2 bg-red-300 rounded-full top-1/6 left-1/5 animate-scorpius-twinkle delay-100"></div>
                  <div className="absolute w-2 h-2 bg-red-300 rounded-full top-1/4 left-2/5 animate-scorpius-twinkle delay-200"></div>
                  <div className="absolute w-2 h-2 bg-red-300 rounded-full top-2/5 left-1/2 animate-scorpius-twinkle delay-300"></div>
                  <div className="absolute w-2 h-2 bg-red-300 rounded-full top-1/2 left-3/5 animate-scorpius-twinkle delay-400"></div>
                  <div className="absolute w-2 h-2 bg-red-300 rounded-full top-3/5 left-4/5 animate-scorpius-twinkle delay-500"></div>
                  <div className="absolute w-2 h-2 bg-red-300 rounded-full top-4/5 right-0 animate-scorpius-twinkle delay-600"></div>
                  <div className="absolute w-1 h-6 bg-red-500/20 rotate-30 top-0 left-0 blur-sm animate-scorpius-sting opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-6 bg-red-500/20 rotate-30 top-1/6 left-1/5 blur-sm animate-scorpius-sting opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-8 bg-red-500/20 rotate-30 top-1/4 left-2/5 blur-sm animate-scorpius-sting opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-8 bg-red-500/20 rotate-45 top-2/5 left-1/2 blur-sm animate-scorpius-sting opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-8 bg-red-500/20 rotate-60 top-1/2 left-3/5 blur-sm animate-scorpius-sting opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                  <div className="absolute w-1 h-6 bg-red-500/20 rotate-75 top-3/5 left-4/5 blur-sm animate-scorpius-sting opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-500"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-red-200">Scorpius</h3>
              <p className="leading-relaxed">One of the zodiac constellations, Scorpius resembles a scorpion with a distinctive curved tail. Its brightest star, Antares, has a reddish hue reminiscent of Mars, hence its name meaning "rival of Mars."</p>
            </div>
            
            {/* Crux - Southern Cross pulsing */}
            <div className="crux cosmic-card relative p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-sm bg-gradient-to-br from-cyan-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-20.5 right-0 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-crux-pulse"></div>
                  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full top-1/2 left-0 animate-crux-pulse delay-200"></div>
                  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full top-1/2 right-0 animate-crux-pulse delay-400"></div>
                  <div className="absolute w-2 h-2 bg-cyan-300 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-crux-pulse delay-600"></div>
                  <div className="absolute w-1 h-16 bg-cyan-500/20 top-0 left-1/2 transform -translate-x-1/2 blur-sm animate-crux-shine opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-16 bg-cyan-500/20 rotate-90 top-1/2 left-0 blur-sm animate-crux-shine opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-16 bg-cyan-500/20 rotate-90 top-1/2 right-0 blur-sm animate-crux-shine opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                  <div className="absolute w-1 h-16 bg-cyan-500/20 top-1/2 left-1/2 transform -translate-x-1/2 blur-sm animate-crux-shine opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-600"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-cyan-200">Crux</h3>
              <p className="leading-relaxed">The Southern Cross is the smallest constellation in the sky but one of the most distinctive. It's featured on several national flags of countries in the Southern Hemisphere and used for navigation.</p>
            </div>

            {/* Pegasus - Flying horse animation */}
            <div className="pegasus cosmic-card relative p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm bg-gradient-to-br from-amber-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-2 h-2 bg-amber-300 rounded-full top-0 left-0 animate-pegasus-twinkle"></div>
                  <div className="absolute w-2 h-2 bg-amber-300 rounded-full top-0 right-0 animate-pegasus-twinkle delay-100"></div>
                  <div className="absolute w-2 h-2 bg-amber-300 rounded-full top-1/3 left-1/3 animate-pegasus-twinkle delay-200"></div>
                  <div className="absolute w-2 h-2 bg-amber-300 rounded-full top-1/3 right-1/3 animate-pegasus-twinkle delay-300"></div>
                  <div className="absolute w-2 h-2 bg-amber-300 rounded-full top-2/3 left-0 animate-pegasus-twinkle delay-400"></div>
                  <div className="absolute w-2 h-2 bg-amber-300 rounded-full top-2/3 right-0 animate-pegasus-twinkle delay-500"></div>
                  <div className="absolute w-1 h-10 bg-amber-500/20 top-0 left-0 right-0 blur-sm animate-pegasus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-10 bg-amber-500/20 rotate-45 top-0 right-0 blur-sm animate-pegasus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-10 bg-amber-500/20 rotate-90 top-1/3 left-1/3 blur-sm animate-pegasus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-amber-500/20 rotate-90 top-1/3 right-1/3 blur-sm animate-pegasus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-10 bg-amber-500/20 rotate-135 top-2/3 left-0 blur-sm animate-pegasus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                  <div className="absolute w-1 h-10 bg-amber-500/20 rotate-135 top-2/3 right-0 blur-sm animate-pegasus-fly opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-500"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-amber-200">Pegasus</h3>
              <p className="leading-relaxed">The Winged Horse is one of the largest constellations in the night sky, recognized by its distinctive square pattern called the Great Square of Pegasus. This autumn constellation represents the mythological flying horse.</p>
            </div>
            
            {/* Aquila - Eagle soaring animation */}
            <div className="aquila cosmic-card relative p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm bg-gradient-to-br from-green-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-green-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-aquila-center"></div>
                  <div className="absolute w-2 h-2 bg-green-300 rounded-full top-1/4 left-1/4 animate-aquila-wing delay-100"></div>
                  <div className="absolute w-2 h-2 bg-green-300 rounded-full top-1/4 right-1/4 animate-aquila-wing delay-200"></div>
                  <div className="absolute w-2 h-2 bg-green-300 rounded-full top-1/6 left-1/2 transform -translate-x-1/2 animate-aquila-head delay-300"></div>
                  <div className="absolute w-2 h-2 bg-green-300 rounded-full bottom-1/4 left-1/2 transform -translate-x-1/2 animate-aquila-tail delay-400"></div>
                  <div className="absolute w-1 h-12 bg-green-500/20 rotate-45 top-1/4 left-1/4 blur-sm animate-aquila-soar opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-12 bg-green-500/20 rotate-135 top-1/4 right-1/4 blur-sm animate-aquila-soar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-10 bg-green-500/20 top-1/6 left-1/2 transform -translate-x-1/2 blur-sm animate-aquila-soar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-green-500/20 bottom-1/4 left-1/2 transform -translate-x-1/2 blur-sm animate-aquila-soar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-green-200">Aquila</h3>
              <p className="leading-relaxed">The Eagle constellation contains the bright star Altair, which forms one point of the Summer Triangle. In Greek mythology, Aquila was the eagle that carried Zeus's thunderbolts and brought Ganymede to Olympus.</p>
            </div>
            
            {/* Draco - Serpentine movement animation */}
            <div className="draco cosmic-card relative p-6 rounded-2xl border border-teal-500/30 backdrop-blur-sm bg-gradient-to-br from-teal-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-draco-slither"></div>
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full top-1/6 left-1/3 animate-draco-slither delay-100"></div>
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full top-1/3 left-1/4 animate-draco-slither delay-200"></div>
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full top-1/2 left-1/3 animate-draco-slither delay-300"></div>
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full top-2/3 left-1/2 animate-draco-slither delay-400"></div>
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full top-5/6 left-2/3 animate-draco-slither delay-500"></div>
                  <div className="absolute w-2 h-2 bg-teal-300 rounded-full bottom-0 left-3/4 animate-draco-slither delay-600"></div>
                  <div className="absolute w-1 h-8 bg-teal-500/20 top-0 left-1/2 transform -translate-x-1/2 blur-sm animate-draco-wind opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-8 bg-teal-500/20 rotate-30 top-1/6 left-1/3 blur-sm animate-draco-wind opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-8 bg-teal-500/20 rotate-15 top-1/3 left-1/4 blur-sm animate-draco-wind opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-8 bg-teal-500/20 rotate-345 top-1/2 left-1/3 blur-sm animate-draco-wind opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-8 bg-teal-500/20 rotate-330 top-2/3 left-1/2 blur-sm animate-draco-wind opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                  <div className="absolute w-1 h-8 bg-teal-500/20 rotate-315 bottom-1/6 left-2/3 blur-sm animate-draco-wind opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-500"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-teal-200">Draco</h3>
              <p className="leading-relaxed">The Dragon constellation winds between the Big and Little Dippers in the northern sky. This circumpolar constellation was one of the 48 listed by the astronomer Ptolemy in the 2nd century and represents various dragons in different mythologies.</p>
            </div>

            {/* Leo - Roaring animation */}
            <div className="leo cosmic-card relative p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm bg-gradient-to-br from-yellow-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-yellow-300 rounded-full top-0 left-1/3 animate-leo-twinkle"></div>
                  <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-1/6 left-1/2 animate-leo-twinkle delay-100"></div>
                  <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-1/3 left-2/3 animate-leo-twinkle delay-200"></div>
                  <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-1/2 left-1/2 animate-leo-twinkle delay-300"></div>
                  <div className="absolute w-2 h-2 bg-yellow-300 rounded-full top-2/3 left-1/3 animate-leo-twinkle delay-400"></div>
                  <div className="absolute w-2 h-2 bg-yellow-300 rounded-full bottom-0 left-1/2 animate-leo-twinkle delay-500"></div>
                  <div className="absolute w-1 h-10 bg-yellow-500/20 rotate-15 top-0 left-1/3 blur-sm animate-leo-roar opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-8 bg-yellow-500/20 rotate-45 top-1/6 left-1/2 blur-sm animate-leo-roar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-8 bg-yellow-500/20 rotate-75 top-1/3 left-2/3 blur-sm animate-leo-roar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-yellow-500/20 rotate-90 top-1/2 left-1/2 blur-sm animate-leo-roar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-10 bg-yellow-500/20 rotate-135 top-2/3 left-1/3 blur-sm animate-leo-roar opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-yellow-200">Leo</h3>
              <p className="leading-relaxed">The Lion is one of the zodiac constellations and one of the oldest recognized patterns in the night sky. Its brightest star, Regulus, is known as the "Heart of the Lion" and marks one of the four royal stars of ancient Persia.</p>
            </div>

            {/* Ursa Minor - Rotating animation */}
            <div className="ursaminor cosmic-card relative p-6 rounded-2xl border border-blue-400/30 backdrop-blur-sm bg-gradient-to-br from-blue-800/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-24 h-24 border border-blue-400/30 rounded animate-ursa-minor-rotate">
                  <div className="absolute w-3 h-3 bg-blue-300 rounded-full top-0 left-1/2 transform -translate-x-1/2"></div>
                  <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-1/5 left-1/4"></div>
                  <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-2/5 left-1/3"></div>
                  <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-3/5 left-1/2"></div>
                  <div className="absolute w-2 h-2 bg-blue-300 rounded-full top-4/5 left-2/3"></div>
                  <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-0 right-1/4"></div>
                  <div className="absolute w-2 h-2 bg-blue-300 rounded-full bottom-1/3 right-1/5"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-blue-200">Ursa Minor</h3>
              <p className="leading-relaxed">The Little Bear contains Polaris, the North Star, at the end of its tail. This circumpolar constellation is important for navigation in the Northern Hemisphere as Polaris indicates the direction of true north.</p>
            </div>

            {/* Taurus - Charging bull animation */}
            <div className="taurus cosmic-card relative p-6 rounded-2xl border border-orange-500/30 backdrop-blur-sm bg-gradient-to-br from-orange-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-orange-300 rounded-full top-1/4 left-1/4 animate-taurus-pulse"></div>
                  <div className="absolute w-3 h-3 bg-orange-300 rounded-full top-1/4 right-1/4 animate-taurus-pulse delay-200"></div>
                  <div className="absolute w-2 h-2 bg-orange-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 animate-taurus-pulse delay-400"></div>
                  <div className="absolute w-2 h-2 bg-orange-300 rounded-full bottom-1/3 left-1/3 animate-taurus-pulse delay-600"></div>
                  <div className="absolute w-2 h-2 bg-orange-300 rounded-full bottom-1/3 right-1/3 animate-taurus-pulse delay-800"></div>
                  <div className="absolute w-1 h-12 bg-orange-500/20 rotate-45 top-1/4 left-1/4 blur-sm animate-taurus-charge opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-12 bg-orange-500/20 rotate-135 top-1/4 right-1/4 blur-sm animate-taurus-charge opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-orange-500/20 top-1/2 left-1/2 transform -translate-x-1/2 blur-sm animate-taurus-charge opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-orange-200">Taurus</h3>
              <p className="leading-relaxed">The Bull is one of the oldest zodiac constellations, featuring the bright star Aldebaran as its eye and the beautiful Pleiades star cluster. Its V-shaped arrangement of stars represents the head and horns of a charging bull.</p>
            </div>

            {/* Andromeda - Chained princess animation */}
            <div className="andromeda cosmic-card relative p-6 rounded-2xl border border-violet-500/30 backdrop-blur-sm bg-gradient-to-br from-violet-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-2 h-2 bg-violet-300 rounded-full top-0 left-0 animate-andromeda-twinkle"></div>
                  <div className="absolute w-2 h-2 bg-violet-300 rounded-full top-1/5 left-1/5 animate-andromeda-twinkle delay-100"></div>
                  <div className="absolute w-2 h-2 bg-violet-300 rounded-full top-2/5 left-2/5 animate-andromeda-twinkle delay-200"></div>
                  <div className="absolute w-2 h-2 bg-violet-300 rounded-full top-3/5 left-3/5 animate-andromeda-twinkle delay-300"></div>
                  <div className="absolute w-2 h-2 bg-violet-300 rounded-full top-4/5 left-4/5 animate-andromeda-twinkle delay-400"></div>
                  <div className="absolute w-2 h-2 bg-violet-300 rounded-full bottom-0 right-0 animate-andromeda-twinkle delay-500"></div>
                  <div className="absolute w-1 h-8 bg-violet-500/20 rotate-45 top-0 left-0 blur-sm animate-andromeda-chain opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-8 bg-violet-500/20 rotate-45 top-1/5 left-1/5 blur-sm animate-andromeda-chain opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-8 bg-violet-500/20 rotate-45 top-2/5 left-2/5 blur-sm animate-andromeda-chain opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-8 bg-violet-500/20 rotate-45 top-3/5 left-3/5 blur-sm animate-andromeda-chain opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-8 bg-violet-500/20 rotate-45 top-4/5 left-4/5 blur-sm animate-andromeda-chain opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-violet-200">Andromeda</h3>
              <p className="leading-relaxed">Named after the mythological princess, this constellation is most famous for containing the Andromeda Galaxy (M31), the nearest major galaxy to our Milky Way and the most distant object visible to the naked eye.</p>
            </div>

            {/* Lyra - Musical lyre animation */}
            <div className="lyra cosmic-card relative p-6 rounded-2xl border border-emerald-500/30 backdrop-blur-sm bg-gradient-to-br from-emerald-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-emerald-300 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-lyra-shine"></div>
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full top-1/3 left-1/4 animate-lyra-shine delay-200"></div>
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full top-1/3 right-1/4 animate-lyra-shine delay-300"></div>
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full bottom-0 left-1/3 animate-lyra-shine delay-400"></div>
                  <div className="absolute w-2 h-2 bg-emerald-300 rounded-full bottom-0 right-1/3 animate-lyra-shine delay-500"></div>
                  <div className="absolute w-1 h-12 bg-emerald-500/20 top-0 left-1/2 transform -translate-x-1/2 blur-sm animate-lyra-strum opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-10 bg-emerald-500/20 rotate-15 top-1/4 left-1/3 blur-sm animate-lyra-strum opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-10 bg-emerald-500/20 rotate-345 top-1/4 right-1/3 blur-sm animate-lyra-strum opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-12 bg-emerald-500/20 rotate-30 top-1/2 left-1/4 blur-sm animate-lyra-strum opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-12 bg-emerald-500/20 rotate-330 top-1/2 right-1/4 blur-sm animate-lyra-strum opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-emerald-200">Lyra</h3>
              <p className="leading-relaxed">The Lyre constellation contains Vega, one of the brightest stars in the night sky and part of the Summer Triangle. In Greek mythology, this constellation represents the lyre of Orpheus, a musical instrument with magical powers.</p>
            </div>

            {/* Hydrus - Watery serpent animation */}
            <div className="hydrus cosmic-card relative p-6 rounded-2xl border border-sky-500/30 backdrop-blur-sm bg-gradient-to-br from-sky-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-2 h-2 bg-sky-300 rounded-full top-0 left-1/4 animate-hydrus-flow"></div>
                  <div className="absolute w-2 h-2 bg-sky-300 rounded-full top-1/4 left-1/2 animate-hydrus-flow delay-100"></div>
                  <div className="absolute w-2 h-2 bg-sky-300 rounded-full top-1/2 right-1/4 animate-hydrus-flow delay-200"></div>
                  <div className="absolute w-2 h-2 bg-sky-300 rounded-full bottom-1/4 left-1/2 animate-hydrus-flow delay-300"></div>
                  <div className="absolute w-2 h-2 bg-sky-300 rounded-full bottom-0 left-1/4 animate-hydrus-flow delay-400"></div>
                  <div className="absolute w-1 h-10 bg-sky-500/20 rotate-45 top-0 left-1/4 blur-sm animate-hydrus-ripple opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-10 bg-sky-500/20 rotate-315 top-1/4 left-1/2 blur-sm animate-hydrus-ripple opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-100"></div>
                  <div className="absolute w-1 h-10 bg-sky-500/20 rotate-225 top-1/2 right-1/4 blur-sm animate-hydrus-ripple opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-10 bg-sky-500/20 rotate-135 bottom-1/4 left-1/2 blur-sm animate-hydrus-ripple opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-300"></div>
                  <div className="absolute w-1 h-10 bg-sky-500/20 rotate-45 bottom-0 left-1/4 blur-sm animate-hydrus-ripple opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-sky-200">Hydrus</h3>
              <p className="leading-relaxed">The Lesser Water Snake is a small southern constellation created by Dutch navigators in the 16th century. Not to be confused with the larger Hydra, this constellation is visible primarily from the Southern Hemisphere.</p>
            </div>

            {/* Fornax - Furnace glow animation */}
            {/* <div className="cosmic-card relative p-6 rounded-2xl border border-rose-500/30 backdrop-blur-sm bg-gradient-to-br from-rose-900/40 to-transparent overflow-hidden group">
              <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-32 h-32">
                  <div className="absolute w-3 h-3 bg-rose-300 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-fornax-glow"></div>
                  <div className="absolute w-2 h-2 bg-rose-300 rounded-full top-1/4 left-1/4 animate-fornax-glow delay-200"></div>
                  <div className="absolute w-2 h-2 bg-rose-300 rounded-full top-1/4 right-1/4 animate-fornax-glow delay-400"></div>
                  <div className="absolute w-2 h-2 bg-rose-300 rounded-full bottom-1/4 left-1/3 animate-fornax-glow delay-600"></div>
                  <div className="absolute w-1 h-12 bg-rose-500/20 rotate-45 top-1/3 left-1/3 blur-sm animate-fornax-heat opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>
                  <div className="absolute w-1 h-12 bg-rose-500/20 rotate-315 top-1/3 right-1/3 blur-sm animate-fornax-heat opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-200"></div>
                  <div className="absolute w-1 h-12 bg-rose-500/20 rotate-90 top-1/2 left-1/2 transform -translate-x-1/2 blur-sm animate-fornax-heat opacity-0 group-hover:opacity-70 transition-opacity duration-1000 delay-400"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-rose-200">Fornax</h3>
              <p className="leading-relaxed">The Furnace is a small southern constellation created by French astronomer Nicolas Louis de Lacaille. Although faint, it contains the remarkable Fornax Cluster of galaxies and is used in deep sky observation.</p>
            </div> */}
          </div>
        </section>
    </div>

    {/* CSS for custom animations */}
    <style jsx>{`
      /* Orion animations */
      @keyframes orion-connect {
        0% { transform: scaleY(0); opacity: 0; }
        100% { transform: scaleY(1); opacity: 0.6; }
      }
      @keyframes orion-star-move {
        0% { transform: translate(0, 0); }
        25% { transform: translate(2px, -2px); }
        50% { transform: translate(0, -3px); }
        75% { transform: translate(-2px, -1px); }
        100% { transform: translate(0, 0); }
      }
      .animate-orion-connect {
        animation: orion-connect 1.5s ease-out forwards;
      }
      .constellation-dots > div {
        animation: orion-star-move 4s ease-in-out infinite;
      }

      /* Ursa Major animations */
      @keyframes ursa-rotate {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes ursa-star-pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
      }
      .animate-ursa-rotate {
        animation: ursa-rotate 20s linear infinite;
      }
      .animate-ursa-rotate > div {
        animation: ursa-star-pulse 3s ease-in-out infinite;
      }

      /* Cassiopeia animations */
      @keyframes cassiopeia-twinkle {
        0% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.3; transform: scale(0.8); }
      }
      @keyframes cassiopeia-zigzag {
        0% { transform: translateY(0); }
        25% { transform: translateY(-3px); }
        50% { transform: translateY(2px); }
        75% { transform: translateY(-2px); }
        100% { transform: translateY(0); }
      }
      .animate-cassiopeia-twinkle {
        animation: 
          cassiopeia-twinkle 3s ease-in-out infinite,
          cassiopeia-zigzag 5s ease-in-out infinite;
      }
      @keyframes cassiopeia-connect {
        0% { transform: scaleX(0); opacity: 0; }
        100% { transform: scaleX(1); opacity: 0.7; }
      }
      .animate-cassiopeia-connect {
        animation: cassiopeia-connect 1.2s ease-out forwards;
      }

      /* Cygnus animations */
      @keyframes cygnus-twinkle {
        0% { opacity: 0.4; transform: scale(0.9); }
        50% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 0.4; transform: scale(0.9); }
      }
      @keyframes cygnus-float {
        0% { transform: translate(0, 0); }
        25% { transform: translate(2px, -3px); }
        50% { transform: translate(4px, 0); }
        75% { transform: translate(2px, 3px); }
        100% { transform: translate(0, 0); }
      }
      .animate-cygnus-twinkle {
        animation: 
          cygnus-twinkle 2.5s ease-in-out infinite,
          cygnus-float 8s ease-in-out infinite;
      }
      @keyframes cygnus-fly {
        0% { transform: scaleY(0); opacity: 0; }
        100% { transform: scaleY(1); opacity: 0.7; }
      }
      .animate-cygnus-fly {
        animation: cygnus-fly 1.3s ease-out forwards;
      }

      /* Scorpius animations */
      @keyframes scorpius-twinkle {
        0% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.3; transform: scale(0.8); }
      }
      @keyframes scorpius-crawl {
        0% { transform: translate(0, 0); }
        25% { transform: translate(3px, 2px); }
        50% { transform: translate(1px, 4px); }
        75% { transform: translate(-2px, 2px); }
        100% { transform: translate(0, 0); }
      }
      .animate-scorpius-twinkle {
        animation: 
          scorpius-twinkle 2.8s ease-in-out infinite;
      }
      .animate-scorpius-twinkle:nth-child(odd) {
        animation-delay: 0.5s;
        animation-name: scorpius-crawl;
        animation-duration: 12s;
      }
      @keyframes scorpius-sting {
        0% { transform: scaleX(0); opacity: 0; }
        90% { transform: scaleX(1) rotate(0); opacity: 0.7; }
        95% { transform: scaleX(1.05) rotate(3deg); opacity: 0.8; }
        100% { transform: scaleX(1) rotate(0); opacity: 0.7; }
      }
      .animate-scorpius-sting {
        animation: scorpius-sting 2s ease-out forwards;
      }

      /* Crux animations */
      @keyframes crux-pulse {
        0% { opacity: 0.4; transform: scale(0.8); box-shadow: 0 0 0 0 rgba(103, 232, 249, 0.4); }
        50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 0 10px rgba(103, 232, 249, 0); }
        100% { opacity: 0.4; transform: scale(0.8); box-shadow: 0 0 0 0 rgba(103, 232, 249, 0); }
      }
      .animate-crux-pulse {
        animation: crux-pulse 3s ease-in-out infinite;
      }
      @keyframes crux-shine {
        0% { transform: scaleY(0); opacity: 0; }
        100% { transform: scaleY(1); opacity: 0.7; }
      }
      .animate-crux-shine {
        animation: crux-shine 1.5s ease-out forwards;
      }

      /* Pegasus animations */
      @keyframes pegasus-twinkle {
        0% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.1); }
        100% { opacity: 0.3; transform: scale(0.8); }
      }
      @keyframes pegasus-gallop {
        0% { transform: translate(0, 0); }
        25% { transform: translate(3px, -2px); }
        40% { transform: translate(5px, 2px); }
        60% { transform: translate(2px, 3px); }
        75% { transform: translate(-2px, 1px); }
        100% { transform: translate(0, 0); }
      }
      .animate-pegasus-twinkle {
        animation: 
          pegasus-twinkle 2.7s ease-in-out infinite,
          pegasus-gallop 9s ease-in-out infinite;
      }
      @keyframes pegasus-fly {
        0% { transform: scaleX(0); opacity: 0; }
        80% { transform: scaleX(1) translateY(0); opacity: 0.7; }
        90% { transform: scaleX(1.05) translateY(-2px); opacity: 0.8; }
        100% { transform: scaleX(1) translateY(0); opacity: 0.7; }
      }
      .animate-pegasus-fly {
        animation: pegasus-fly 2s ease-out forwards;
      }

      /* Aquila animations */
      @keyframes aquila-center {
        0% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
        50% { opacity: 1; transform: translate(-50%, -50%) scale(1.3); }
        100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
      }
      .animate-aquila-center {
        animation: aquila-center 3s ease-in-out infinite;
      }
      @keyframes aquila-wing {
        0% { opacity: 0.3; transform: scale(0.8); }
        40% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.3; transform: scale(0.8); }
      }
      .animate-aquila-wing {
        animation: aquila-wing 2.5s ease-in-out infinite;
      }
      @keyframes aquila-head {
        0% { opacity: 0.4; transform: translateX(-50%) scale(0.9); }
        50% { opacity: 1; transform: translateX(-50%) scale(1.2); }
        100% { opacity: 0.4; transform: translateX(-50%) scale(0.9); }
      }
      .animate-aquila-head {
        animation: aquila-head 2.8s ease-in-out infinite;
      }
      @keyframes aquila-tail {
        0% { opacity: 0.4; transform: translateX(-50%) scale(0.9); }
        50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
        100% { opacity: 0.4; transform: translateX(-50%) scale(0.9); }
      }
      .animate-aquila-tail {
        animation: aquila-tail 3.2s ease-in-out infinite;
      }
      @keyframes aquila-soar {
        0% { transform: scaleX(0); opacity: 0; }
        100% { transform: scaleX(1); opacity: 0.7; }
      }
      .animate-aquila-soar {
        animation: aquila-soar 1.4s ease-out forwards;
      }

      /* Draco animations */
      @keyframes draco-slither {
        0% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
        100% { opacity: 0.3; transform: scale(0.8); }
      }
      @keyframes draco-serpent {
        0% { transform: translate(0, 0); }
        20% { transform: translate(2px, 3px); }
        40% { transform: translate(4px, -2px); }
        60% { transform: translate(1px, -4px); }
        80% { transform: translate(-3px, -1px); }
        100% { transform: translate(0, 0); }
      }
      .animate-draco-slither:nth-child(1) {
        animation: 
          draco-slither 3s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite;
      }
      .animate-draco-slither:nth-child(2) {
        animation: 
          draco-slither 3.2s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite 0.5s;
      }
      .animate-draco-slither:nth-child(3) {
        animation: 
          draco-slither 3.4s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite 1s;
      }
      .animate-draco-slither:nth-child(4) {
        animation: 
          draco-slither 3.6s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite 1.5s;
      }
      .animate-draco-slither:nth-child(5) {
        animation: 
          draco-slither 3.8s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite 2s;
      }
      .animate-draco-slither:nth-child(6) {
        animation: 
          draco-slither 4s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite 2.5s;
      }
      .animate-draco-slither:nth-child(7) {
        animation: 
          draco-slither 4.2s ease-in-out infinite,
          draco-serpent 15s ease-in-out infinite 3s;
      }
      @keyframes draco-wind {
        0% { transform: scaleX(0) rotate(0deg); opacity: 0; }
        80% { transform: scaleX(1) rotate(0deg); opacity: 0.7; }
        90% { transform: scaleX(1.05) rotate(2deg); opacity: 0.8; }
        100% { transform: scaleX(1) rotate(0deg); opacity: 0.7; }
      }
      .animate-draco-wind {
        animation: draco-wind 2.2s ease-out forwards;
        transform-origin: left center;
      }

      /* Leo animations */
      @keyframes leo-twinkle {
        0%, 100% { opacity: 0.3; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      @keyframes leo-roar {
        0% { transform: scaleY(0.7) rotate(var(--rotate, 0deg)); opacity: 0; }
        50% { transform: scaleY(1.3) rotate(var(--rotate, 0deg)); opacity: 1; }
        100% { transform: scaleY(0.7) rotate(var(--rotate, 0deg)); opacity: 0; }
      }
      .animate-leo-twinkle {
        animation: leo-twinkle 3s infinite;
      }
      .animate-leo-roar {
        --rotate: attr(rotate);
        animation: leo-roar 4s infinite;
      }

      /* Ursa Minor animation */
      @keyframes ursa-minor-rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      .animate-ursa-minor-rotate {
        animation: ursa-minor-rotate 20s linear infinite;
      }

      /* Taurus animations */
      @keyframes taurus-pulse {
        0%, 100% { opacity: 0.4; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.3); }
      }
      @keyframes taurus-charge {
        0% { transform: translateX(-5px) translateY(0) rotate(var(--rotate, 0deg)); opacity: 0.3; }
        50% { transform: translateX(5px) translateY(0) rotate(var(--rotate, 0deg)); opacity: 1; }
        100% { transform: translateX(-5px) translateY(0) rotate(var(--rotate, 0deg)); opacity: 0.3; }
      }
      .animate-taurus-pulse {
        animation: taurus-pulse 2.5s infinite;
      }
      .animate-taurus-charge {
        --rotate: attr(rotate);
        animation: taurus-charge 2s infinite;
      }

      /* Andromeda animations */
      @keyframes andromeda-twinkle {
        0%, 100% { opacity: 0.3; transform: scale(0.9); }
        50% { opacity: 1; transform: scale(1.1); }
      }
      @keyframes andromeda-chain {
        0% { transform: scaleX(0.8) rotate(45deg); opacity: 0.3; }
        50% { transform: scaleX(1.2) rotate(45deg); opacity: 0.8; }
        100% { transform: scaleX(0.8) rotate(45deg); opacity: 0.3; }
      }
      .animate-andromeda-twinkle {
        animation: andromeda-twinkle 3s infinite;
      }
      .animate-andromeda-chain {
        animation: andromeda-chain 4s infinite;
      }

      /* Lyra animations */
      @keyframes lyra-shine {
        0%, 100% { opacity: 0.4; filter: blur(1px); }
        50% { opacity: 1; filter: blur(0px); }
      }

      @keyframes lyra-strum {
        0% { transform: scaleY(0.7) rotate(var(--rotate, 0deg)); opacity: 0.2; }
        30% { transform: scaleY(1.2) rotate(var(--rotate, 0deg)); opacity: 0.8; }
        60% { transform: scaleY(0.9) rotate(var(--rotate, 0deg)); opacity: 0.5; }
        100% { transform: scaleY(0.7) rotate(var(--rotate, 0deg)); opacity: 0.2; }
      }
      .animate-lyra-shine {
        animation: lyra-shine 3s infinite;
      }
      .animate-lyra-strum {
        --rotate: attr(rotate);
        animation: lyra-strum 5s infinite;
      }

      /* Hydrus animations */
      @keyframes hydrus-flow {
        0% { opacity: 0.3; transform: translateY(-3px); }
        50% { opacity: 1; transform: translateY(3px); }
        100% { opacity: 0.3; transform: translateY(-3px); }
      }
      @keyframes hydrus-ripple {
        0% { transform: scale(0.8) rotate(var(--rotate, 0deg)); opacity: 0.2; }
        50% { transform: scale(1.2) rotate(var(--rotate, 0deg)); opacity: 0.7; }
        100% { transform: scale(0.8) rotate(var(--rotate, 0deg)); opacity: 0.2; }
      }
      .animate-hydrus-flow {
        animation: hydrus-flow 4s infinite;
      }
      .animate-hydrus-ripple {
        --rotate: attr(rotate);
        animation: hydrus-ripple 4s infinite;
      }

      /* Fornax animations */
      @keyframes fornax-glow {
        0%, 100% { opacity: 0.4; box-shadow: 0 0 5px 2px rgba(244, 63, 94, 0.3); }
        50% { opacity: 1; box-shadow: 0 0 8px 4px rgba(244, 63, 94, 0.6); }
      }
      @keyframes fornax-heat {
        0% { transform: scaleY(0.7) rotate(var(--rotate, 0deg)); opacity: 0.2; }
        50% { transform: scaleY(1.3) rotate(var(--rotate, 0deg)); opacity: 0.7; }
        100% { transform: scaleY(0.7) rotate(var(--rotate, 0deg)); opacity: 0.2; }
      }
      .animate-fornax-glow {
        animation: fornax-glow 3s infinite;
      }
      .animate-fornax-heat {
        --rotate: attr(rotate);
        animation: fornax-heat 4s infinite;
      }
    `}</style>
    </div>
    )
}
export default ConstellationsPage;