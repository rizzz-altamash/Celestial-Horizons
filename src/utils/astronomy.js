// utils/astronomy.js
export const calculateSiderealTime = (date, longitude) => {
    // Calculate local sidereal time at the given date and longitude
    // This is a simplification - real calculations are more complex
    const d = Math.floor(date.getTime() / 86400000) - 10957;
    const UT = date.getUTCHours() + date.getUTCMinutes() / 60;
    const T = d / 36525;
    const T0 = 6.697374558 + 2400.051336 * T + 0.000025862 * T * T;
    const GST = (T0 + UT * 1.002737909) % 24;
    const LST = (GST + longitude / 15) % 24;
    return LST;
  };
  
  export const equatorialToHorizontal = (ra, dec, latitude, localSiderealTime) => {
    // Convert right ascension and declination to altitude and azimuth
    // Based on the observer's latitude and the local sidereal time
    
    // Convert to radians
    const latRad = latitude * Math.PI / 180;
    const decRad = dec * Math.PI / 180;
    const ha = (localSiderealTime - ra) * 15 * Math.PI / 180;
    
    // Calculate altitude
    const sinAlt = Math.sin(decRad) * Math.sin(latRad) + 
                  Math.cos(decRad) * Math.cos(latRad) * Math.cos(ha);
    const alt = Math.asin(sinAlt);
    
    // Calculate azimuth
    const cosAz = (Math.sin(decRad) - Math.sin(alt) * Math.sin(latRad)) / 
                 (Math.cos(alt) * Math.cos(latRad));
    let az = Math.acos(Math.max(-1, Math.min(1, cosAz)));
    
    if (Math.sin(ha) > 0) {
      az = 2 * Math.PI - az;
    }
    
    // Convert back to degrees
    return {
      altitude: alt * 180 / Math.PI,
      azimuth: az * 180 / Math.PI
    };
  };
  
  export const horizontalToCanvas = (alt, az, canvasWidth, canvasHeight, zoom) => {
    // Project altitude and azimuth onto the 2D canvas
    // Using a stereographic projection centered on zenith
    
    // Skip stars below the horizon
    if (alt < 0) return null;
    
    // Convert to radians
    const altRad = alt * Math.PI / 180;
    const azRad = az * Math.PI / 180;
    
    // Stereographic projection
    const r = (90 - alt) / 90 * Math.min(canvasWidth, canvasHeight) / 2 / zoom;
    
    // Calculate x and y
    const x = canvasWidth / 2 + r * Math.sin(azRad);
    const y = canvasHeight / 2 - r * Math.cos(azRad);
    
    return { x, y };
  };