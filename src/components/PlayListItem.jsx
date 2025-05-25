// src/components/PlayListItem.jsx
import React from 'react';

const PlayListItem = ({ song, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`p-3 rounded cursor-pointer ${
        isSelected ? 'bg-gray-300' : 'hover:bg-gray-100'
      }`}
    >
      <p className="font-medium">{song.title}</p>
      <p className="text-sm text-gray-600">{song.artist} — {song.duration}</p>
    </div>
  );
};

export default PlayListItem;
