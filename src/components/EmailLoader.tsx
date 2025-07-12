import React from 'react';

const EmailPreloader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20 rounded-3xl blur-2xl animate-pulse"></div>
        
        {/* Email character container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Email character body */}
          <div className="relative animate-bounce">
            {/* Main email body */}
            <div className="w-32 h-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl border-2 border-gray-700 shadow-2xl relative overflow-hidden">
              {/* Subtle inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-transparent rounded-2xl"></div>
              
              {/* Email lines */}
              <div className="absolute top-4 left-4 right-4 space-y-2">
                <div className="h-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full animate-pulse"></div>
                <div className="h-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full w-3/4 animate-pulse animation-delay-2000"></div>
                <div className="h-1 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full w-1/2 animate-pulse animation-delay-4000"></div>
              </div>
              
              {/* Eyes */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-3 h-3 bg-white rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-black rounded-full mt-0.5 ml-0.5 animate-pulse"></div>
                </div>
                <div className="w-3 h-3 bg-white rounded-full shadow-lg">
                  <div className="w-2 h-2 bg-black rounded-full mt-0.5 ml-0.5 animate-pulse"></div>
                </div>
              </div>
              
              {/* Mouth */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
            
            {/* Arms */}
            <div className="absolute -left-6 top-8 w-8 h-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full transform -rotate-12 animate-pulse border border-gray-700"></div>
            <div className="absolute -right-6 top-8 w-8 h-2 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full transform rotate-12 animate-pulse border border-gray-700"></div>
            
            {/* Legs */}
            <div className="absolute -bottom-4 left-6 w-2 h-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-full border border-gray-700"></div>
            <div className="absolute -bottom-4 right-6 w-2 h-8 bg-gradient-to-b from-gray-900 to-gray-800 rounded-full border border-gray-700"></div>
            
            {/* Feet */}
            <div className="absolute -bottom-6 left-4 w-6 h-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full border border-gray-700"></div>
            <div className="absolute -bottom-6 right-4 w-6 h-3 bg-gradient-to-r from-gray-900 to-gray-800 rounded-full border border-gray-700"></div>
          </div>
          
          {/* Letter/envelope being carried */}
          <div className="absolute top-12 right-8 animate-bounce animation-delay-2000">
            <div className="w-16 h-12 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg border-2 border-gray-600 shadow-xl relative overflow-hidden">
              {/* Envelope flap */}
              <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-br from-gray-700 to-gray-800 transform origin-top"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-6 border-l-transparent border-r-transparent border-t-gray-600"></div>
              
              {/* Subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          {/* Loading text */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-transparent mb-2 animate-pulse">
              Loading...
            </h3>
            <p className="text-gray-500 text-sm animate-pulse animation-delay-2000">
              Preparing your email experience
            </p>
          </div>
          
          {/* Loading dots */}
          <div className="flex space-x-2 mt-6">
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-2000"></div>
            <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce animation-delay-4000"></div>
          </div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-10 left-10 w-1 h-1 bg-gray-600 rounded-full animate-ping"></div>
          <div className="absolute top-20 right-16 w-1 h-1 bg-gray-600 rounded-full animate-ping animation-delay-2000"></div>
          <div className="absolute bottom-16 left-20 w-1 h-1 bg-gray-600 rounded-full animate-ping animation-delay-4000"></div>
          <div className="absolute bottom-10 right-10 w-1 h-1 bg-gray-600 rounded-full animate-ping animation-delay-6000"></div>
        </div>
      </div>
    </div>
  );
};

export default EmailPreloader;