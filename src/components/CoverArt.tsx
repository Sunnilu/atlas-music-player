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
      className="relative aspect-square w-full overflow-hidden rounded-xl bg-surface shadow-custom"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={song.image || '/placeholder.jpg'}
        alt={song.title}
        className="h-full w-full object-cover transition duration-300"
      />

      {hover && song.lyrics && (
        <div className="absolute inset-0 overflow-y-auto bg-black/70 p-4 text-sm text-white">
          <h4 className="mb-2 font-semibold">Lyrics</h4>
          <p className="whitespace-pre-wrap">{song.lyrics}</p>
        </div>
      )}
    </div>
  );
};

export default CoverArt;
