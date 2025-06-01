import React from 'react';
import { Song } from '../types';
import CoverArt from './CoverArt';

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
    <div className="flex h-full w-full flex-col items-center rounded-2xl bg-bg-dark p-6 font-custom text-text-light shadow-custom transition-all">
      {/* ✅ Album Cover */}
      <CoverArt song={song} />

      {/* ✅ Song Title + Artist */}
      <div className="mb-4 text-center">
        <h3 className="text-xl font-bold">{song.title}</h3>
        <p className="text-sm text-gray-400">{song.author}</p>
      </div>

      {/* ✅ Playback Controls */}
      <div className="mb-4 flex items-center gap-4">
        <button
          onClick={onSpeedChange}
          className="rounded-md bg-surface px-2 py-1 text-sm text-white transition hover:bg-accent"
          aria-label="Speed"
        >
          {playbackSpeed}x
        </button>
        <button
          onClick={onPrevious}
          className="text-xl transition-colors hover:text-accent"
          aria-label="Back"
        >
          ⏮️
        </button>
        <button
          onClick={onPlay}
          className="rounded-xl bg-primary px-4 py-2 text-xl text-white shadow-md transition hover:bg-accent"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸️' : '▶️'}
        </button>
        <button
          onClick={onNext}
          className="text-xl transition-colors hover:text-accent"
          aria-label="Forward"
        >
          ⏭️
        </button>
        <button
          onClick={onToggleShuffle}
          className={`text-xl transition-colors ${shuffle ? 'text-accent' : 'hover:text-accent'}`}
          aria-label="Shuffle"
        >
          🔀
        </button>
      </div>

      {/* ✅ Volume Slider */}
      <div className="flex w-full items-center gap-2">
        <span className="text-sm">🔊</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => onVolumeChange(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Volume"
        />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
