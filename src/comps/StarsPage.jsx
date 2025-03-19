import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';

const StarsPage = () => {
  
  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".starheading",{
      y:100,
      opacity:0,
      scale:1.5,
      duration:300,
      scrollTrigger:{
        trigger:".starheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".starintro",{
      opacity:0,
      scale:0.5,
      duration:300,
      scrollTrigger:{
        trigger:".starintro",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".startypeheading",{
      y:50,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".startypeheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".mainsequencestars",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".mainsequencestars",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".redgiants",{
      x:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".redgiants",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".whitedwarfs",{
      x:-250,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".whitedwarfs",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".supergiants",{
      x:250,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".supergiants",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".starlifecycle",{
      y:100,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".starlifecycle",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".timelineconnector",{
      opacity:0,
      scale:0.5,
      duration:300,
      scrollTrigger:{
        trigger:".timelineconnector",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".dot1",{
      opacity:0,
      scale:0,
      duration:300,
      scrollTrigger:{
        trigger:".dot1",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".birthdiv",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".birthdiv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".lifediv",{
      x:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".lifediv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".deathdiv",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".deathdiv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".notablestarsheading",{
      y:50,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".notablestarsheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".sirius",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".sirius",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".polaris",{
      x:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".polaris",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".betelgeuse",{
      y:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".betelgeuse",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".vega",{
      x:-200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".vega",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".antares",{
      x:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".antares",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".proximacentauri",{
      y:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".proximacentauri",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".observingstarsheading",{
      y:50,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".observingstarsheading",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
    gsap.from(".stargazingdiv",{
      y:200,
      opacity:0,
      duration:300,
      scrollTrigger:{
        trigger:".stargazingdiv",
        markers:false,
        end:"top 50%",
        scrub:5,
      }
    })
  })

  return (
    <div id='stars' className="relative text-white min-h-screen overflow-hidden starpagegsap">
      
      {/* Gradient overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/40 via-purple-900/40 to-black/60 -z-5"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Title with cosmic glow effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center starheading">
          <span className="inline-block relative">
            The Wonders of Stars
            <span className="absolute -inset-1 blur-xl bg-blue-500/20 -z-10 rounded-full"></span>
          </span>
        </h1>
        
        {/* Introduction Section */}
        <section className="mb-16 max-w-4xl mx-auto starintro">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-900/10 backdrop-blur-sm -z-10"></div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">What Are Stars?</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Stars are luminous spheres of plasma held together by their own gravity. 
              They are the most widely recognized astronomical objects and are the 
              fundamental building blocks of galaxies.
            </p>
            <p className="text-lg leading-relaxed">
              Our own Sun is the star closest to Earth and provides the energy that 
              sustains life on our planet. But beyond our solar system, billions of 
              stars populate our galaxy, the Milky Way.
            </p>
          </div>
        </section>
        
        {/* Star Classification Section */}
        <section className="mb-16">
          <h2 className="startypeheading text-2xl md:text-3xl font-semibold mb-8 text-center text-blue-200">
            Types of Stars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mainsequencestars cosmic-card bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:from-blue-800/50 hover:to-blue-600/30 transition duration-300">
              <div className="cosmic-orb bg-blue-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-blue-300">Main Sequence Stars</h3>
              <p className="leading-relaxed">
                These are stars in the stable part of their life cycle, 
                fusing hydrogen into helium in their cores. Our Sun is a 
                main sequence star, producing energy through nuclear fusion.
              </p>
            </div>
            <div className="redgiants cosmic-card bg-gradient-to-br from-red-900/40 to-red-700/20 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm hover:from-red-800/50 hover:to-red-600/30 transition duration-300">
              <div className="cosmic-orb bg-red-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-red-300">Red Giants</h3>
              <p className="leading-relaxed">
                When a star depletes its hydrogen fuel, it expands into a 
                much larger, cooler, and more luminous star with a reddish hue.
                Betelgeuse is a famous example of a red giant.
              </p>
            </div>
            <div className="whitedwarfs cosmic-card bg-gradient-to-br from-gray-200/30 to-blue-100/10 p-6 rounded-2xl border border-gray-300/30 backdrop-blur-sm hover:from-gray-100/40 hover:to-blue-50/20 transition duration-300">
              <div className="cosmic-orb bg-white/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-gray-100">White Dwarfs</h3>
              <p className="leading-relaxed">
                These are the dense, collapsed remnants of stars that have 
                completed their normal life cycle but weren't massive enough 
                to become neutron stars. They're incredibly dense and hot.
              </p>
            </div>
            <div className="supergiants cosmic-card bg-gradient-to-br from-yellow-600/40 to-yellow-400/20 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm hover:from-yellow-500/50 hover:to-yellow-300/30 transition duration-300">
              <div className="cosmic-orb bg-yellow-300/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-yellow-200">Supergiants</h3>
              <p className="leading-relaxed">
                Extremely massive and luminous stars that are destined to 
                end their lives in spectacular supernova explosions. These rare 
                stellar giants can be hundreds of times the size of our Sun.
              </p>
            </div>
          </div>
        </section>
        
        {/* Star Life Cycle Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="starlifecycle text-2xl md:text-3xl font-semibold mb-8 text-center text-blue-200">The Life Cycle of Stars</h2>
          <div className="relative">
            {/* Timeline connector */}
            <div className="timelineconnector absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-red-500 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="birthdiv md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-medium mb-3 text-green-300">Birth</h3>
                  <div className="cosmic-card bg-gradient-to-br from-green-800/40 to-green-600/20 p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Stars form from dense regions within molecular clouds of gas 
                      and dust. Gravity pulls the matter inward, creating a protostar.
                      As gravity compresses the core, its temperature rises until 
                      nuclear fusion begins.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="dot1 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-500 border-2 border-white z-10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="lifediv md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-medium mb-3 text-blue-300 md:text-left">Life</h3>
                  <div className="cosmic-card bg-gradient-to-br from-blue-800/40 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Once fusion begins in the core, a star is born. It will spend 
                      most of its life on the main sequence, fusing hydrogen into helium.
                      The outward pressure from fusion balances the inward pull of 
                      gravity, creating a stable star.
                    </p>
                  </div>
                </div>
                <div className="dot1 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-2 border-white z-10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="deathdiv md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-medium mb-3 text-red-300">Death</h3>
                  <div className="cosmic-card bg-gradient-to-br from-red-800/40 to-red-600/20 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      How a star dies depends on its mass. Low-mass stars become white 
                      dwarfs, while massive stars explode as supernovas, potentially 
                      leaving behind neutron stars or black holes. In death, stars seed 
                      the universe with heavy elements essential for planets and life.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="dot1 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 border-2 border-white z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Famous Stars Section with unique animation styles */}
        <section className="mb-16">
          <h2 className="notablestarsheading text-2xl md:text-3xl font-semibold mb-8 text-center text-blue-200">Notable Stars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sirius - Classic orbital motion */}
            <div className="sirius cosmic-card relative p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-900/40 to-transparent overflow-hidden group">
              {/* <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm -z-10"></div> */}
              <div className="absolute w-24 h-24 rounded-full border border-blue-400/30 animate-orbit-sirius opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute w-40 h-40 rounded-full border border-blue-400/20 animate-orbit-sirius-slow opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-xl font-medium mb-2 text-blue-200">Sirius</h3>
              <p className="leading-relaxed">The brightest star in Earth's night sky, located in Canis Major. It's actually a binary star system, with Sirius A being twice as massive as our Sun.</p>
            </div>
            
            {/* Betelgeuse - Pulsating red giant */}
            <div className="betelgeuse cosmic-card relative p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm bg-gradient-to-br from-red-900/40 to-transparent overflow-hidden group">
              {/* <div className="absolute inset-0 bg-red-500/5 backdrop-blur-sm -z-10"></div> */}
              <div className="absolute w-16 h-16 rounded-full border border-red-400/40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-betelgeuse-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute w-32 h-32 rounded-full border border-red-400/30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-betelgeuse-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute w-48 h-48 rounded-full border border-red-400/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-betelgeuse-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute w-6 h-6 bg-red-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm shadow-glow-red opacity-0 group-hover:opacity-70 transition-opacity"></div>
              
              <h3 className="text-xl font-medium mb-2 text-red-200">Betelgeuse</h3>
              <p className="leading-relaxed">A red supergiant in Orion, one of the largest known stars. If placed in our solar system, it would extend beyond Jupiter's orbit.</p>
            </div>
            
            {/* Polaris - North Star with fixed position and twinkling rays */}
            <div className="polaris cosmic-card relative p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm bg-gradient-to-br from-yellow-900/40 to-transparent overflow-hidden group">
              {/* <div className="absolute inset-0 bg-yellow-500/5 backdrop-blur-sm -z-10"></div> */}
              <div className="star-position absolute top-1/3 left-2/3">
                {/* <div className="absolute w-4 h-4 bg-yellow-300 rounded-full animate-polaris-twinkle opacity-0 group-hover:opacity-100 transition-duration-500"></div> */}
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 -rotate-45 left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 rotate-45 left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 rotate-135 left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 rotate-[225deg] left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>

                <div className="absolute w-9 h-0.5 bg-yellow-300/30 -rotate-90 left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 rotate-90 left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 rotate-180 left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-9 h-0.5 bg-yellow-300/30 rotate-[0deg] left-20 top-0 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>




                <div className="absolute w-8 h-0.5 bg-yellow-300/30 -rotate-45 left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-8 h-0.5 bg-yellow-300/30 rotate-45 left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-8 h-0.5 bg-yellow-300/30 rotate-135 left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-8 h-0.5 bg-yellow-300/30 rotate-[225deg] left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>

                <div className="absolute w-8 h-0.5 bg-yellow-300/30 -rotate-90 left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-8 h-0.5 bg-yellow-300/30 rotate-90 left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-8 h-0.5 bg-yellow-300/30 rotate-180 left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
                <div className="absolute w-8 h-0.5 bg-yellow-300/30 rotate-[0deg] left-21 top-0.5 animate-polaris-rays opacity-0 group-hover:opacity-60 blur-[0.04rem] transition-duration-500 origin-left"></div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-yellow-200">Polaris</h3>
              <p className="leading-relaxed">The North Star, used for navigation for thousands of years. It appears stationary in the night sky because it's aligned with Earth's axis of rotation.</p>
            </div>
            
            {/* Vega - Spinning animation */}
            <div className="vega cosmic-card relative p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-900/40 to-transparent overflow-hidden group">
              {/* <div className="absolute inset-0 bg-purple-500/5 backdrop-blur-sm -z-10"></div> */}
              <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-6 h-6 bg-purple-400 rounded-full animate-vega-spin blur-xs opacity-50 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute w-16 h-16 rounded-full border border-purple-400/40 animate-vega-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="star-points">
                  <div className="absolute w-12 h-1 bg-purple-300/50 -translate-x-1/2 rotate-0 animate-vega-spin opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute w-12 h-1 bg-purple-300/50 -translate-x-1/2 rotate-45 animate-vega-spin opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute w-12 h-1 bg-purple-300/50 -translate-x-1/2 rotate-90 animate-vega-spin opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                  <div className="absolute w-12 h-1 bg-purple-300/50 -translate-x-1/2 rotate-135 animate-vega-spin opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-purple-200">Vega</h3>
              <p className="leading-relaxed">One of the brightest stars in the northern hemisphere, in the constellation Lyra. It was once our North Star and will be again in about 12,000 years.</p>
            </div>
            
            {/* Proxima Centauri - Binary system motion */}
            <div className="proximacentauri cosmic-card relative p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm bg-gradient-to-br from-green-900/40 to-transparent overflow-hidden group">
              {/* <div className="absolute inset-0 bg-green-500/5 backdrop-blur-sm -z-10"></div> */}
              <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2">
                <div className="absolute w-15 h-15 -top-3 left-10 rounded-full border border-green-400/50 animate-proxima-orbit opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute blur-[0.05rem] w-3 h-3 bg-green-500 rounded-full -top-1.5 animate-proxima-binary opacity-50 group-hover:opacity-80 transition-opacity duration-500 shadow-glow-green"></div>
                  <div className="absolute blur-[0.05rem] w-2 h-2 bg-green-300 rounded-full -bottom-1 animate-proxima-binary opacity-50 group-hover:opacity-80 transition-opacity duration-500 shadow-glow-green delay-150"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-green-200">Proxima Centauri</h3>
              <p className="leading-relaxed">The closest star to our solar system, part of the Alpha Centauri system. It's a small red dwarf star with at least one exoplanet in its habitable zone.</p>
            </div>
            
            {/* Antares - Supernova-like pulsing waves */}
            <div className="antares cosmic-card relative p-6 rounded-2xl border border-orange-500/30 backdrop-blur-sm bg-gradient-to-br from-orange-900/40 to-transparent overflow-hidden group">
              {/* <div className="absolute inset-0 bg-orange-500/5 backdrop-blur-sm -z-10"></div> */}
              <div className="absolute top-1/3 right-1/3">
                {/* <div className="absolute blur-[0.05rem] w-5 h-5 bg-orange-500 rounded-full animate-antares-glow opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div> */}
                <div className="absolute blur-[0.05rem] w-5 h-5 bg-orange-500/80 rounded-full animate-antares-wave opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-0"></div>
                <div className="absolute blur-[0.05rem] w-5 h-5 bg-orange-500/60 rounded-full animate-antares-wave opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-300"></div>
                <div className="absolute blur-[0.05rem] w-5 h-5 bg-orange-500/40 rounded-full animate-antares-wave opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-600"></div>
                <div className="absolute blur-[0.05rem] w-5 h-5 bg-orange-500/20 rounded-full animate-antares-wave opacity-0 group-hover:opacity-90 transition-opacity duration-500 delay-900"></div>


                <div className="absolute w-32 h-32 rounded-full border border-orange-400/30 top-25 -left-77 -translate-x-1/2 -translate-y-1/2 animate-betelgeuse-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute w-48 h-48 rounded-full border border-orange-400/20 top-25 -left-77 -translate-x-1/2 -translate-y-1/2 animate-betelgeuse-pulse-slow opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-orange-200">Antares</h3>
              <p className="leading-relaxed">A red supergiant star in the heart of the constellation Scorpius. Its name means "rival of Mars" due to its reddish appearance similar to the red planet.</p>
            </div>
          </div>
        </section>
        
        {/* Observation Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="observingstarsheading text-2xl md:text-3xl font-semibold mb-8 text-center text-blue-200">Observing Stars</h2>
          <div className="stargazingdiv cosmic-card p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-900/40 to-blue-700/10 relative overflow-hidden">
            <div className="cosmic-particles absolute inset-0 -z-10"></div>
            <h3 className="text-xl font-medium mb-4 text-blue-300">Tips for Stargazing</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block mt-1.75 w-3 h-3 mr-3 bg-blue-400 rounded-full opacity-80"></span>
                <span className="flex-1">Find a dark location away from city lights to minimize light pollution</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mt-1.75 w-3 h-3 mr-3 bg-blue-400 rounded-full opacity-80"></span>
                <span className="flex-1">Allow your eyes at least 20 minutes to fully adjust to the darkness</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mt-1.75 w-3 h-3 mr-3 bg-blue-400 rounded-full opacity-80"></span>
                <span className="flex-1">Use red light to preserve your night vision when checking maps or equipment</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mt-1.75 w-3 h-3 mr-3 bg-blue-400 rounded-full opacity-80"></span>
                <span className="flex-1">Start with binoculars before investing in a telescope for wider field views</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mt-1.75 w-3 h-3 mr-3 bg-blue-400 rounded-full opacity-80"></span>
                <span className="flex-1">Download a star chart app to help identify constellations and stars</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block mt-1.75 w-3 h-3 mr-3 bg-blue-400 rounded-full opacity-80"></span>
                <span className="flex-1">Check the weather and moon phase before planning your stargazing session</span>
              </li>
            </ul>
          </div>
        </section>
        
        {/* For Future Update of R3F Star n Constellation Map */}
        {/* Call to Action */}
        {/* <div className="text-center mt-12 mb-24">
          <button className="relative group">
            <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-500"></span>
            <span className="relative px-8 py-4 bg-black rounded-lg leading-none flex items-center">
              <span className="text-blue-200 group-hover:text-blue-100 transition duration-200">Explore Our Interactive Star Map</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </span>
          </button>
        </div> */}
        
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
      /* Completely different orbit animation styles for each star */
        /* Sirius - classic circular orbit */
        @keyframes orbit-sirius {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        @keyframes orbit-sirius-slow {
          0% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
        }

        /* Betelgeuse - pulsating expansion */
        @keyframes betelgeuse-pulse {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }
        @keyframes betelgeuse-pulse-slow {
          0% { transform: scale(0.7); opacity: 0.2; }
          50% { transform: scale(1.3); opacity: 0.7; }
          100% { transform: scale(0.7); opacity: 0.2; }
        }

        /* Polaris - fixed position with twinkling effect */
        @keyframes polaris-twinkle {
          0%, 100% { opacity: 0.2; box-shadow: 0 0 5px 2px rgba(234, 179, 8, 0.3); }
          50% { opacity: 0.8; box-shadow: 0 0 15px 5px rgba(234, 179, 8, 0.6); }
        }
        @keyframes polaris-rays {
          0% { transform: rotate(0deg); opacity: 0.3; }
          100% { transform: rotate(360deg); opacity: 0.7; }
        }

        /* Vega - spinning star */
        @keyframes vega-spin {
          0% { transform: rotate(0deg) scale(1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes vega-orbit {
          0% { opacity: 0; }
          20% { opacity: 0.7; }
          80% { opacity: 0.7; }
          100% { opacity: 0; transform: rotate(360deg); }
        }

        /* Proxima Centauri - binary system */
        @keyframes proxima-binary {
          0% { transform: translateX(-15px); }
          50% { transform: translateX(15px); }
          100% { transform: translateX(-15px); }
        }
        @keyframes proxima-orbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Antares - supernova effect */
        @keyframes antares-wave {
          0% { transform: scale(0.2); opacity: 0.9; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes antares-glow {
          0% { opacity: 0.3; box-shadow: 0 0 8px 2px rgba(249, 115, 22, 0.3); }
          50% { opacity: 0.9; box-shadow: 0 0 20px 10px rgba(249, 115, 22, 0.7); }
          100% { opacity: 0.3; box-shadow: 0 0 8px 2px rgba(249, 115, 22, 0.3); }
        }



        /* Animation classes */
        .animate-orbit-sirius {
          animation: orbit-sirius 12s linear infinite;
        }
        .animate-orbit-sirius-slow {
          animation: orbit-sirius-slow 18s linear infinite;
        }

        .animate-betelgeuse-pulse {
          animation: betelgeuse-pulse 8s ease-in-out infinite;
        }
        .animate-betelgeuse-pulse-slow {
          animation: betelgeuse-pulse-slow 12s ease-in-out infinite;
        }

        .animate-polaris-twinkle {
          animation: polaris-twinkle 4s ease-in-out infinite;
        }
        .animate-polaris-rays {
          animation: polaris-rays 15s linear infinite;
        }

        .animate-vega-spin {
          animation: vega-spin 8s linear infinite;
        }
        .animate-vega-orbit {
          animation: vega-orbit 10s linear infinite;
        }

        .animate-proxima-binary {
          animation: proxima-binary 5s ease-in-out infinite;
        }
        .animate-proxima-orbit {
          animation: proxima-orbit 10s linear infinite;
        }

        .animate-antares-wave {
          animation: antares-wave 4s ease-out infinite;
        }
        .animate-antares-glow {
          animation: antares-glow 6s infinite;
        }




        .animate-orbit {
          animation: orbit 10s linear infinite;
        }
        .animate-orbit-slow {
          animation: orbit-slow 15s linear infinite;
        }
        
        /* Card styling */
        .cosmic-card {
          transition: all 0.3s ease;
        }
        .cosmic-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default StarsPage;