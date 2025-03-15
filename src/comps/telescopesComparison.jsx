// Failsafe for Telescope comparison ---
import React, { useState } from 'react';

const TelescopeComparisonTool = () => {
  // State for filters
  const [filters, setFilters] = useState({
    type: 'All Types',
    priceRange: 'Any Price',
    experienceLevel: 'All Levels'
  });
  
  // State to track if comparison has been run
  const [showResults, setShowResults] = useState(false);
  
  // Sample telescope data
  const telescopes = [
    {
      id: 1,
      name: 'SkyWatcher Explorer 130',
      type: 'Reflector',
      aperture: '130mm',
      focalLength: '900mm',
      price: 299,
      experienceLevel: 'Beginner',
      rating: 4.7,
      bestFor: 'Planetary viewing, bright deep sky objects',
      weight: '18 lbs',
      image: '/api/placeholder/250/180'
    },
    {
      id: 2,
      name: 'Celestron NexStar 8SE',
      type: 'Compound',
      aperture: '203mm',
      focalLength: '2032mm',
      price: 1199,
      experienceLevel: 'Intermediate',
      rating: 4.9,
      bestFor: 'Planets, deep sky objects, astrophotography',
      weight: '24 lbs',
      image: '/api/placeholder/250/180'
    },
    {
      id: 3,
      name: 'Orion SkyQuest XT10i',
      type: 'Reflector',
      aperture: '254mm',
      focalLength: '1200mm',
      price: 799,
      experienceLevel: 'Intermediate',
      rating: 4.8,
      bestFor: 'Deep sky objects, brighter galaxies',
      weight: '53 lbs',
      image: '/api/placeholder/250/180'
    },
    {
      id: 4,
      name: 'Celestron StarSense Explorer LT 80AZ',
      type: 'Refractor',
      aperture: '80mm',
      focalLength: '900mm',
      price: 189,
      experienceLevel: 'Beginner',
      rating: 4.5,
      bestFor: 'Moon, planets, smartphone compatible',
      weight: '10 lbs',
      image: '/api/placeholder/250/180'
    },
    {
      id: 5,
      name: 'Meade LX90-ACF',
      type: 'Compound',
      aperture: '254mm',
      focalLength: '2500mm',
      price: 1899,
      experienceLevel: 'Advanced',
      rating: 4.9,
      bestFor: 'Advanced astrophotography, planets, DSOs',
      weight: '65 lbs',
      image: '/api/placeholder/250/180'
    },
    {
      id: 6,
      name: 'Sky-Watcher ProED 100mm',
      type: 'Refractor',
      aperture: '100mm',
      focalLength: '900mm',
      price: 649,
      experienceLevel: 'Intermediate',
      rating: 4.6,
      bestFor: 'High-contrast planetary views, double stars',
      weight: '12 lbs',
      image: '/api/placeholder/250/180'
    }
  ];
  
  // Filter telescopes based on current selections
  const filteredTelescopes = telescopes.filter(telescope => {
    // Type filter
    if (filters.type !== 'All Types' && telescope.type !== filters.type) {
      return false;
    }
    
    // Price range filter
    if (filters.priceRange !== 'Any Price') {
      if (filters.priceRange === 'Under $200' && telescope.price >= 200) {
        return false;
      } else if (filters.priceRange === '$200 - $500' && (telescope.price < 200 || telescope.price > 500)) {
        return false;
      } else if (filters.priceRange === '$500 - $1000' && (telescope.price < 500 || telescope.price > 1000)) {
        return false;
      } else if (filters.priceRange === '$1000+' && telescope.price < 1000) {
        return false;
      }
    }
    
    // Experience level filter
    if (filters.experienceLevel !== 'All Levels' && telescope.experienceLevel !== filters.experienceLevel) {
      return false;
    }
    
    return true;
  });
  
  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setShowResults(false);
  };
  
  // Handle compare button click
  const handleCompare = () => {
    setShowResults(true);
  };
  
  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">★</span>);
    }
    
    return stars;
  };

  return (
    <div className="p-6 rounded-2xl relative overflow-hidden bg-gradient-to-r from-blue-900 to-teal-900 border border-blue-500/30">
      <h3 className="text-2xl font-semibold mb-4 text-center text-blue-200">
        Interactive Telescope Comparison Tool
      </h3>
      
      <p className="text-center text-blue-100 mb-6">
        Compare different telescope models side-by-side to find the perfect one for your needs and budget.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-teal-900/30 p-4 rounded-xl border border-teal-500/30">
          <h4 className="font-medium text-teal-200 mb-2">Type</h4>
          <select 
            name="type"
            value={filters.type}
            onChange={handleFilterChange}
            className="w-full bg-teal-800/50 text-teal-100 py-2 px-3 rounded-lg border border-teal-600/30 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          >
            <option>All Types</option>
            <option>Refractor</option>
            <option>Reflector</option>
            <option>Compound</option>
          </select>
        </div>
        
        <div className="bg-teal-900/30 p-4 rounded-xl border border-teal-500/30">
          <h4 className="font-medium text-teal-200 mb-2">Price Range</h4>
          <select 
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
            className="w-full bg-teal-800/50 text-teal-100 py-2 px-3 rounded-lg border border-teal-600/30 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          >
            <option>Any Price</option>
            <option>Under $200</option>
            <option>$200 - $500</option>
            <option>$500 - $1000</option>
            <option>$1000+</option>
          </select>
        </div>
        
        <div className="bg-teal-900/30 p-4 rounded-xl border border-teal-500/30">
          <h4 className="font-medium text-teal-200 mb-2">Experience Level</h4>
          <select 
            name="experienceLevel"
            value={filters.experienceLevel}
            onChange={handleFilterChange}
            className="w-full bg-teal-800/50 text-teal-100 py-2 px-3 rounded-lg border border-teal-600/30 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          >
            <option>All Levels</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>
      </div>
      
      <div className="text-center mb-8">
        <button 
          onClick={handleCompare}
          className="px-6 py-3 bg-gradient-to-r from-teal-700 to-blue-700 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          Compare Telescopes
        </button>
      </div>
      
      {showResults && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-4 text-center text-blue-200">
            Comparison Results ({filteredTelescopes.length} telescopes)
          </h4>
          
          {filteredTelescopes.length === 0 ? (
            <div className="bg-blue-900/50 p-6 rounded-xl text-center">
              <p className="text-blue-100">No telescopes match your selected criteria. Try adjusting your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTelescopes.map(telescope => (
                <div key={telescope.id} className="bg-blue-900/40 rounded-xl overflow-hidden border border-blue-500/30 hover:shadow-lg transition-all duration-300 hover:border-blue-400/50">
                  <div className="h-48 bg-black/30 overflow-hidden flex items-center justify-center">
                    <img src={telescope.image} alt={telescope.name} className="w-full object-cover" />
                  </div>
                  
                  <div className="p-4">
                    <h5 className="text-lg font-medium text-blue-200 mb-1">{telescope.name}</h5>
                    <p className="text-teal-300 text-sm mb-2">{telescope.type} Telescope</p>
                    
                    <div className="flex mb-3">
                      {renderStars(telescope.rating)}
                      <span className="text-blue-300 ml-2 text-sm">{telescope.rating}/5</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-blue-950/50 p-2 rounded-md">
                        <p className="text-xs text-blue-400">Aperture</p>
                        <p className="text-sm text-blue-100">{telescope.aperture}</p>
                      </div>
                      <div className="bg-blue-950/50 p-2 rounded-md">
                        <p className="text-xs text-blue-400">Focal Length</p>
                        <p className="text-sm text-blue-100">{telescope.focalLength}</p>
                      </div>
                      <div className="bg-blue-950/50 p-2 rounded-md">
                        <p className="text-xs text-blue-400">Weight</p>
                        <p className="text-sm text-blue-100">{telescope.weight}</p>
                      </div>
                      <div className="bg-blue-950/50 p-2 rounded-md">
                        <p className="text-xs text-blue-400">Level</p>
                        <p className="text-sm text-blue-100">{telescope.experienceLevel}</p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-blue-400">Best For</p>
                      <p className="text-sm text-blue-100">{telescope.bestFor}</p>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-teal-200">${telescope.price}</p>
                      <button className="px-3 py-1 bg-teal-700 hover:bg-teal-600 rounded-md text-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TelescopeComparisonTool;