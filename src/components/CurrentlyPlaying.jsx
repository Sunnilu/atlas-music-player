// src/components/CurrentlyPlaying.jsx
import React from 'react';

const CurrentlyPlaying = ({ song, isPlaying, onPlay, volume, onVolumeChange }) => {
  return (
    <div className="w-full md:w-1/2 flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <div className="w-full aspect-square bg-gray-200 flex items-center justify-center rounded-md mb-4">
        <span className="text-gray-400">📷</span>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-bold text-gray-900">{song?.title || 'No Song Selected'}</h3>
        <p className="text-sm text-gray-500">{song?.artist || ''}</p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <span className="text-sm text-gray-500">1x</span>
        <button className="text-gray-500">⏮️</button>
        <button
          onClick={onPlay}
          className="p-2 border-2 rounded-md text-2xl hover:bg-gray-100"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button className="text-gray-500">⏭️</button>
        <button className="text-gray-500">🔁</button>
      </div>

      <div className="flex items-center w-full mt-4 gap-2">
        <span className="text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
