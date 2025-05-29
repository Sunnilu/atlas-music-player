// src/components/PlayListItem.tsx
import React from 'react';
import { Song } from '../types';

interface PlayListItemProps {
  song: Song;
  isSelected: boolean;
  onClick: () => void;
}

const formatDuration = (duration: string): string => {
  const parts = duration.split(':');
  if (parts.length === 2) return duration;
  if (parts.length === 1) return `0:${parts[0].padStart(2, '0')}`;
  return '0:00';
};

const PlayListItem: React.FC<PlayListItemProps> = ({ song, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
    className={`flex items-center justify-between px-4 py-2 rounded-lg cursor-pointer transition-colors ${
      isSelected
        ? 'bg-blue-500 text-white'
        : 'bg-white dark:bg-bg-dark hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
      <div>
        <h4 className="text-sm font-medium">{song.title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400">{song.author}</p>
      </div>
      <span className="text-xs text-gray-500 dark:text-gray-300">
        {formatDuration(song.duration)}
      </span>
    </div>
  );
};

export default PlayListItem;
