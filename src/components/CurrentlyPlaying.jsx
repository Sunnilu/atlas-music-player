// src/components/CurrentlyPlaying.jsx
import React from 'react';

const CurrentlyPlaying = ({ song, isPlaying, onPlay, volume, onVolumeChange }) => {
  return (
    <div className="flex flex-col items-center bg-gray-900 text-white p-4 rounded-lg w-full">
      <div className="text-center mb-4">
        {song ? (
          <>
            <p className="text-lg font-semibold">{song.title}</p>
            <p className="text-sm text-gray-300">{song.artist}</p>
          </>
        ) : (
          <p>No song selected</p>
        )}
      </div>

      <button
        onClick={onPlay}
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <input
        type="range"
        className="mt-4 w-full"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
      />
    </div>
  );
};

export default CurrentlyPlaying;
