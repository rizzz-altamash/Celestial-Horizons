import { useState } from "react";

const Footer = () => {
    const [hoverIcon, setHoverIcon] = useState(null);

    // Social media data with URLs 
    const socialMedia = [
      { icon: "twitter", label: "Twitter", url: "https://x.com/rizzz_altamash?t=gZN05h6DQszTe1p9NcGD2g&s=09" },
      { icon: "instagram", label: "Instagram", url: "https://instagram.com/rizzz_altamash/" },
      { icon: "facebook", label: "Facebook", url: "https://www.facebook.com/share/1HKBT7CbJq/" },
      { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/md-altamash-rizwi-1865b2322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { icon: "github", label: "GitHub", url: "https://github.com/rizzz-altamash" },
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
                      {social.icon === "twitter" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
                        </svg>
                      )}
                      {social.icon === "instagram" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                        </svg>
                      )}
                      {social.icon === "facebook" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                      )}
                      {social.icon === "linkedin" && "in"}
                      {social.icon === "github" && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      )}
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
                Contact Me
              </h4>
              <ul className="space-y-4">
                <li className="text-purple-300 flex items-start">
                  <div className="mr-3 mt-0.5 w-6 h-6 rounded-full bg-purple-800/40 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </div>
                  <span>rizzzaltamash@gmail.com</span>
                </li>
                <li className="text-purple-300 flex items-start">
                  <div className="mr-3 w-6 h-6 rounded-full bg-purple-800/40 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <span>+91 6206449674</span>
                </li>
                <li className="text-purple-300 flex items-start">
                  <div className="mr-3 w-6 h-6 rounded-full bg-purple-800/40 flex items-center justify-center flex-shrink-0 border border-purple-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                      <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
                    </svg>
                  </div>
                  <span>177A Bleecker Street, 35 Stellar Avenue<br />Cosmic City, Earth-616, Universe 786</span>
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