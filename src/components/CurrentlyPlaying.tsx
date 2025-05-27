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
    <div className="p-4 rounded-xl bg-surface text-white">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{song.title}</h2>
        <p className="text-sm opacity-70">{song.artist}</p>
      </div>
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={onPlay}>{isPlaying ? '⏸️' : '▶️'}</button>
      </div>
      <div className="flex items-center gap-2">
        <span>🔊</span>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;


