// src/components/SongTitle.tsx
import React from 'react';

interface SongTitleProps {
  title: string;
  artist: string;
}

const SongTitle: React.FC<SongTitleProps> = ({ title, artist }) => (
  <div className="text-center">
    <h2 className="text-xl font-bold">{title}</h2>
    <p className="text-gray-500">{artist}</p>
  </div>
);

export default SongTitle;
