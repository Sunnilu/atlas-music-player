import React from 'react';

const SongTitle = ({ title = "Song Title", author = "Artist Name" }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-semibold text-white truncate">{title}</span>
      <span className="text-xs text-gray-400 truncate">{author}</span>
    </div>
  );
};

export default SongTitle;
