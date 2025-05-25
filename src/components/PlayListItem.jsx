// src/components/PlayListItem.jsx
import React from 'react';

const PlayListItem = ({ song, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-4 py-2 cursor-pointer ${
        isSelected ? 'bg-blue-50 text-blue-900 font-semibold' : 'hover:bg-gray-50'
      }`}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm font-medium">{song.title}</p>
          <p className="text-xs text-gray-500">{song.artist}</p>
        </div>
        <span className="text-xs text-gray-500">{song.duration}</span>
      </div>
    </div>
  );
};

export default PlayListItem;
