// src/components/CoverArt.tsx
import React, { useState } from 'react';
import { Song } from '@types';

interface CoverArtProps {
  song: Song | null;
}

const CoverArt: React.FC<CoverArtProps> = ({ song }) => {
  const [showLyrics, setShowLyrics] = useState(false);

  if (!song) return null;

  return (
    <div
      className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md"
      onMouseEnter={() => setShowLyrics(true)}
      onMouseLeave={() => setShowLyrics(false)}
    >
      <img
        src={song.image}
        alt={`${song.title} cover`}
        className="w-full h-full object-cover"
      />

      {showLyrics && song.lyrics && (
        <div className="absolute inset-0 bg-black bg-opacity-80 text-white text-sm p-4 overflow-y-auto">
          <p className="whitespace-pre-wrap">{song.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default CoverArt;
