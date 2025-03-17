import React, { useState } from 'react';
import { telescopes } from '../data/telescopesComparision';

const TelescopeComparisonTool = ({ isVisible, onClose }) => {
  // State for filters 
  const [filters, setFilters] = useState({
    type: 'All Types',
    priceRange: 'Any Price',
    experienceLevel: 'All Levels'
  });
  
  // State to track if comparison has been run 
  const [showResults, setShowResults] = useState(false);
  
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

  // Only render if visible
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="max-w-6xl w-full max-h-[80vh] overflow-y-auto">
        <div className="relative p-6 rounded-md bg-gradient-to-r from-blue-900 to-teal-900 border border-blue-500/30">
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-blue-200 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          
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
              className="px-6 py-3 bg-gradient-to-r from-teal-700 to-blue-700/70 rounded-full font-medium shadow-md hover:shadow-lg duration-200 hover:scale-103 hover:-translate-y-0.5"
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
                      {/* <div className="h-48 bg-black/30 overflow-hidden flex items-center justify-center">
                        <img src={telescope.image} alt={telescope.name} className="w-full object-cover" />
                      </div> */}
                      
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
                          {/* <button className="px-3 py-1 bg-teal-700 hover:bg-teal-600 rounded-md text-sm">
                            View Details
                          </button> */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TelescopeComparisonTool;