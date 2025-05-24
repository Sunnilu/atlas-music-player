// src/components/PlayControls.jsx
import { Play, Pause, SkipBack, SkipForward, Shuffle } from 'lucide-react';

export default function PlayControls() {
  return (
    <div className="flex justify-center gap-4 mb-6">
      <button className="w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
        <SkipBack className="w-6 h-6 text-gray-600" />
      </button>
      <button className="w-14 h-14 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
        <Play className="w-8 h-8 text-white" />
      </button>
      <button className="w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
        <SkipForward className="w-6 h-6 text-gray-600" />
      </button>
      <button className="w-12 h-12 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
        <Shuffle className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
}
