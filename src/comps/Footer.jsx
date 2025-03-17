import { useState } from "react";

const Footer = () => {
    const [hoverIcon, setHoverIcon] = useState(null);

    // Social media data with URLs
    const socialMedia = [
        { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/md-altamash-rizwi-1865b2322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        { icon: "instagram", label: "Instagram", url: "https://instagram.com/rizzz_altamash/" },
        { icon: "twitter", label: "Twitter", url: "https://twitter.com/yourusername" },
        { icon: "facebook", label: "Facebook", url: "https://facebook.com/share/193L6U7aHQ/" }
    ];
    
    return (
      <footer className="relative text-white py-16 overflow-hidden">
        {/* Background effect - extending the nebula theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/70 z-0"></div>
        
        <div className="container mx-auto px-4 relative">
          {/* Divider with star element */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-1/4 bg-gradient-to-r from-transparent to-purple-500/70"></div>
            <div className="mx-4 relative">
              <span className="text-2xl">★</span>
              <div className="absolute inset-0 rounded-full animate-pulse-slow bg-purple-500/30"></div>
            </div>
            <div className="h-px w-1/4 bg-gradient-to-l from-transparent to-purple-500/70"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* About column */}
            <div className="md:col-span-2">
              <h4 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Celestial Horizons
              </h4>
              <p className="text-purple-200 mb-6 leading-relaxed">
                Explore the wonders of the universe through interactive lessons, ancient mythology, and modern astronomy. 
                Our mission is to make the cosmos accessible to everyone.
              </p>
              <div className="flex space-x-4 mt-9">
                {socialMedia.map((social) => (
                  <a 
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-purple-900/50 hover:bg-purple-700/60 border border-purple-500/30 flex items-center justify-center transition-all duration-300 relative"
                    onMouseEnter={() => setHoverIcon(social.icon)}
                    onMouseLeave={() => setHoverIcon(null)}
                  >
                    <span className="text-md font-bold">
                      {social.icon === "linkedin" && "in"}
                      {social.icon === "instagram" && "IG"}
                      {social.icon === "twitter" && "𝕏"}
                      {social.icon === "facebook" && "f"}
                    </span>
                    {hoverIcon === social.icon && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-purple-800/90 text-xs rounded-md whitespace-nowrap">
                        {social.label}
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-800/90 rotate-45"></div>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
            <h4 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Explore Our Websites
              </h4>
              <ul className="space-y-2">
                {[
                  "Coming Soon ...",
                  "Coming Soon ...",
                  "Coming Soon ..."
                ].map((link, index) => (
                  <li key={index}>
                    <a 
                      // href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-300 hover:text-purple-100 transition-colors duration-300 flex items-center"
                    >
                      <span className="inline-block mr-2 text-xs">✦</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
            <h4 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="text-purple-300 flex items-start">
                  <div className="mr-3 w-6 h-6 rounded-full bg-purple-800/40 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <span className="text-xs">✉</span>
                  </div>
                  <span>rizzzaltamash@gmail.com</span>
                </li>
                <li className="text-purple-300 flex items-start">
                  <div className="mr-3 w-6 h-6 rounded-full bg-purple-800/40 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <span className="text-xs">☎</span>
                  </div>
                  <span>+91 6206449674</span>
                </li>
                <li className="text-purple-300 flex items-start">
                  <div className="mr-3 w-6 h-6 rounded-full bg-purple-800/40 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <span className="text-xs">🏢</span>
                  </div>
                  <span>Observatory Hill, 35 Stellar Avenue<br />Cosmic City, Universe 786</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Newsletter Signup */}
          {/* <div className="nebula-card p-6 rounded-2xl mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h4 className="text-xl font-semibold mb-2 text-purple-200">Join Our Cosmic Journey</h4>
                <p className="text-purple-300">Get the latest astronomy events and educational content.</p>
              </div>
              <div className="flex flex-col sm:flex-row w-full md:w-auto sm:items-center">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 bg-purple-900/40 border border-purple-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white placeholder-purple-400 mb-3 sm:mb-0 sm:mr-2 w-full sm:w-auto"
                />
                <button className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg transition-colors duration-300 font-medium w-full sm:w-auto">
                  Subscribe
                </button>
              </div>
            </div>
          </div> */}
          
          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-purple-500/30">
            <div className="text-purple-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Celestial Horizons. All rights reserved. 
            </div>
            <div className="flex space-x-6">
              {["Terms", "Privacy", "Cookies", "Sitemap"].map((item, index) => (
                <a 
                  key={index} 
                  // href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-purple-400 hover:text-purple-200 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
        }
        
        @keyframes float-slow {
            0% { transform: translateY(0px) }
            50% { transform: translateY(-15px) }
            100% { transform: translateY(0px) }
        }
        
        @keyframes pulse-slow {
            0% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
            100% { opacity: 0.3; transform: scale(1); }
        }
        `}</style>
      </footer>
    );
};
  
export default Footer;