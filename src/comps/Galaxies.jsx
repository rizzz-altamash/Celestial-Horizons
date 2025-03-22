import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';

const GalaxiesPage = () => {

  useGSAP(()=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".galaxyheading",{
      y:100,
      opacity:0,
      scale:1.5,
      duration:1.5,
      scrollTrigger:{
        trigger:".galaxyheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".galaxyintro",{
      opacity:0,
      scale:0.5,
      duration:1.5,
      scrollTrigger:{
        trigger:".galaxyintro",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".galaxytypeheading",{
      y:50,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".galaxytypeheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".spiralgal",{
      x:-200,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".spiralgal",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".ellipticalgal",{
      x:200,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".ellipticalgal",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".irregulargal",{
      x:-250,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".irregulargal",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".lenticulargal",{
      x:250,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".lenticulargal",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".galcyclyheading",{
      y:100,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".galcyclyheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".timelineconnector3",{
      opacity:0,
      scale:0.5,
      duration:1.5,
      scrollTrigger:{
        trigger:".timelineconnector3",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".dot3",{
      opacity:0,
      scale:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".dot3",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".formationdiv",{
      x:-200,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".formationdiv",
        markers:false,
        end:"top 70%",
        scrub:2,
      }
    })
    gsap.from(".evolutiondiv",{
      x:200,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".evolutiondiv",
        markers:false,
        end:"top 70%",
        scrub:2,
      }
    })
    gsap.from(".futurediv",{
      x:-200,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".futurediv",
        markers:false,
        end:"top 70%",
        scrub:2,
      }
    })
    gsap.from(".notablegalheading",{
      y:120,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".notablegalheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".milky",{
      x:700,
      y:500,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".milky",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".whirlpool",{
      x:-700,
      y:500,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".whirlpool",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".andromedagal",{
      y:300,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".andromedagal",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".sombrero",{
      x:200,
      y:-100,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".sombrero",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".cartwheel",{
      x:-200,
      y:-100,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".cartwheel",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".triangulum",{
      y:-150,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".triangulum",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".makesupgalheading",{
      y:100,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".makesupgalheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".makesupgaldiv",{
      y:200,
      opacity:0,
      scale:0.5,
      duration:1.5,
      scrollTrigger:{
        trigger:".makesupgaldiv",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".galobservingsheading",{
      y:50,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".galobservingsheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".bigdiv",{
      opacity:0,
      scale:0.7,
      duration:1.5,
      scrollTrigger:{
        trigger:".bigdiv",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".smalldiv",{
      x:900,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".smalldiv",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".moderndisheading",{
      y:150,
      opacity:0,
      scale:1.5,
      duration:1.5,
      scrollTrigger:{
        trigger:".moderndisheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".ultra",{
      x:-200,
      y:-150,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".ultra",
        markers:false,
        start:"top 75%",
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".blackhole",{
      x:200,
      y:-150,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".blackhole",
        markers:false,
        start:"top 75%",
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".gravitational",{
      x:-200,
      y:100,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".gravitational",
        markers:false,
        end:"top 75%",
        scrub:2,
      }
    })
    gsap.from(".radiobursts",{
      x:200,
      y:100,
      opacity:0,
      duration:1.5,
      scrollTrigger:{
        trigger:".radiobursts",
        markers:false,
        end:"top 75%",
        scrub:2,
      }
    })

    // Next Page 
    gsap.from(".academyheading",{
      y:100,
      opacity:0,
      scale:3,
      duration:1.5,
      scrollTrigger:{
        trigger:".academyheading",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".academypara",{
      y:100,
      opacity:0,
      scale:2,
      duration:1.5,
      scrollTrigger:{
        trigger:".academypara",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".conceptstab",{
      x:-200,
      y:100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".conceptstab",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".mythologytab",{
      y:100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".mythologytab",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
    gsap.from(".telescopetab",{
      x:200,
      y:100,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:".telescopetab",
        markers:false,
        end:"top 50%",
        scrub:2,
      }
    })
  })

  return (
    <div id='galaxies' className="relative text-white min-h-screen overflow-hidden">
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Page Title with cosmic glow effect */}
        <h1 className="galaxyheading text-4xl md:text-6xl font-bold mb-8 text-center">
          <span className="inline-block relative">
            The Mystery of Galaxies
            <span className="absolute -inset-1 blur-xl bg-purple-500/20 -z-10 rounded-full"></span>
          </span>
        </h1>
        
        {/* Introduction Section */}
        <section className="galaxyintro mb-16 max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 backdrop-blur-sm -z-10"></div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-200">What Are Galaxies?</h2>
            <p className="text-lg mb-4 leading-relaxed">
              Galaxies are vast cosmic islands composed of billions to trillions of stars, 
              along with gas, dust, dark matter, and planetary systems—all bound together 
              by gravity. They represent the fundamental large-scale structures of the observable universe.
            </p>
            <p className="text-lg leading-relaxed">
              Our own Milky Way is just one among an estimated two trillion galaxies in the 
              observable universe. These magnificent structures come in various shapes and sizes, 
              each telling a unique story of cosmic evolution spanning billions of years.
            </p>
          </div>
        </section>
        
        {/* Galaxy Classification Section */}
        <section className="mb-16">
          <h2 className="galaxytypeheading text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200">
            Types of Galaxies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="spiralgal cosmic-card bg-gradient-to-br from-blue-900/40 to-blue-700/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:from-blue-800/50 hover:to-blue-600/30 transition duration-300">
              <div className="cosmic-orb bg-blue-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-blue-300">Spiral Galaxies</h3>
              <p className="leading-relaxed">
                Characterized by a central bulge surrounded by flat, rotating disks of stars forming spiral arms. 
                Our own Milky Way is a spiral galaxy, as is the nearby Andromeda galaxy. 
                Spirals are actively forming new stars, especially within their arms.
              </p>
            </div>
            <div className="ellipticalgal cosmic-card bg-gradient-to-br from-yellow-900/40 to-yellow-700/20 p-6 rounded-2xl border border-yellow-500/30 backdrop-blur-sm hover:from-yellow-800/50 hover:to-yellow-600/30 transition duration-300">
              <div className="cosmic-orb bg-yellow-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-yellow-300">Elliptical Galaxies</h3>
              <p className="leading-relaxed">
                Appearing as featureless ellipsoids of stars with smooth light distributions. 
                They range from nearly spherical to highly elongated shapes and typically 
                contain older stars with little ongoing star formation. The largest galaxies 
                in the universe are giant ellipticals.
              </p>
            </div>
            <div className="irregulargal cosmic-card bg-gradient-to-br from-purple-900/40 to-purple-700/20 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:from-purple-800/50 hover:to-purple-600/30 transition duration-300">
              <div className="cosmic-orb bg-purple-400/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-purple-300">Irregular Galaxies</h3>
              <p className="leading-relaxed">
                Galaxies without a regular or symmetrical shape. They often result from 
                gravitational interactions or mergers with other galaxies. The Large and Small 
                Magellanic Clouds, satellite galaxies of the Milky Way, are examples of irregular 
                galaxies with chaotic structures.
              </p>
            </div>
            <div className="lenticulargal cosmic-card bg-gradient-to-br from-amber-800/40 to-amber-600/20 p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:from-amber-700/50 hover:to-amber-500/30 transition duration-300">
              <div className="cosmic-orb bg-amber-300/20 absolute top-4 right-4 w-12 h-12 rounded-full blur-xl -z-5"></div>
              <h3 className="text-xl font-medium mb-3 text-amber-200">Lenticular Galaxies</h3>
              <p className="leading-relaxed">
                Intermediate between spirals and ellipticals, these disc-shaped galaxies lack 
                spiral arms but contain a central bulge and disk. They have used up or lost most 
                of their interstellar matter, resulting in little new star formation, similar to 
                ellipticals but with the disk structure of spirals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Galaxy Formation and Evolution Section */}
        <section className="mb-16 max-w-5xl mx-auto">
          <h2 className="galcyclyheading text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200">The Life of Galaxies</h2>
          <div className="relative">
            {/* Timeline connector */}
            <div className="timelineconnector3 absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="grid grid-cols-1 gap-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="formationdiv md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-medium mb-3 text-blue-300">Formation</h3>
                  <div className="cosmic-card bg-gradient-to-br from-blue-800/40 to-blue-600/20 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Galaxies began forming about 13 billion years ago, shortly after the Big Bang. 
                      They emerged from density fluctuations in the early universe, where dark matter 
                      halos gravitationally attracted normal matter. The first galaxies were small 
                      and irregular, dominated by young, hot stars.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="dot3 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-500 border-2 border-white z-10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                <div className="evolutiondiv md:w-1/2 md:pl-8">
                  <h3 className="text-2xl font-medium mb-3 text-purple-300 md:text-left">Evolution</h3>
                  <div className="cosmic-card bg-gradient-to-br from-purple-800/40 to-purple-600/20 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      Over billions of years, galaxies grow through both star formation and mergers 
                      with other galaxies. These cosmic collisions can dramatically reshape galaxies, 
                      triggering bursts of star formation and feeding supermassive black holes at their 
                      centers. The Milky Way itself has consumed multiple smaller galaxies throughout its history.
                    </p>
                  </div>
                </div>
                <div className="dot3 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-purple-500 border-2 border-white z-10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="futurediv md:w-1/2 md:pr-8 mb-6 md:mb-0 md:text-right">
                  <h3 className="text-2xl font-medium mb-3 text-indigo-300">Future</h3>
                  <div className="cosmic-card bg-gradient-to-br from-indigo-800/40 to-indigo-600/20 p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm">
                    <p className="leading-relaxed">
                      The future of galaxies is one of continued mergers and evolution. Our own Milky Way 
                      is on a collision course with the Andromeda galaxy, expected to occur in about 4.5 
                      billion years. The two spirals will eventually merge into a single, massive elliptical 
                      galaxy. In the far distant future, as the universe continues to expand, galaxies beyond 
                      our local group will recede from view.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                <div className="dot3 absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-indigo-500 border-2 border-white z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Famous Galaxies Section with animations */}
        <section className="mb-16">
          <h2 className="notablegalheading text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200">Notable Galaxies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Milky Way - Spiral rotation */}
            <div className="milky cosmic-card relative p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm bg-gradient-to-br from-blue-900/40 to-transparent overflow-hidden group">
              <div className="absolute w-24 h-24 top-16 right-16 rounded-full border border-blue-400/30 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute w-36 h-36 top-10 right-10 rounded-full border border-blue-400/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute w-48 h-48 top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-full h-full rounded-full animate-milky-way-spin">
                  <div className="absolute w-full h-1 bg-blue-300/30 top-1/2 left-0 transform -translate-y-1/2 rounded-full blur-sm"></div>
                  <div className="absolute w-full h-1 bg-blue-300/30 top-1/2 left-0 transform -translate-y-1/2 rounded-full rotate-45 blur-sm"></div>
                  <div className="absolute w-full h-1 bg-blue-300/30 top-1/2 left-0 transform -translate-y-1/2 rounded-full rotate-90 blur-sm"></div>
                  <div className="absolute w-full h-1 bg-blue-300/30 top-1/2 left-0 transform -translate-y-1/2 rounded-full rotate-135 blur-sm"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-blue-200">The Milky Way</h3>
              <p className="leading-relaxed">Our home galaxy, a barred spiral containing 100-400 billion stars. The Milky Way spans approximately 100,000 light-years across and has a supermassive black hole called Sagittarius A* at its center.</p>
            </div>
            
            {/* Andromeda - Approaching animation */}
            <div className="andromedagal cosmic-card relative p-6 rounded-2xl border border-indigo-500/30 backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 to-transparent overflow-hidden group">
              <div className="absolute w-36 h-8 rotate-45 top-12 right-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-full h-full rounded-full animate-andromeda-approach">
                  <div className="absolute w-36 h-8 bg-indigo-400/20 rounded-full blur-[0.3rem] "></div>
                  <div className="absolute w-32 h-7 bg-indigo-400/20 rounded-full blur-[0.3rem] "></div>
                  <div className="absolute w-28 h-6 bg-indigo-400/20 rounded-full blur-[0.3rem] "></div>
                  <div className="absolute w-6 h-6 bg-indigo-400/30 rounded-full top-1 left-15 blur-[0.3rem] "></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-indigo-200">Andromeda Galaxy</h3>
              <p className="leading-relaxed">The closest spiral galaxy to the Milky Way, located about 2.5 million light-years away. It's the most massive galaxy in our Local Group and is on a collision course with the Milky Way.</p>
            </div>
            
            {/* Whirlpool Galaxy - Interaction animation */}
            <div className="whirlpool cosmic-card relative p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm bg-gradient-to-br from-green-900/40 to-transparent overflow-hidden group">
              <div className="absolute w-40 h-40 top-8 right-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-full h-full animate-whirlpool-spin">
                  <div className="absolute w-32 h-32 top-4 left-4 border border-green-400/30 rounded-full blur-sm"></div>
                  <div className="absolute w-5 h-5 bg-green-400/50 rounded-full top-0 left-18 blur-sm animate-whirlpool-companion"></div>
                  <div className="absolute w-full h-0.5 bg-green-300/40 top-1/2 left-0 transform rotate-0 blur-sm"></div>
                  <div className="absolute w-full h-0.5 bg-green-300/40 top-1/2 left-0 transform rotate-60 blur-sm"></div>
                  <div className="absolute w-full h-0.5 bg-green-300/40 top-1/2 left-0 transform rotate-120 blur-sm"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-green-200">Whirlpool Galaxy</h3>
              <p className="leading-relaxed">A grand-design spiral galaxy located about 23 million light-years away, famous for its clearly defined spiral arms and ongoing interaction with a smaller companion galaxy, creating a stunning cosmic dance.</p>
            </div>
            
            {/* Sombrero Galaxy - Tilted disk animation */}
            <div className="sombrero cosmic-card relative p-6 rounded-2xl border border-amber-500/30 backdrop-blur-sm bg-gradient-to-br from-amber-900/40 to-transparent overflow-hidden group">
              <div className="absolute w-48 h-16 top-10 right-4 opacity-50 group-hover:opacity-90 transition-opacity duration-500">
                <div className="absolute w-48 h-16 bg-amber-400/20 rounded-full blur-[0.3rem] transform animate-sombrero-tilt"></div>
                <div className="absolute w-12 h-12 bg-amber-700/30 rounded-full top-2 left-18 blur-[0.3rem]"></div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-amber-200">Sombrero Galaxy</h3>
              <p className="leading-relaxed">Distinguished by its bright nucleus, large central bulge, and a dramatic dust lane in its inclined disk, giving it the appearance of a sombrero hat. Located 28 million light-years away, it's a favorite target for astronomers.</p>
            </div>
            
            {/* Triangulum Galaxy - Periodic brightening */}
            <div className="triangulum cosmic-card relative p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm bg-gradient-to-br from-red-900/40 to-transparent overflow-hidden group">
              <div className="absolute w-36 h-36 top-8 right-8 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-full h-full animate-triangulum-rotate">
                  <div className="triangle-galaxy w-0 h-0 border-l-[25px] border-l-transparent border-b-[50px] border-b-red-300/30
                    border-r-[25px] border-r-transparent blur-[0.2rem] animate-triangulum-pulse"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-red-200">Triangulum Galaxy</h3>
              <p className="leading-relaxed">The third-largest member of our Local Group, this spiral galaxy features a loose, asymmetric spiral structure and is notable for its high rate of star formation. It lies about 2.7 million light-years from Earth.</p>
            </div>
            
            {/* Cartwheel Galaxy - Ripple effect animation */}
            <div className="cartwheel cosmic-card relative p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-900/40 to-transparent overflow-hidden group">
              <div className="absolute w-40 h-40 top-8 right-8 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute w-16 h-16 bg-purple-500/30 rounded-full top-12 left-12 blur-sm animate-cartwheel-center"></div>
                <div className="absolute w-32 h-32 border border-purple-400/40 rounded-full top-4 left-4 animate-cartwheel-ripple-1"></div>
                <div className="absolute w-40 h-40 border border-purple-400/30 rounded-full top-0 left-0 animate-cartwheel-ripple-2"></div>
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-purple-200">Cartwheel Galaxy</h3>
              <p className="leading-relaxed">A ring galaxy 500 million light-years away formed by a collision with a smaller galaxy. The impact created expanding ripples like dropping a stone in water, triggering waves of star formation that appear as bright blue rings.</p>
            </div>
          </div>
        </section>
        
        {/* Galaxy Composition Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="makesupgalheading text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200">What Makes Up a Galaxy?</h2>
          <div className="makesupgaldiv cosmic-card p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm bg-gradient-to-br from-purple-900/40 to-purple-700/10 relative overflow-hidden">
            <div className="cosmic-particles absolute inset-0 -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-xl font-medium mb-2 text-purple-300">Visible Components</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block mt-1.5 w-4 h-4 mr-3 bg-blue-500 rounded-full opacity-80"></span>
                    <span className="flex-1"><strong className="text-blue-300">Stars:</strong> From newborns to ancient stars, they make up the visible light of galaxies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mt-1.5 w-4 h-4 mr-3 bg-amber-500 rounded-full opacity-80"></span>
                    <span className="flex-1"><strong className="text-amber-300">Dust:</strong> Tiny solid particles that absorb and scatter light, often visible as dark lanes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mt-1.5 w-4 h-4 mr-3 bg-purple-500 rounded-full opacity-80"></span>
                    <span className="flex-1"><strong className="text-purple-300">Gas:</strong> Primarily hydrogen and helium, the fuel for new star formation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mt-1.5 w-4 h-4 mr-3 bg-green-500 rounded-full opacity-80"></span>
                    <span className="flex-1"><strong className="text-green-300">Planetary Systems:</strong> Stars orbited by planets, asteroids, and comets</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium mb-2 text-indigo-300">Invisible Components</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block mt-2 w-4 h-4 mr-3 bg-gray-500 rounded-full opacity-80 border border-white/30"></span>
                    <span className="flex-1"><strong className="text-gray-400">Dark Matter:</strong> Invisible material that makes up about 85% of a galaxy's mass</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mt-2 w-4 h-4 mr-3 bg-indigo-500 rounded-full opacity-80 border border-white/30"></span>
                    <span className="flex-1"><strong className="text-indigo-300">Dark Energy:</strong> The mysterious force driving the accelerating expansion of the universe</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mt-2 w-4.5 h-4.5 mr-3 bg-black rounded-full opacity-80 border border-white/30"></span>
                    <span className="flex-1"><strong className="text-gray-200">Black Holes:</strong> Supermassive black holes exist at the center of most galaxies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block mt-2 w-4 h-4 mr-3 bg-red-500 rounded-full opacity-80 border border-white/30"></span>
                    <span className="flex-1"><strong className="text-red-300">Radiation:</strong> Various forms of electromagnetic radiation beyond visible light</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Observing Galaxies */}
        <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="galobservingsheading text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200">Observing Galaxies</h2>
        <div className="bigdiv glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-purple-900/10 backdrop-blur-sm -z-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h3 className="text-xl font-medium mb-4 text-indigo-300">How Astronomers Study Galaxies</h3>
                <ul className="space-y-3">
                <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-indigo-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Multi-wavelength observations across the electromagnetic spectrum</span>
                </li>
                <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-indigo-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Radio telescopes to detect hydrogen gas and magnetic fields</span>
                </li>
                <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-indigo-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Infrared instruments to see through dust and detect cooler objects</span>
                </li>
                <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-indigo-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Space telescopes like Hubble and James Webb for unobstructed views</span>
                </li>
                <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-indigo-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Spectroscopy to determine composition, motion, and distance</span>
                </li>
                </ul>
            </div>
            
            <div className="smalldiv relative">
                <h3 className="text-xl font-medium mb-4 text-blue-300">For Amateur Astronomers</h3>
                <div className="cosmic-card bg-gradient-to-br from-blue-900/40 to-blue-700/10 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm relative overflow-hidden group">
                {/* Telescope animation */}
                <div className="absolute right-4 top-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute w-2 h-12 bg-gray-300/50 right-7 top-2 rounded-full transform rotate-45"></div>
                    <div className="absolute w-8 h-3 bg-gray-400/50 right-4 top-12 rounded-full transform -rotate-45 animate-telescope-pan"></div>
                </div>
                
                <ul className="space-y-3 relative z-10">
                    <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-blue-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Start with binoculars to view the Andromeda Galaxy</span>
                    </li>
                    <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-blue-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Small telescopes can reveal galaxy shapes and structures</span>
                    </li>
                    <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-blue-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Dark sky locations greatly improve galaxy visibility</span>
                    </li>
                    <li className="flex items-start">
                    <span className="inline-block w-4 h-4 mt-1 mr-3 bg-blue-500 rounded-full opacity-80"></span>
                    <span className="flex-1">Digital astrophotography can capture details invisible to the eye</span>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </section>

        {/* Modern Discoveries Section with Animations */}
        <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="moderndisheading text-2xl md:text-3xl font-semibold mb-8 text-center text-purple-200">Modern Galactic Discoveries</h2>
        <div className="relative">
            {/* <div className="absolute w-full h-full -z-5 opacity-20">
            <div className="absolute w-2 h-2 bg-white rounded-full top-1/4 left-1/4 animate-expand-slow"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full top-3/4 left-1/2 animate-expand-medium"></div>
            <div className="absolute w-2 h-2 bg-white rounded-full top-1/2 left-3/4 animate-expand-fast"></div>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="ultra cosmic-card bg-gradient-to-br from-purple-900/40 to-purple-700/10 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm hover:from-purple-800/50 hover:to-purple-600/30 transition duration-300 group overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 blur-[0.05rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-full h-full rounded-full bg-purple-500/20 animate-pulse-slow"></div>
                <div className="absolute w-32 h-32 rounded-full border border-purple-400/70 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-betelgeuse-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-purple-300">Ultra-Diffuse Galaxies</h3>
                <p className="leading-relaxed">
                Recently discovered galaxies with the mass of the Milky Way but spread over a much larger area, 
                making them extremely faint. These galaxies challenge our understanding of galaxy formation and 
                dark matter distribution.
                </p>
            </div>
            
            <div className="blackhole cosmic-card bg-gradient-to-br from-blue-900/40 to-blue-700/10 p-6 rounded-2xl border border-blue-500/30 backdrop-blur-sm hover:from-blue-800/50 hover:to-blue-600/30 transition duration-300 group">
                <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-8 h-8 absolute top-1.75 left-2 rounded-full border border-blue-400/50 animate-rotate-slow blur-[0.05rem]"></div>
                <div className="w-12 h-1 absolute top-5 left-0 bg-blue-500/30 rounded-full blur-[0.1rem]"></div>
                <div className="absolute blur-[0.1rem] w-3 h-3 bg-blue-500 rounded-full top-4 right-4.5 animate-proxima-binary opacity-50 group-hover:opacity-80 transition-opacity duration-500 shadow-glow-green"></div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-blue-300">First Black Hole Image</h3>
                <p className="leading-relaxed">
                In 2019, the Event Horizon Telescope collaboration captured the first image of a 
                supermassive black hole at the center of the galaxy M87, confirming Einstein's 
                predictions and providing unprecedented insight into these cosmic engines.
                </p>
            </div>
            
            <div className="gravitational cosmic-card bg-gradient-to-br from-green-900/40 to-green-700/10 p-6 rounded-2xl border border-green-500/30 backdrop-blur-sm hover:from-green-800/50 hover:to-green-600/30 transition duration-300 group">
                <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-12 h-1 bg-green-400/50 rounded-full absolute top-6 animate-wave-slow"></div>
                <div className="w-12 h-1 bg-green-400/30 rounded-full absolute top-10 animate-wave-slower"></div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-green-300">Gravitational Waves</h3>
                <p className="leading-relaxed">
                Detections of gravitational waves from merging black holes and neutron stars 
                have opened a new era of multi-messenger astronomy, allowing scientists to study 
                violent galactic events in unprecedented detail.
                </p>
            </div>
            
            <div className="radiobursts cosmic-card bg-gradient-to-br from-red-900/40 to-red-700/10 p-6 rounded-2xl border border-red-500/30 backdrop-blur-sm hover:from-red-800/50 hover:to-red-600/30 transition duration-300 group">
                <div className="absolute top-4 right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute w-2 h-2 bg-red-500/70 rounded-full top-2 left-2 animate-fast-blink"></div>
                <div className="absolute w-2 h-2 bg-red-500/70 rounded-full top-8 left-8 animate-medium-blink"></div>
                <div className="absolute w-2 h-2 bg-red-500/70 rounded-full top-2 left-8 animate-slow-blink"></div>
                </div>
                
                <h3 className="text-xl font-medium mb-3 text-red-300">Fast Radio Bursts</h3>
                <p className="leading-relaxed">
                Mysterious millisecond-duration bursts of radio waves from other galaxies. 
                Their exact origins remain unknown, but recent observations have linked some to 
                magnetars—highly magnetized neutron stars with extreme physics.
                </p>
            </div>
            </div>
        </div>
        </section>

    </div>

    <style jsx>{`
        /* Milky Way spiral rotation animation */
        @keyframes milky-way-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }

        .animate-milky-way-spin {
        animation: milky-way-spin 20s linear infinite;
        }

        /* Andromeda approaching animation */
        @keyframes andromeda-approach {
        0% {
            transform: scale(0.85) translateX(10px);
            opacity: 0.4;
        }
        50% {
            opacity: 0.8;
        }
        100% {
            transform: scale(1) translateX(0);
            opacity: 0.6;
        }
        }

        .animate-andromeda-approach {
        animation: andromeda-approach 4s ease-in-out infinite alternate;
        }

        /* Whirlpool Galaxy spin and companion animation */
        @keyframes whirlpool-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }

        @keyframes whirlpool-companion {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(5px, 5px);
        }
        100% {
            transform: translate(0, 0);
        }
        }

        .animate-whirlpool-spin {
        animation: whirlpool-spin 15s linear infinite;
        }

        .animate-whirlpool-companion {
        animation: whirlpool-companion 8s ease-in-out infinite;
        }

        /* Sombrero Galaxy tilt animation */
        @keyframes sombrero-tilt {
        0% {
            transform: perspective(500px) rotateX(45deg) scaleY(0.2);
        }
        50% {
            transform: perspective(500px) rotateX(55deg) scaleY(0.25);
        }
        100% {
            transform: perspective(500px) rotateX(45deg) scaleY(0.2);
        }
        }

        .animate-sombrero-tilt {
        animation: sombrero-tilt 6s ease-in-out infinite;
        }

        /* Triangulum Galaxy animation */
        @keyframes triangulum-rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
        }

        @keyframes triangulum-pulse {
        0% {
            opacity: 0.4;
            transform: scale(0.9);
        }
        50% {
            opacity: 0.8;
            transform: scale(1.1);
        }
        100% {
            opacity: 0.4;
            transform: scale(0.9);
        }
        }

        .animate-triangulum-rotate {
        animation: triangulum-rotate 25s linear infinite;
        }

        .animate-triangulum-pulse {
        animation: triangulum-pulse 4s ease-in-out infinite;
        }

        /* Cartwheel Galaxy ripple animation */
        @keyframes cartwheel-center {
        0% {
            opacity: 0.5;
            transform: scale(0.8);
        }
        50% {
            opacity: 0.9;
            transform: scale(1.1);
        }
        100% {
            opacity: 0.5;
            transform: scale(0.8);
        }
        }

        @keyframes cartwheel-ripple-1 {
        0% {
            transform: scale(0.8);
            opacity: 0.7;
        }
        50% {
            transform: scale(1);
            opacity: 0.5;
        }
        100% {
            transform: scale(0.8);
            opacity: 0.7;
        }
        }

        @keyframes cartwheel-ripple-2 {
        0% {
            transform: scale(0.85);
            opacity: 0.5;
        }
        50% {
            transform: scale(1.05);
            opacity: 0.3;
        }
        100% {
            transform: scale(0.85);
            opacity: 0.5;
        }
        }

        .animate-cartwheel-center {
        animation: cartwheel-center 5s ease-in-out infinite;
        }

        .animate-cartwheel-ripple-1 {
        animation: cartwheel-ripple-1 6s ease-in-out infinite;
        }

        .animate-cartwheel-ripple-2 {
        animation: cartwheel-ripple-2 7s ease-in-out infinite;
        }

        // Recent Glactic Discoveries CSS 
        @keyframes expand {
          0% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(2); opacity: 0.8; }
          100% { transform: scale(0.8); opacity: 0.3; }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes wave {
          0% { transform: translateY(0) scaleX(0.8); }
          50% { transform: translateY(4px) scaleX(1.2); }
          100% { transform: translateY(0) scaleX(0.8); }
        }

        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes cosmic-pulse {
          0% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(139, 92, 246, 0); }
          100% { box-shadow: 0 0 0 0 rgba(139, 92, 246, 0); }
        }

        /* Animation utilities for Tailwind */
        .animate-expand-slow {
          animation: expand 8s infinite;
        }

        .animate-expand-medium {
          animation: expand 6s infinite;
        }

        .animate-expand-fast {
          animation: expand 4s infinite;
        }

        .animate-rotate-slow {
          animation: rotate 12s linear infinite;
        }

        .animate-wave-slow {
          animation: wave 4s ease-in-out infinite;
        }

        .animate-wave-slower {
          animation: wave 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-fast-blink {
          animation: blink 2s infinite;
        }

        .animate-medium-blink {
          animation: blink 3s infinite;
          animation-delay: 0.5s;
        }

        .animate-slow-blink {
          animation: blink 4s infinite;
          animation-delay: 1s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: cosmic-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
    `}</style>

    </div>
    )

}

export default GalaxiesPage;