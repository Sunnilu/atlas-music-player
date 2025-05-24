// src/components/CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

const CurrentlyPlaying = ({ song, isPlaying, onPlay, volume, onVolumeChange }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-lg">
      <CoverArt song={song} isPlaying={isPlaying} />
      <div className="mt-4 w-full">
        <SongTitle song={song} />
      </div>
      <div className="mt-4 w-full">
        <PlayControls isPlaying={isPlaying} onPlay={onPlay} />
      </div>
      <div className="mt-4 w-full">
        <VolumeControls volume={volume} onVolumeChange={onVolumeChange} />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
