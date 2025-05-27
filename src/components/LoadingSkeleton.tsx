// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-bg-dark dark:text-text-light font-custom">
      <main className="mx-auto w-full max-w-[896px] h-auto md:h-[640px] bg-white rounded-2xl shadow-custom flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Panel */}
        <div className="w-full md:w-1/2 p-4 animate-pulse space-y-4">
          <div className="w-full aspect-square bg-gray-200 rounded-xl"></div>
          
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-400">1x</div>
            <div className="flex gap-4 items-center">
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-10 h-10 border-2 border-gray-300 rounded-lg"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
              <div className="w-6 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="text-sm">🔊</div>
            <div className="h-2 bg-gray-300 rounded w-full"></div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-xl font-semibold mb-4">Playlist</h2>
          <div className="space-y-4 animate-pulse">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex justify-between items-center">
                <div className="w-2/3 space-y-1">
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-3 w-8 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoadingSkeleton;
