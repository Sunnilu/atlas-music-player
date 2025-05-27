// src/components/CurrentlyPlaying.tsx
import React from 'react';
import { Song } from '@types';

interface CurrentlyPlayingProps {
  song: Song | null;
  isPlaying: boolean;
  onPlay: () => void;
  volume: number;
  onVolumeChange: (v: number) => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  song,
  isPlaying,
  onPlay,
  volume,
  onVolumeChange,
}) => {
  if (!song) return null;

  return (
    <div className="flex flex-col items-center bg-bg-dark text-text-light p-6 rounded-2xl shadow-custom w-full h-full font-custom transition-all">
      <div className="w-full aspect-square bg-surface flex items-center justify-center rounded-xl mb-4 overflow-hidden">
        <img
          src={song.image}
          alt={song.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-sm text-gray-400">1x</span>
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
