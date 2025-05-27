// src/components/CoverArt.tsx
import React, { useState } from 'react';
import { Song } from '@types';

interface CoverArtProps {
  song: Song;
}

const CoverArt: React.FC<CoverArtProps> = ({ song }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative w-full aspect-square bg-surface rounded-xl overflow-hidden shadow-custom"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={song.image || '/placeholder.jpg'}
        alt={song.title}
        className="w-full h-full object-cover transition duration-300"
      />

      {hover && song.lyrics && (
        <div className="absolute inset-0 bg-black/70 text-white p-4 text-sm overflow-y-auto">
          <h4 className="font-semibold mb-2">Lyrics</h4>
          <p className="whitespace-pre-wrap">{song.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default CoverArt;
