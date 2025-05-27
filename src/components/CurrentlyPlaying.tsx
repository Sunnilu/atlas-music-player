// src/components/CurrentlyPlaying.tsx
import React from 'react';

const CurrentlyPlaying = ({ song, isPlaying, onPlay, volume, onVolumeChange }) => {
  return (
    <div className="flex flex-col items-center bg-white dark:bg-bg-dark text-gray-900 dark:text-text-light p-6 rounded-2xl shadow-custom w-full h-full font-custom transition-all">
      <div className="w-full aspect-square bg-gray-100 dark:bg-surface flex items-center justify-center rounded-xl mb-4">
        <span className="text-4xl">🎵</span>
      </div>

      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{song?.title || 'No Song Selected'}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">{song?.artist || ''}</p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">1x</span>
        <button className="text-xl hover:text-accent transition-colors">⏮️</button>
        <button
          onClick={onPlay}
          className="text-xl bg-primary hover:bg-accent text-white px-4 py-2 rounded-xl shadow-md transition"
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button className="text-xl hover:text-accent transition-colors">⏭️</button>
        <button className="text-xl hover:text-accent transition-colors">🔁</button>
      </div>

      <div className="flex items-center w-full gap-2">
        <span className="text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;

