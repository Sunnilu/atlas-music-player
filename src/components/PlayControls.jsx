// src/components/PlayControls.jsx
import { Play, Pause, SkipBack, SkipForward, Shuffle } from 'react';

export default function PlayControls() {
  return (
    <div className="mb-6 flex justify-center gap-4">
      <button className="h-12 w-12 rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
        <SkipBack className="h-6 w-6 text-gray-600" />
      </button>
      <button className="h-14 w-14 rounded-full bg-blue-600 transition-colors hover:bg-blue-700">
        <Play className="h-8 w-8 text-white" />
      </button>
      <button className="h-12 w-12 rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
        <SkipForward className="h-6 w-6 text-gray-600" />
      </button>
      <button className="h-12 w-12 rounded-full bg-gray-100 transition-colors hover:bg-gray-200">
        <Shuffle className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  );
}
