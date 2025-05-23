import React from 'react';

const VolumeControls = ({ volume = 50, onChange }) => {
  return (
    <div className="flex items-center gap-2 w-32">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={onChange}
        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
      />
    </div>
  );
};

export default VolumeControls;
