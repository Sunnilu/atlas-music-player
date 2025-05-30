// src/components/CurrentlyPlaying.tsx
import React from 'react';
import { Song } from '../types'; // Fixed relative import
import CoverArt from './CoverArt'; // ✅ Fixed import to relative path

interface CurrentlyPlayingProps {
  song: Song | null;
  isPlaying: boolean;
  onPlay: () => void;
  volume: number;
  onVolumeChange: (v: number) => void;
  playbackSpeed: number;
  onSpeedChange: () => void;
  shuffle: boolean;
  onToggleShuffle: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const CurrentlyPlaying: React.FC<CurrentlyPlayingProps> = ({
  song,
  isPlaying,
  onPlay,
  volume,
  onVolumeChange,
  playbackSpeed,
  onSpeedChange,
  shuffle,
  onToggleShuffle,
  onPrevious,
  onNext,
}) => {
  if (!song) return null;

  return (
    <div className="flex flex-col items-center bg-bg-dark text-text-light p-6 rounded-2xl shadow-custom w-full h-full font-custom transition-all">
      {/* ✅ Album Cover */}
      <CoverArt song={song} />

      {/* ✅ Song Title + Artist */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.author}</p>
      </div>

      {/* ✅ Playback Controls */}
      <div className="flex items-center gap-4 mb-4">
        <button onClick={onSpeedChange} className="text-sm px-2 py-1 bg-surface text-white rounded-md hover:bg-accent transition">
          {playbackSpeed}x
        </button>
        <button onClick={onPrevious} className="text-xl hover:text-accent transition-colors">⏮️</button>
        <button onClick={onPlay} className="text-xl bg-primary hover:bg-accent text-white px-4 py-2 rounded-xl shadow-md transition">
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button onClick={onNext} className="text-xl hover:text-accent transition-colors">⏭️</button>
        <button onClick={onToggleShuffle} className={`text-xl transition-colors ${shuffle ? 'text-accent' : 'hover:text-accent'}`}>
          🔀
        </button>
      </div>

      {/* ✅ Volume Slider */}
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
