import React from 'react';
import {
  Rewind,
  FastForward,
  Play,
  Shuffle,
  GaugeCircle
} from 'lucide-react';

const PlayControls = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <button className="text-gray-300 hover:text-white transition">
        <GaugeCircle className="w-5 h-5" />
      </button>
      <button className="text-gray-300 hover:text-white transition">
        <Rewind className="w-5 h-5" />
      </button>
      <button className="text-white bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition">
        <Play className="w-5 h-5" />
      </button>
      <button className="text-gray-300 hover:text-white transition">
        <FastForward className="w-5 h-5" />
      </button>
      <button className="text-gray-300 hover:text-white transition">
        <Shuffle className="w-5 h-5" />
      </button>
    </div>
  );
};

export default PlayControls;
