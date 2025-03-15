import React, { useState, useEffect, useRef } from 'react';

import { brightStars, constellationLines } from '../data/stars';
import { calculateSiderealTime, equatorialToHorizontal, horizontalToCanvas } from '../utils/astronomy';

const StarMap = () => {
  const canvasRef = useRef(null);
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0060 }); // Default: New York
  const [dateTime, setDateTime] = useState(new Date());
  const [zoom, setZoom] = useState(1);

  // We'll fill this in with our rendering logic next

  // Inside your StarMap component:
    useEffect(() => {

        // Extract the rendering logic to a separate function for reuse
        const renderStarMap = () => {
            // Move the rendering code here from the previous useEffect
            // This allows you to call it from multiple places
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const { width, height } = canvas.getBoundingClientRect();
        
            // Set canvas dimensions to match display size
            canvas.width = width;
            canvas.height = height;
            
            // Clear canvas
            ctx.fillStyle = '#0f172a'; // Dark blue background
            ctx.fillRect(0, 0, width, height);
            
            // Calculate local sidereal time
            const lst = calculateSiderealTime(dateTime, location.lng);
            
            // Draw stars
            ctx.fillStyle = 'white';
            
            const visibleStars = {};
            
            brightStars.forEach(star => {
            // Convert star coordinates to horizontal system
            const { altitude, azimuth } = equatorialToHorizontal(
                star.ra, star.dec, location.lat, lst
            );
            
            // Project to canvas coordinates
            const canvasCoords = horizontalToCanvas(altitude, azimuth, width, height, zoom);
            
            // Skip stars below horizon
            if (!canvasCoords) return;
            
            // Store visible star positions for constellation lines
            visibleStars[star.name] = canvasCoords;
            
            // Calculate star size based on magnitude
            // Brighter stars (lower magnitude) appear larger
            const starSize = Math.max(2, 6 - star.magnitude);
            
            // Draw star
            ctx.beginPath();
            ctx.arc(canvasCoords.x, canvasCoords.y, starSize, 0, 2 * Math.PI);
            ctx.fill();
            
            // Draw star name for bright stars
            if (star.magnitude < 1.5) {
                ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
                ctx.font = '12px sans-serif';
                ctx.fillText(star.name, canvasCoords.x + starSize + 2, canvasCoords.y);
                ctx.fillStyle = 'white';
            }
            });
            
            // Draw constellation lines
            ctx.strokeStyle = 'rgba(100, 100, 255, 0.3)';
            ctx.lineWidth = 1;
            
            constellationLines.forEach(constellation => {
            constellation.forEach(line => {
                const fromCoords = visibleStars[line.from];
                const toCoords = visibleStars[line.to];
                
                if (fromCoords && toCoords) {
                ctx.beginPath();
                ctx.moveTo(fromCoords.x, fromCoords.y);
                ctx.lineTo(toCoords.x, toCoords.y);
                ctx.stroke();
                }
            });
            });
        };
        renderStarMap();



        const handleResize = () => {
            const canvas = canvasRef.current;
            if (canvas) {
              const { width, height } = canvas.parentElement.getBoundingClientRect();
              canvas.width = width;
              canvas.height = height;
              // Re-render the star map
              renderStarMap();
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [location, dateTime, zoom]);

  return (
    <div className="relative w-full h-screen bg-slate-900">
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      ></canvas>
      
      {/* Controls will go here */}


      <div className="absolute top-4 left-4 p-4 bg-slate-800/80 rounded-lg backdrop-blur-sm text-white">
      <h2 className="text-xl font-bold mb-3">Interactive Star Map</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <div className="flex space-x-2">
            <input 
              type="number" 
              className="w-24 px-2 py-1 bg-slate-700 rounded"
              placeholder="Latitude"
              value={location.lat}
              onChange={(e) => setLocation(prev => ({ ...prev, lat: parseFloat(e.target.value) }))}
              min="-90"
              max="90"
              step="0.1"
            />
            <input 
              type="number" 
              className="w-24 px-2 py-1 bg-slate-700 rounded"
              placeholder="Longitude"
              value={location.lng}
              onChange={(e) => setLocation(prev => ({ ...prev, lng: parseFloat(e.target.value) }))}
              min="-180"
              max="180"
              step="0.1"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Date & Time</label>
          <input 
            type="datetime-local" 
            className="w-full px-2 py-1 bg-slate-700 rounded"
            value={dateTime.toISOString().slice(0, 16)}
            onChange={(e) => setDateTime(new Date(e.target.value))}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Zoom</label>
          <input 
            type="range" 
            min="0.5" 
            max="3" 
            step="0.1" 
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>
        
        <button 
          className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                setLocation({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                });
              },
              (error) => {
                console.error("Error getting location:", error);
                alert("Could not get your location. Using default.");
              }
            );
            setDateTime(new Date());
          }}
        >
          Use Current Location & Time
        </button>
      </div>
    </div>
    </div>
  );
};

export default StarMap;