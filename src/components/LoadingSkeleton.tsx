// src/components/LoadingSkeleton.jsx
import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white font-custom text-gray-900 dark:bg-bg-dark dark:text-text-light">
      <main className="mx-auto flex h-auto w-full max-w-[896px] flex-col overflow-hidden rounded-2xl bg-white shadow-custom md:h-[640px] md:flex-row">
        {/* Left Panel */}
        <div className="w-full animate-pulse space-y-4 p-4 md:w-1/2">
          <div className="aspect-square w-full rounded-xl bg-gray-200"></div>

          <div className="h-4 w-2/3 rounded bg-gray-200"></div>
          <div className="h-4 w-1/3 rounded bg-gray-200"></div>

          <div className="mt-4 flex items-center justify-between">
            <div className="text-sm text-gray-400">1x</div>
            <div className="flex items-center gap-4">
              <div className="h-6 w-6 rounded bg-gray-300"></div>
              <div className="h-10 w-10 rounded-lg border-2 border-gray-300"></div>
              <div className="h-6 w-6 rounded bg-gray-300"></div>
              <div className="h-6 w-6 rounded bg-gray-300"></div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <div className="text-sm">🔊</div>
            <div className="h-2 w-full rounded bg-gray-300"></div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-full p-4 md:w-1/2">
          <h2 className="mb-4 text-xl font-semibold">Playlist</h2>
          <div className="animate-pulse space-y-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="w-2/3 space-y-1">
                  <div className="h-3 w-3/4 rounded bg-gray-200"></div>
                  <div className="h-3 w-1/2 rounded bg-gray-200"></div>
                </div>
                <div className="h-3 w-8 rounded bg-gray-200"></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoadingSkeleton;
