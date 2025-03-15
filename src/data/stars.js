// data/stars.js
export const brightStars = [
    { name: "Sirius", ra: 6.7525, dec: -16.7161, magnitude: -1.46, constellation: "Canis Major" },
    { name: "Canopus", ra: 6.3992, dec: -52.6956, magnitude: -0.74, constellation: "Carina" },
    { name: "Rigil Kentaurus", ra: 14.6606, dec: -60.8353, magnitude: -0.27, constellation: "Centaurus" },
    { name: "Arcturus", ra: 14.2612, dec: 19.1847, magnitude: -0.04, constellation: "Boötes" },
    { name: "Vega", ra: 18.6157, dec: 38.7837, magnitude: 0.03, constellation: "Lyra" },
    { name: "Capella", ra: 5.2781, dec: 45.9999, magnitude: 0.08, constellation: "Auriga" },
    { name: "Rigel", ra: 5.2422, dec: -8.2017, magnitude: 0.13, constellation: "Orion" },
    { name: "Procyon", ra: 7.6552, dec: 5.2249, magnitude: 0.34, constellation: "Canis Minor" },
    { name: "Achernar", ra: 1.6285, dec: -57.2367, magnitude: 0.46, constellation: "Eridanus" },
    { name: "Betelgeuse", ra: 5.9194, dec: 7.4071, magnitude: 0.50, constellation: "Orion" },
    // Add more stars as needed
  ];
  
  // Add constellation line data
  export const constellationLines = [
    // Orion
    [
      { from: "Betelgeuse", to: "Bellatrix" },
      { from: "Bellatrix", to: "El Nath" },
      { from: "El Nath", to: "Rigel" },
      { from: "Rigel", to: "Saiph" },
      { from: "Saiph", to: "Betelgeuse" },
      // Add more lines for Orion's belt, etc.
    ],
    // Add more constellations
  ];