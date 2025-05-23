import React from 'react';

const PlayListItem = ({
  title = "Song Title",
  artist = "Artist Name",
  length = "3:45"
}) => {
  return (
    <div className="flex items-center justify-between py-2 px-4 hover:bg-gray-800 rounded-md cursor-pointer">
      <div className="flex flex-col">
        <span className="text-sm text-white font-medium truncate">{title}</span>
        <span className="text-xs text-gray-400 truncate">{artist}</span>
      </div>
      <span className="text-xs text-gray-400">{length}</span>
    </div>
  );
};

export default PlayListItem;
