// src/components/PlayListItem.tsx
import React from 'react';
// Update the import path to the correct location of the Song type
import { Song } from '../types'; // Adjust the path as needed

interface PlayListItemProps {
  song: Song;
  isSelected: boolean;
  onClick: () => void;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ song, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer px-4 py-3 rounded-lg transition-all ${
        isSelected
          ? 'bg-primary text-white font-semibold shadow-md'
          : 'hover:bg-accent hover:text-white'
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm">{song.title}</p>
          <p className="text-xs opacity-80">{song.artist}</p>
        </div>
        <span className="text-xs">{song.duration}</span>
      </div>
    </div>
  );
};

export default PlayListItem;
