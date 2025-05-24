// src/components/CurrentlyPlaying.jsx
import React from 'react';
import CoverArt from './CoverArt';
import SongTitle from './SongTitle';
import PlayControls from './PlayControls';
import VolumeControls from './VolumeControls';

const CurrentlyPlaying = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-xl shadow-lg">
      <CoverArt />
      <div className="mt-4 w-full">
        <SongTitle />
      </div>
      <div className="mt-4 w-full">
        <PlayControls />
      </div>
      <div className="mt-4 w-full">
        <VolumeControls />
      </div>
    </div>
  );
};

export default CurrentlyPlaying;
